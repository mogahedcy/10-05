import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ProjectsGallery from '@/components/services/ProjectsGallery';
import ArticlesSection from '@/components/services/ArticlesSection';
import FAQSection from '@/components/services/FAQSection';
import ReviewsSection from '@/components/services/ReviewsSection';
import ServiceContentNavigation from '@/components/ServiceContentNavigation';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';
import SandwichPanelExpertArticle from '@/components/SandwichPanelExpertArticle';
import ContentRefreshNotification from '@/components/ContentRefreshNotification';
import SmartBacklinks from '@/components/SmartBacklinks';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  generateServiceSchema, 
  generateFAQSchema,
  generateProductSchema,
} from '@/lib/seo-utils';
import { getServiceContentUpdates } from '@/lib/cache-manager';

import {
  Shield,
  Square,
  Building,
  Warehouse,
  Home,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Star,
  Award,
  Users,
  Clock,
  MapPin,
  Zap,
  ThumbsUp,
  Target
} from 'lucide-react';
import { buildCategoryWhereClause } from '@/lib/services-categories-mapping';
import { getLocalizedServiceContent } from '@/lib/related-content-fetcher';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sandwichPanel' });
  
  const isArabic = locale === 'ar';
  const baseUrl = 'https://www.deyarsu.com';
  const pageUrl = '/services/sandwich-panel';
  const canonicalPath = isArabic ? pageUrl : `/en${pageUrl}`;
  const pageImage = 'https://ext.same-assets.com/3073684241/sandwich-panel-hero.jpeg';
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    keywords: t('keywords'),
    authors: [{ name: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah' }],
    robots: 'index, follow',
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages: {
        'ar': `${baseUrl}${pageUrl}`,
        'en': `${baseUrl}/en${pageUrl}`,
        'x-default': `${baseUrl}${pageUrl}`,
      },
    },
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      url: `${baseUrl}${canonicalPath}`,
      siteName: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah',
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: isArabic ? 'ساندوتش بانل جدة - ديار جدة العالمية' : 'Sandwich Panel Jeddah - Deyar Jeddah',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('pageTitle'),
      description: t('pageDescription'),
      images: [pageImage],
    },
  };
}

const panelTypeIcons = {
  walls: Square,
  roofs: Building,
  rooms: Home,
  warehouses: Warehouse
};

