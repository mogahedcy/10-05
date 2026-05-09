import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';
import MarqueeTicker from '@/components/MarqueeTicker';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import InteractiveQuiz from '@/components/InteractiveQuiz';
import StickyCtaBanner from '@/components/StickyCtaBanner';
import HomePageBreadcrumb from '@/components/HomePageBreadcrumb';
import ReviewSchema from '@/components/ReviewSchema';
import SearchActionSchema from '@/components/SearchActionSchema';
import HowToSchema from '@/components/HowToSchema';
import ProductSchema from '@/components/ProductSchema';
import OrganizationSchema from '@/components/OrganizationSchema';
import WebSiteSchema from '@/components/WebSiteSchema';
import RelatedContent from '@/components/RelatedContent';
import AllProductsSchema from '@/components/AllProductsSchema';
import EnhancedFAQSchema from '@/components/EnhancedFAQSchema';
import HomeQuoteForm from '@/components/HomeQuoteForm';
import ArticlesSection from '@/components/services/ArticlesSection';

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  ssr: true
});

const StickyWhatsApp = dynamic(() => import('@/components/StickyWhatsApp'));

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  ssr: true
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  ssr: true
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const isArabic = locale === 'ar';
  const baseUrl = 'https://www.deyarsu.com';

  // جلب الصور لأبرز المشاريع لعرضها في نتائج البحث
  let dynamicImages: any[] = [];
  try {
    const db: any = prisma;
    const Project = db.projects || db.project;
    if (Project) {
      const featuredProjects = await Project.findMany({
        where: { status: 'PUBLISHED', featured: true },
        include: {
          media_items: { 
            where: { type: 'IMAGE' },
            orderBy: { order: 'asc' }, 
            take: 1 
          }
        },
        orderBy: { views: 'desc' },
        take: 3
      });

      dynamicImages = featuredProjects
        .filter((p: any) => p.media_items && p.media_items.length > 0)
        .map((p: any) => ({
          url: p.media_items[0].src.startsWith('http') ? p.media_items[0].src : `${baseUrl}${p.media_items[0].src.startsWith('/') ? '' : '/'}${p.media_items[0].src}`,
          width: 1200,
          height: 630,
          alt: isArabic ? `${p.title} - ديار جدة العالمية` : `${p.titleEn || p.title} - Deyar Jeddah Global`
        }));
    }
  } catch (error) {
    console.error('Error fetching featured images for metadata:', error);
  }

  // إضافة الصورة الأساسية ثم صور المشاريع
  const ogImages = [
    {
      url: `${baseUrl}/images/hero-bg.webp`,
      width: 1200,
      height: 630,
      alt: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah Global',
    },
    ...dynamicImages
  ];

  return {
    title: {
      absolute: t('title'),
    },
    description: t('description'),
    keywords: isArabic
      ? "مظلات سيارات جدة، سواتر ومظلات، تركيب برجولات، ساندوتش بانل، تنسيق حدائق، أسعار المظلات، شركة مظلات، حداد جدة، مظلات خشبية، سواتر لكسان، بيوت شعر، خيام ملكية، مظلات قماش، سواتر شينكو"
      : "Jeddah car shades, shades and fences, pergola installation, sandwich panel, landscaping, shade prices, shade company, Jeddah blacksmith, wooden shades, lexan fences",
    alternates: {
      canonical: isArabic ? baseUrl : `${baseUrl}/en`,
      languages: {
        'ar': baseUrl,
        'en': `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}${locale === 'en' ? '/en' : ''}`,
      siteName: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah Global',
      locale: isArabic ? 'ar_SA' : 'en_US',
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ogImages.map(img => img.url),
    },
  };
}

// ...
async function getLatestProjects() {
  try {
    const db: any = prisma as any;
    const Project = db.projects || db.project;
    if (!Project) return [];

    const projects = await Project.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        media_items: { orderBy: { order: 'asc' }, take: 1 },
        project_tags: { take: 3 },
      },
      orderBy: [{ createdAt: 'desc' }],
      take: 50
    });

    const formattedProjects = projects.map((project: any) => ({
      ...project,
      mediaItems: project.media_items || [],
      tags: project.project_tags || [],
      slug: project.slug || project.title.replace(/[^\u0600-\u06FF\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase()
    }));

    const projectsByCategory = new Map();
    formattedProjects.forEach((project: any) => {
      if (!projectsByCategory.has(project.category)) {
        projectsByCategory.set(project.category, project);
      }
    });

    const latestProjects = Array.from(projectsByCategory.values())
      .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 8);

    return latestProjects;
  } catch (e) {
    console.error('Error fetching homepage projects:', e);
    return [];
  }
}

