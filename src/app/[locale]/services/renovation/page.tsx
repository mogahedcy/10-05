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
import RenovationExpertArticle from '@/components/RenovationExpertArticle';
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
  Target,
  Home,
  Paintbrush,
  Droplets
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
  const t = await getTranslations({ locale, namespace: 'renovation' });
  
  const isArabic = locale === 'ar';
  const baseUrl = 'https://www.deyarsu.com';
  const pageUrl = '/services/renovation';
  const canonicalPath = isArabic ? pageUrl : `/en${pageUrl}`;
  const pageImage = 'https://ext.same-assets.com/3073684241/renovation-hero.jpeg';
  
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
          alt: isArabic ? 'ترميم وتشطيب جدة - ديار جدة العالمية' : 'Renovation & Finishing Jeddah - Deyar Jeddah',
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

const serviceTypeIcons = {
  villas: Home,
  resthouses: Home,
  painting: Paintbrush,
  plumbing: Droplets
};

export default async function RenovationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'renovation' });
  const isArabic = locale === 'ar';
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const localePath = locale === 'ar' ? '' : '/en';
  const baseUrl = 'https://www.deyarsu.com';
  const pageImage = 'https://ext.same-assets.com/3073684241/renovation-hero.jpeg';
  
  const breadcrumbItems = [
    { label: t('breadcrumb.services'), href: `${localePath}/#services` },
    { label: t('breadcrumb.renovation'), href: `${localePath}/services/renovation`, current: true }
  ];

  const { projects, articles, faqs, reviews } = await getLocalizedServiceContent('renovation', locale);

  // Get content updates for cache notification
  const categoryWhere = buildCategoryWhereClause('renovation');
  const contentUpdates = await getServiceContentUpdates(categoryWhere);

  // Calculate review statistics
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews 
    : 0;

  const heroFeatures = [
    { icon: MapPin, text: t('hero.features.allAreas') },
    { icon: Shield, text: t('hero.features.warranty') },
    { icon: Award, text: t('hero.features.projects') }
  ];

  const whyChooseUsFeatures = [
    {
      icon: Award,
      title: isArabic ? 'خبرة طويلة' : 'Long Experience',
      description: isArabic ? 'أكثر من 15 عاماً من الخبرة في ترميم وتشطيب الفلل والمباني في جدة بلمسات عصرية.' : 'Over 15 years of experience in renovating and finishing villas and buildings in Jeddah with modern touches.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: isArabic ? 'مواد أصلية ومضمونة' : 'Original Guaranteed Materials',
      description: isArabic ? 'نستخدم مواد بناء معتمدة ذات جودة عالية تدوم لسنوات طويلة وتحافظ على جمال المبنى.' : 'We use certified, high-quality building materials that last for years and maintain the beauty of the building.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Users,
      title: isArabic ? 'طاقم عمل متكامل' : 'Integrated Workforce',
      description: isArabic ? 'فريق فني متكامل يضم سباكين، كهربائيين، دهانين، وفنيي ديكور تحت إشراف هندسي صارم.' : 'An integrated technical team including plumbers, electricians, painters, and decorators under strict engineering supervision.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Zap,
      title: isArabic ? 'دقة في المواعيد' : 'Punctuality',
      description: isArabic ? 'نحترم وقت عملائنا ونلتزم بجدول زمني واضح للتسليم من أول يوم لتوقيع العقد.' : 'We respect our customers\' time and adhere to a clear delivery schedule from day one of signing the contract.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: ThumbsUp,
      title: isArabic ? 'رضا العملاء أولاً' : 'Customer Satisfaction First',
      description: isArabic ? 'تقييمات ممتازة من مئات العملاء الذين وضعوا ثقتهم بنا لتجديد مساحاتهم الخاصة.' : 'Excellent reviews from hundreds of customers who trusted us to renovate their personal spaces.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Target,
      title: isArabic ? 'تسعير واضح وشفاف' : 'Clear & Transparent Pricing',
      description: isArabic ? 'نقدم لك تفصيل كامل للأسعار بدون أي تكاليف خفية، لنضمن لك أفضل قيمة مقابل المال.' : 'We provide a complete breakdown of prices without any hidden costs, ensuring you the best value for money.',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const serviceTypes = ['villas', 'resthouses', 'painting', 'plumbing'].map((id) => ({
    id,
    title: t(`serviceTypes.${id}.title`),
    description: t(`serviceTypes.${id}.description`),
    features: t.raw(`serviceTypes.${id}.features`) as string[],
    price: t(`serviceTypes.${id}.price`),
    bgColor: id === 'villas' ? 'bg-blue-50' : id === 'resthouses' ? 'bg-green-50' : id === 'painting' ? 'bg-purple-50' : 'bg-cyan-50',
    iconColor: id === 'villas' ? 'text-blue-600' : id === 'resthouses' ? 'text-green-600' : id === 'painting' ? 'text-purple-600' : 'text-cyan-600',
    icon: serviceTypeIcons[id as keyof typeof serviceTypeIcons]
  }));

  const stats = [
    { number: '1500+', label: t('stats.projects') },
    { number: '15+', label: t('stats.experience') },
    { number: '100%', label: t('stats.satisfaction') },
    { number: '24/7', label: t('stats.support') }
  ];

  const relatedServices = [
    {
      id: 'sandwich-panel',
      title: isArabic ? 'ساندوتش بانل' : 'Sandwich Panel',
      description: isArabic ? 'حلول سريعة لإضافة غرف وملاحق ومستودعات عازلة للحرارة بشكل ممتاز قبل البدء بالتشطيبات.' : 'Quick solutions for adding rooms, annexes, and excellently insulated warehouses before finishing works.',
      href: '/services/sandwich-panel',
      features: isArabic ? ['غرف جاهزة', 'ملاحق للفلل', 'عزل حراري'] : ['Ready Rooms', 'Villa Annexes', 'Thermal Insulation']
    },
    {
      id: 'pergolas',
      title: isArabic ? 'البرجولات' : 'Pergolas',
      description: isArabic ? 'أضف لمسة جمالية لحديقتك بعد الترميم ببرجولات خشبية أو حديدية بتصاميم حديثة.' : 'Add an aesthetic touch to your garden after renovation with wooden or iron pergolas in modern designs.',
      href: '/services/pergolas',
      features: isArabic ? ['برجولات خشبية', 'برجولات حديد', 'تصاميم عصرية'] : ['Wooden Pergolas', 'Iron Pergolas', 'Modern Designs']
    },
    {
      id: 'byoot-shaar',
      title: isArabic ? 'بيوت شعر' : 'Traditional Tents',
      description: isArabic ? 'تجهيز وتفصيل بيوت شعر ومجالس تراثية فخمة كجزء من عملية تجديد الفلل والاستراحات.' : 'Preparation and detailing of luxurious traditional tents and gathering spaces as part of villa and rest house renovations.',
      href: '/services/byoot-shaar',
      features: isArabic ? ['خيام ملكية', 'ديكورات تراثية', 'إضاءة مخفية'] : ['Royal Tents', 'Heritage Decorations', 'Hidden Lighting']
    }
  ];

  const serviceSchema = generateServiceSchema({
    name: t('schema.serviceName'),
    description: t('schema.serviceDescription'),
    areaServed: isArabic ? 'جدة' : 'Jeddah',
    priceRange: '15-500',
    image: pageImage,
    url: '/services/renovation'
  });

  const faqSchema = generateFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  const productSchema = generateProductSchema({
    name: isArabic ? 'خدمات الترميم والتشطيب المتكاملة' : 'Integrated Renovation & Finishing Services',
    description: isArabic ? 'خدمات دهانات، ديكورات جبسية، سباكة، وكهرباء لتجديد المنازل بالكامل.' : 'Painting, gypsum decorations, plumbing, and electrical services for complete home renewal.',
    image: [pageImage],
    category: isArabic ? 'خدمات بناء وصيانة' : 'Construction and Maintenance Services',
    brand: isArabic ? 'ديار جدة العالمية' : 'Deyar Jeddah Global',
    price: '150',
    priceCurrency: 'SAR',
    aggregateRating: {
      ratingValue: averageRating > 0 ? averageRating : 4.8,
      reviewCount: totalReviews > 0 ? totalReviews : 120
    }
  });

  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": isArabic ? "مشاريع الترميم والتشطيب" : "Renovation & Finishing Projects",
    "description": isArabic ? "أحدث مشاريع تجديد الفلل والقصور والاستراحات والملاحق." : "Latest projects of renewing villas, palaces, rest houses, and annexes.",
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
    "name": isArabic ? "مقالات ومعلومات التشطيبات" : "Finishing Articles & Information",
    "description": isArabic ? "مقالات متخصصة حول الدهانات والديكورات ونصائح الترميم." : "Specialized articles about painting, decorations, and renovation tips.",
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

  const categoryName = isArabic ? 'ترميم وتشطيب' : 'Renovation';

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
        serviceUrl={`${baseUrl}${isArabic ? '' : '/en'}/services/renovation`}
        reviews={reviews}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex mb-8">
                <Breadcrumb items={breadcrumbItems} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                {t('hero.title')}{' '}
                <span className="text-blue-600">{t('hero.titleHighlight')}</span>
                <br />
                {t('hero.subtitle')}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
                {heroFeatures.map((feature) => (
                  <div key={`hero-feature-${feature.text.substring(0, 10)}`} className="flex items-center space-x-2 space-x-reverse">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link href="tel:+966553719009">
                  <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-5 h-5 mr-2" />
                    {isArabic ? 'اتصل بنا' : 'Call Us'}
                  </Button>
                </Link>
                <Link href="https://wa.me/+966553719009" target="_blank">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isArabic ? 'تواصل واتساب' : 'WhatsApp Us'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 left-8 w-16 h-16 bg-blue-200 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-indigo-200 rounded-full blur-xl" />
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('serviceTypes.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('serviceTypes.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceTypes.map((service) => (
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

                    <div className="text-lg font-bold text-blue-600 mb-4">
                      {service.price}
                    </div>

                    <Link href={`https://wa.me/+966553719009?text=${encodeURIComponent(isArabic ? `أرغب في الحصول على معلومات عن ${service.title}` : `I would like to get information about ${service.title}`)}`} target="_blank">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
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
                {isArabic ? 'لماذا ديار جدة لتشطيب منزلك؟' : 'Why Deyar Jeddah to Finish Your Home?'}
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 SEO Intensive Article Section */}
        <RenovationExpertArticle isArabic={isArabic} />

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

        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isArabic ? 'جاهز لمشروعك؟' : 'Ready for Your Project?'}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {isArabic ? 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر فوري.' : 'Contact us today for a free consultation and instant quote.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="tel:+966553719009">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </Button>
              </Link>
              <Link href="https://wa.me/+966553719009" target="_blank">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700">
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