export default async function SandwichPanelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'sandwichPanel' });
  const isArabic = locale === 'ar';
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const localePath = locale === 'ar' ? '' : '/en';
  const baseUrl = 'https://www.deyarsu.com';
  const pageImage = 'https://ext.same-assets.com/3073684241/sandwich-panel-hero.jpeg';
  
  const breadcrumbItems = [
    { label: t('breadcrumb.services'), href: `${localePath}/#services` },
    { label: t('breadcrumb.sandwichPanel'), href: `${localePath}/services/sandwich-panel`, current: true }
  ];

  const { projects, articles, faqs, reviews } = await getLocalizedServiceContent('sandwich-panel', locale);

  // Get content updates for cache notification
  const categoryWhere = buildCategoryWhereClause('sandwich-panel');
  const contentUpdates = await getServiceContentUpdates(categoryWhere);

  // Calculate review statistics
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews 
    : 0;

  const heroFeatures = [
    { icon: MapPin, text: t('hero.features.allAreas') },
    { icon: Clock, text: t('hero.features.warranty') },
    { icon: Star, text: t('hero.features.projects') }
  ];

  const whyChooseUsFeatures = [
    {
      icon: Award,
      title: isArabic ? 'خبرة معتمدة' : 'Certified Experience',
      description: isArabic ? 'خبرة تزيد عن 15 عاماً في توريد وتركيب ألواح الساندوتش بانل بمختلف أنواعها وسماكاتها.' : 'Over 15 years of experience in supplying and installing sandwich panels of various types and thicknesses.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: isArabic ? 'ضمان شامل' : 'Comprehensive Warranty',
      description: isArabic ? 'نقدم ضماناً حقيقياً ومكتوباً على الهياكل وألواح الساندوتش بانل وعزل التسريبات يصل إلى 10 سنوات.' : 'We offer a real, written warranty on structures, panels, and leak insulation up to 10 years.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Users,
      title: isArabic ? 'فريق هندسي متخصص' : 'Specialized Engineering Team',
      description: isArabic ? 'تنفيذ المشاريع تحت إشراف مهندسين وفنيين متخصصين لضمان أعلى معايير الجودة والسلامة.' : 'Project execution under the supervision of specialized engineers and technicians to ensure the highest quality and safety standards.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Zap,
      title: isArabic ? 'سرعة التنفيذ' : 'Speed of Execution',
      description: isArabic ? 'نلتزم بالجدول الزمني المحدد بفضل توفر المعدات الحديثة والعمالة المدربة والجاهزة دائماً.' : 'We adhere to the specified schedule thanks to the availability of modern equipment and a trained, always-ready workforce.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: ThumbsUp,
      title: isArabic ? 'عزل حراري ممتاز' : 'Excellent Thermal Insulation',
      description: isArabic ? 'ألواح بانل تتميز بعزل حراري وصوتي عالي، مما يوفر في استهلاك الكهرباء ويوفر بيئة مريحة.' : 'Panel boards feature high thermal and acoustic insulation, saving electricity and providing a comfortable environment.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Target,
      title: isArabic ? 'أسعار منافسة' : 'Competitive Prices',
      description: isArabic ? 'نقدم أفضل الأسعار في السوق لتوريد وتركيب الساندوتش بانل دون التنازل عن جودة المواد والتنفيذ.' : 'We offer the best market prices for supplying and installing sandwich panels without compromising on materials and execution quality.',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const panelTypes = ['walls', 'roofs', 'rooms', 'warehouses'].map((id) => ({
    id,
    title: t(`panelTypes.${id}.title`),
    description: t(`panelTypes.${id}.description`),
    features: t.raw(`panelTypes.${id}.features`) as string[],
    price: t(`panelTypes.${id}.price`),
    bgColor: id === 'walls' ? 'bg-slate-50' : id === 'roofs' ? 'bg-blue-50' : id === 'rooms' ? 'bg-green-50' : 'bg-orange-50',
    iconColor: id === 'walls' ? 'text-slate-600' : id === 'roofs' ? 'text-blue-600' : id === 'rooms' ? 'text-green-600' : 'text-orange-600',
    icon: panelTypeIcons[id as keyof typeof panelTypeIcons]
  }));

  const stats = [
    { number: '800+', label: t('stats.projects') },
    { number: '15+', label: t('stats.experience') },
    { number: '99%', label: t('stats.satisfaction') },
    { number: '24/7', label: t('stats.support') }
  ];

  const relatedServices = [
    {
      id: 'renovation',
      title: isArabic ? 'الترميم والتشطيب' : 'Renovation and Finishing',
      description: isArabic ? 'خدمات ترميم شاملة للمباني بعد إضافات الساندوتش بانل، تشمل الدهانات والتشطيبات والديكور.' : 'Comprehensive building renovation services after sandwich panel additions, including paints, finishing, and decor.',
      href: '/services/renovation',
      features: isArabic ? ['دهانات داخلية وخارجية', 'أعمال السباكة والكهرباء', 'ديكورات جبسية'] : ['Interior & Exterior Painting', 'Plumbing & Electrical', 'Gypsum Decorations']
    },
    {
      id: 'mazallat',
      title: isArabic ? 'المظلات' : 'Shades',
      description: isArabic ? 'تركيب مظلات للسيارات والحدائق كحلول تظليل مكملة للمستودعات ومواقف السيارات.' : 'Installation of car and garden shades as complementary shading solutions for warehouses and parking lots.',
      href: '/services/mazallat',
      features: isArabic ? ['مظلات سيارات', 'مظلات هرمية', 'مظلات شد إنشائي'] : ['Car Shades', 'Pyramid Shades', 'Tensile Shades']
    },
    {
      id: 'sawater',
      title: isArabic ? 'السواتر' : 'Fences',
      description: isArabic ? 'توفير الخصوصية للمباني والمصانع من خلال سواتر متينة تتناسب مع هيكل الساندوتش بانل.' : 'Providing privacy for buildings and factories through durable fences that fit with the sandwich panel structure.',
      href: '/services/sawater',
      features: isArabic ? ['سواتر حديد', 'سواتر قماش', 'سواتر بلاستيك'] : ['Iron Fences', 'Fabric Fences', 'Plastic Fences']
    }
  ];

  const serviceSchema = generateServiceSchema({
    name: t('schema.serviceName'),
    description: t('schema.serviceDescription'),
    areaServed: isArabic ? 'جدة' : 'Jeddah',
    priceRange: '85-8000',
    image: pageImage,
    url: '/services/sandwich-panel'
  });

  const faqSchema = generateFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  const productSchema = generateProductSchema({
    name: isArabic ? 'ساندوتش بانل بولي يوريثان و بوليسترين' : 'Polyurethane and EPS Sandwich Panel',
    description: isArabic ? 'ألواح ساندوتش بانل عالية العزل للأسقف والجدران والغرف الجاهزة والمستودعات.' : 'High-insulation sandwich panel boards for roofs, walls, ready rooms, and warehouses.',
    image: [pageImage],
    category: isArabic ? 'مواد بناء' : 'Building Materials',
    brand: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah Global',
    price: '85',
    priceCurrency: 'SAR',
    aggregateRating: {
      ratingValue: averageRating > 0 ? averageRating : 4.9,
      reviewCount: totalReviews > 0 ? totalReviews : 90
    }
  });

  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": isArabic ? "مشاريع الساندوتش بانل" : "Sandwich Panel Projects",
    "description": isArabic ? "أحدث مشاريع تصميم وتركيب غرف ومستودعات الساندوتش بانل." : "Latest projects for designing and installing sandwich panel rooms and warehouses.",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ImageObject",
        "name": project.title,
        "description": project.description,
        "url": `${baseUrl}/portfolio/${project.slug || project.id}`,
        "contentUrl": project.media_items?.[0]?.src || '',
        "thumbnailUrl": project.media_items?.[0]?.src || '',
        "caption": project.media_items?.[0]?.alt || project.title,
        "width": "1200",
        "height": "800",
        "uploadDate": new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"
        },
        "publisher": {
          "@type": "Organization",
          "name": isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        }
      }
    }))
  };

  const articlesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": isArabic ? "مقالات ومعلومات الساندوتش بانل" : "Sandwich Panel Articles and Information",
    "description": isArabic ? "مقالات متخصصة حول استخدامات وتركيب الساندوتش بانل والعزل." : "Specialized articles on the uses and installation of sandwich panels and insulation.",
    "numberOfItems": articles.length,
    "itemListElement": articles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "url": `${baseUrl}/articles/${article.slug || article.id}`,
        "image": article.article_media_items?.[0]?.src || '',
        "author": {
          "@type": "Organization",
          "name": isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global"
        },
        "publisher": {
          "@type": "Organization",
          "name": isArabic ? "ديار جدة العالمية" : "Deyar Jeddah Global",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": article.publishedAt || article.createdAt,
        "dateModified": article.publishedAt || article.createdAt
      }
    }))
  };

  const categoryName = isArabic ? 'ساندوتش بانل' : 'Sandwich Panel';

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {projects.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
        />
      )}
      {articles.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesListSchema) }}
        />
      )}

      <ServiceReviewSchema 
        serviceName={t('pageTitle')}
        serviceUrl={`${baseUrl}${isArabic ? '' : '/en'}/services/sandwich-panel`}
        reviews={reviews}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-zinc-50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex mb-8">
                <Breadcrumb items={breadcrumbItems} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                {t('hero.title')}{' '}
                <span className="text-slate-600">{t('hero.titleHighlight')}</span>
                <br />
                {t('hero.subtitle')}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
                {heroFeatures.map((feature) => (
                  <div key={`hero-feature-${feature.text.substring(0, 10)}`} className="flex items-center space-x-2 space-x-reverse">
                    <feature.icon className="w-4 h-4 text-slate-600" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link href="tel:+966553719009">
                  <Button size="lg" className="text-lg px-8 py-4 bg-slate-600 hover:bg-slate-700">
                    <Phone className="w-5 h-5 mr-2" />
                    {isArabic ? 'اتصل بنا' : 'Call Us'}
                  </Button>
                </Link>
                <Link href="https://wa.me/+966553719009" target="_blank">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-slate-600 text-slate-600 hover:bg-slate-50">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isArabic ? 'تواصل واتساب' : 'WhatsApp Us'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 left-8 w-16 h-16 bg-slate-200 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-gray-200 rounded-full blur-xl" />
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('panelTypes.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('panelTypes.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {panelTypes.map((service) => (
                <div
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <div className={`${service.bgColor} p-6 text-center relative`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconColor} rounded-full bg-white/80 mb-4`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={`feature-${service.id}-${index}`} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="text-lg font-bold text-slate-600 mb-4">
                      {service.price}
                    </div>

                    <Link href={`https://wa.me/+966553719009?text=${encodeURIComponent(isArabic ? `أرغب في الحصول على معلومات عن ${service.title}` : `I would like to get information about ${service.title}`)}`} target="_blank">
                      <Button className="w-full bg-slate-600 hover:bg-slate-700 transition-colors">
                        {isArabic ? 'مزيد من المعلومات' : 'More Info'}
                        <ArrowIcon className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceContentNavigation 
          projectsCount={projects.length}
          articlesCount={articles.length}
          faqsCount={faqs.length}
          reviewsCount={reviews.length}
        />

        <div id="projects">
          <ProjectsGallery projects={projects} categoryName={categoryName} />
        </div>

        <div id="articles">
          <ArticlesSection articles={articles} categoryName={categoryName} />
        </div>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {isArabic ? 'لماذا تختارنا لتركيب الساندوتش بانل؟' : 'Why Choose Us for Sandwich Panel?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsFeatures.map((feature, index) => (
                <div
                  key={`why-feature-${index}`}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconColor} ${feature.bgColor} rounded-2xl mb-6`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={`stat-${index}`} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-slate-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 SEO Intensive Article Section */}
        <SandwichPanelExpertArticle isArabic={isArabic} />

        <div id="faqs">
          <FAQSection faqs={faqs} categoryName={categoryName} />
        </div>

        <div id="reviews">
          <ReviewsSection 
            reviews={reviews}
            categoryName={categoryName}
            averageRating={averageRating}
            totalReviews={totalReviews}
          />
        </div>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {isArabic ? 'خدمات ذات صلة' : 'Related Services'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isArabic ? 'اكتشف خدماتنا الأخرى التي قد تناسب احتياجاتك.' : 'Discover our other services that might suit your needs.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link key={service.id} href={service.href}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={`related-${service.id}-${index}`} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isArabic ? 'جاهز لمشروعك؟' : 'Ready for Your Project?'}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {isArabic ? 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر فوري.' : 'Contact us today for a free consultation and instant quote.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="tel:+966553719009">
                <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </Button>
              </Link>
              <Link href="https://wa.me/+966553719009" target="_blank">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isArabic ? 'واتساب الآن' : 'WhatsApp Now'}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Content Refresh Notification */}
        <ContentRefreshNotification 
          lastUpdate={contentUpdates.mostRecentUpdate}
          contentType="projects"
        />
      </div>
    </>
  );
}