async function getLatestFaqs() {
  try {
    const db: any = prisma as any;
    const FAQ = db.faqs || db.faq || db.fAQ || db.fAQModel;
    if (!FAQ) return [];

    const faqs = await FAQ.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ order: 'asc' }],
      take: 50
    });
    return faqs;
  } catch (e) {
    console.error('Error fetching homepage faqs:', e);
    return [];
  }
}

async function getHomepageFaqs() {
  try {
    const db: any = prisma as any;
    if (!db.faqs) return [];
    
    return await db.faqs.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ featured: 'desc' }, { order: 'asc' }, { createdAt: 'desc' }],
      take: 10
    });
  } catch (error) {
    console.error('Error fetching homepage FAQs:', error);
    return [];
  }
}

async function getLatestArticles(isArabic: boolean) {
  try {
    const db: any = prisma as any;
    if (!db.articles) return [];

    const articles = await db.articles.findMany({
      where: { status: 'PUBLISHED' },
      select: {
        id: true, title: true, titleEn: true, excerpt: true, excerptEn: true,
        slug: true, featured: true, publishedAt: true, createdAt: true,
        category: true, aiAnalysis: true,
        article_media_items: {
          orderBy: { order: 'asc' },
          select: { src: true, alt: true, title: true, type: true, thumbnail: true }
        },
        _count: { select: { article_views: true, article_likes: true } }
      },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    });

    return articles.map((a: any) => {
      let title = a.title;
      let excerpt = a.excerpt;

      if (!isArabic) {
        title = a.titleEn || a.title;
        excerpt = a.excerptEn || a.excerpt;
        
        if (!a.titleEn && a.aiAnalysis) {
          try {
            const parsed = JSON.parse(a.aiAnalysis);
            if (parsed.englishVersion) {
              if (parsed.englishVersion.title) title = parsed.englishVersion.title;
              if (parsed.englishVersion.excerpt) excerpt = parsed.englishVersion.excerpt;
            }
          } catch (_) {}
        }
      }

      return { ...a, title, excerpt };
    });
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return [];
  }
}

async function getTopReviews() {
  try {
    const db: any = prisma as any;
    if (!db.comments) return [];

    const comments = await db.comments.findMany({
      where: { status: 'APPROVED', rating: { gte: 4 } },
      orderBy: { createdAt: 'desc' },
      take: 6,
      include: {
        projects: {
          select: { title: true, titleEn: true, category: true }
        }
      }
    });

    return comments.map((c: any) => ({
      id: c.id,
      name: c.name,
      location: 'جدة - السعودية', // We can hardcode Jeddah or use a real location if exists
      service: c.projects ? c.projects.category : 'خدمات المظلات',
      rating: c.rating,
      text: c.message,
      date: c.createdAt.getFullYear().toString()
    }));
  } catch (error) {
    console.error('Error fetching top reviews:', error);
    return [];
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  const [latestProjects, faqs, articles, realReviews] = await Promise.all([
    getLatestProjects(),
    getHomepageFaqs(),
    getLatestArticles(isArabic),
    getTopReviews()
  ]);

  return (
    <>
      <OrganizationSchema locale={locale} />
      <WebSiteSchema locale={locale} />
      {faqs && faqs.length > 0 && (
        <EnhancedFAQSchema faqs={faqs} />
      )}
      <AllProductsSchema locale={locale} />
      <HomePageBreadcrumb locale={locale} />
      <SearchActionSchema />
      <HowToSchema
        name={isArabic ? "كيفية تركيب مظلات السيارات" : "How to Install Car Shades"}
        description={isArabic ? "دليل شامل لتركيب مظلات السيارات بطريقة احترافية" : "Complete guide to professionally installing car shades"}
        totalTime="P1D"
        steps={isArabic ? [
          {
            name: "الاستشارة والمعاينة",
            text: "نقوم بزيارة الموقع وأخذ القياسات الدقيقة وتحديد نوع المظلة المناسب"
          },
          {
            name: "التصميم والتخطيط",
            text: "نقدم تصميم ثلاثي الأبعاد للمظلة ونختار الخامات الأفضل جودة"
          },
          {
            name: "تجهيز الموقع",
            text: "نجهز القواعد الخرسانية والأعمدة الحديدية بمقاسات مدروسة"
          },
          {
            name: "التركيب والتشطيب",
            text: "نركب الهيكل المعدني ونشد القماش بطريقة احترافية"
          }
        ] : [
          {
            name: "Consultation and Inspection",
            text: "We visit the site, take accurate measurements, and determine the appropriate shade type"
          },
          {
            name: "Design and Planning",
            text: "We provide 3D design for the shade and select the best quality materials"
          },
          {
            name: "Site Preparation",
            text: "We prepare concrete foundations and iron columns with calculated dimensions"
          },
          {
            name: "Installation and Finishing",
            text: "We install the metal frame and professionally stretch the fabric"
          }
        ]}
      />
      <ProductSchema
        name={isArabic ? "مظلات سيارات PVC - جودة عالمية" : "PVC Car Shades - Global Quality"}
        description={isArabic
          ? "مظلات سيارات من خامات PVC عالمية، مقاومة للحرارة والأمطار، بضمان 10 سنوات"
          : "Car shades made of global PVC materials, heat and rain resistant, with 10 year warranty"}
        image="https://www.deyarsu.com/uploads/mazallat-1.webp"
        price="80.00"
        currency="SAR"
        rating={{ ratingValue: 4.9, reviewCount: 287 }}
        sku="CAR-SHADE-PVC-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "مظلات سيارات" : "Car Shades"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["PVC", "لكسان", "حديد مجلفن"] : ["PVC", "Lexan", "Galvanized Iron"]}
      />
      <ProductSchema
        name={isArabic ? "برجولات خشبية فاخرة" : "Luxury Wooden Pergolas"}
        description={isArabic
          ? "برجولات خشبية وحديدية للحدائق والاستراحات، تصاميم عصرية وكلاسيكية بضمان 10 سنوات"
          : "Wooden and iron pergolas for gardens and rest areas, modern and classic designs with 10 year warranty"}
        image="https://www.deyarsu.com/uploads/pergola-1.jpg"
        price="150.00"
        currency="SAR"
        rating={{ ratingValue: 4.8, reviewCount: 156 }}
        sku="PERGOLA-WOOD-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "برجولات" : "Pergolas"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["خشب معالج", "حديد مطلي", "ألومنيوم"] : ["Treated Wood", "Coated Iron", "Aluminum"]}
      />
      <ProductSchema
        name={isArabic ? "سواتر خصوصية حديدية" : "Iron Privacy Fences"}
        description={isArabic
          ? "سواتر خصوصية بأنواع متعددة: حديد، قماش، خشبي، شرائح. حماية كاملة للخصوصية بضمان 15 سنة"
          : "Privacy fences in multiple types: iron, fabric, wooden, slats. Complete privacy protection with 15 year warranty"}
        image="https://www.deyarsu.com/uploads/sawater-1.webp"
        price="80.00"
        currency="SAR"
        rating={{ ratingValue: 4.9, reviewCount: 198 }}
        sku="SAWATER-IRON-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "سواتر" : "Privacy Fences"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["حديد مجلفن", "قماش PVC", "شرائح ألومنيوم"] : ["Galvanized Iron", "PVC Fabric", "Aluminum Slats"]}
      />
      <ProductSchema
        name={isArabic ? "ساندوتش بانل عازل" : "Insulated Sandwich Panel"}
        description={isArabic
          ? "ألواح ساندوتش بانل للعزل الحراري والصوتي، مثالية للمستودعات والهناجر بضمان 10 سنوات"
          : "Sandwich panels for thermal and acoustic insulation, ideal for warehouses and hangars with 10 year warranty"}
        image="https://www.deyarsu.com/uploads/sandwich-panel-1.jpg"
        price="120.00"
        currency="SAR"
        rating={{ ratingValue: 4.7, reviewCount: 89 }}
        sku="SANDWICH-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "ساندوتش بانل" : "Sandwich Panel"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["صاج مجلفن", "فوم عازل", "بولي يوريثان"] : ["Galvanized Steel", "Insulating Foam", "Polyurethane"]}
      />
      <ProductSchema
        name={isArabic ? "تنسيق حدائق احترافي" : "Professional Landscaping"}
        description={isArabic
          ? "خدمات تنسيق وتصميم الحدائق، زراعة النباتات، تركيب العشب الصناعي والطبيعي، شبكات الري"
          : "Landscaping and garden design services, planting, artificial and natural grass installation, irrigation systems"}
        image="https://www.deyarsu.com/uploads/landscaping-1.webp"
        price="50.00"
        currency="SAR"
        rating={{ ratingValue: 4.9, reviewCount: 134 }}
        sku="LANDSCAPE-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "تنسيق حدائق" : "Landscaping"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["عشب صناعي", "نباتات زينة", "حجر طبيعي"] : ["Artificial Grass", "Ornamental Plants", "Natural Stone"]}
      />
      <ProductSchema
        name={isArabic ? "بيوت شعر تراثية أصيلة" : "Authentic Traditional Hair Houses"}
        description={isArabic
          ? "بيوت شعر تراثية أصيلة بتصاميم سعودية عريقة، مصنوعة من أجود أنواع شعر الماعز"
          : "Authentic traditional hair houses with original Saudi designs, made from the finest goat hair"}
        image="https://www.deyarsu.com/uploads/byoot-shaar-1.webp"
        price="180.00"
        currency="SAR"
        rating={{ ratingValue: 4.8, reviewCount: 67 }}
        sku="BYOOT-SHAAR-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "بيوت شعر" : "Traditional Houses"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["شعر ماعز طبيعي", "أعمدة خشبية", "قماش تراثي"] : ["Natural Goat Hair", "Wooden Poles", "Traditional Fabric"]}
      />
      <ProductSchema
        name={isArabic ? "خيام ملكية فاخرة" : "Luxury Royal Tents"}
        description={isArabic
          ? "خيام ملكية فاخرة للمناسبات والأفراح، تصاميم راقية ومساحات واسعة مقاومة للعوامل الجوية"
          : "Luxury royal tents for events and weddings, elegant designs and spacious weather-resistant areas"}
        image="https://www.deyarsu.com/uploads/khayyam-1.webp"
        price="250.00"
        currency="SAR"
        rating={{ ratingValue: 4.9, reviewCount: 45 }}
        sku="KHAYYAM-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "خيام ملكية" : "Royal Tents"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["قماش مقاوم للماء", "هيكل ألومنيوم", "إضاءة LED"] : ["Waterproof Fabric", "Aluminum Frame", "LED Lighting"]}
      />
      <ProductSchema
        name={isArabic ? "ترميم وتجديد الملحقات" : "Annex Renovation Services"}
        description={isArabic
          ? "خدمات ترميم وتجديد الملحقات والاستراحات والفلل، تحديث التصاميم وتحسين العزل"
          : "Renovation services for annexes, rest areas and villas, design updates and insulation improvement"}
        image="https://www.deyarsu.com/uploads/renovation-1.webp"
        price="500.00"
        currency="SAR"
        rating={{ ratingValue: 4.7, reviewCount: 78 }}
        sku="RENOVATION-001"
        brand={isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"}
        category={isArabic ? "ترميم وتجديد" : "Renovation"}
        location={isArabic ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}
        materials={isArabic ? ["دهانات عازلة", "بلاط", "جبس بورد"] : ["Insulating Paints", "Tiles", "Gypsum Board"]}
      />
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PortfolioSection initialProjects={latestProjects} />
      <BeforeAfterSlider />
      <InteractiveQuiz />
      <TestimonialsSection initialReviews={realReviews} />
      
      {/* 🚀 إضافة نموذج الطلب لزيادة المبيعات (Conversion) */}
      <HomeQuoteForm />
      
      {/* 🚀 مقالات ديناميكية تم توليدها بالذكاء الاصطناعي (SEO Booster) */}
      {articles && articles.length > 0 && (
        <ArticlesSection articles={articles} categoryName={isArabic ? "المقالات الحديثة" : "Latest Articles"} />
      )}
      
      <FAQSection initialFaqs={faqs} />
      <StickyCtaBanner />
      <StickyWhatsApp />
      <Footer />
    </>
  );
}
