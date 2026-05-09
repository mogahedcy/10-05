import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ReviewSchema from '@/components/ReviewSchema';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  generateServiceSchema, 
  generateFAQSchema,
  generateProductSchema
} from '@/lib/seo-utils';
import ProjectsGallery from '@/components/services/ProjectsGallery';
import ArticlesSection from '@/components/services/ArticlesSection';
import FAQSection from '@/components/services/FAQSection';
import ReviewsSection from '@/components/services/ReviewsSection';
import ServiceContentNavigation from '@/components/ServiceContentNavigation';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';
import ContentRefreshNotification from '@/components/ContentRefreshNotification';
import ByootShaarExpertArticle from '@/components/ByootShaarExpertArticle';
import { getServiceContentUpdates } from '@/lib/cache-manager';
import { prisma } from '@/lib/prisma';
import { buildCategoryWhereClause } from '@/lib/services-categories-mapping';
import { getLocalizedServiceContent } from '@/lib/related-content-fetcher';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import {
  Star,
  Phone,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Award,
  Shield,
  Crown,
  Home,
  Building,
  TreePine,
  Check,
  Mail,
  CheckCircle
} from 'lucide-react';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'byootShaar' });
  
  const isArabic = locale === 'ar';
  const baseUrl = 'https://www.deyarsu.com';
  const pageUrl = '/services/byoot-shaar';
  const canonicalPath = isArabic ? pageUrl : `/en${pageUrl}`;
  const pageImage = 'https://ext.same-assets.com/3073684241/1858852453.jpeg';
  
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
          alt: isArabic ? 'بيوت شعر جدة - ديار جدة العالمية' : 'Hair Tents Jeddah - Deyar Jeddah',
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

const byootShaarTypes = [
  {
    id: 'royal',
    image: 'https://ext.same-assets.com/3073684241/3661796902.jpeg',
    icon: Crown
  },
  {
    id: 'arabic',
    image: 'https://ext.same-assets.com/3073684241/566618696.jpeg',
    icon: Home
  },
  {
    id: 'majalis',
    image: 'https://ext.same-assets.com/3073684241/95813410.jpeg',
    icon: Building
  },
  {
    id: 'gardens',
    image: 'https://ext.same-assets.com/3073684241/1685504834.jpeg',
    icon: TreePine
  }
];

export default async function ByootShaarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'byootShaar' });
  const isArabic = locale === 'ar';
  const isRTL = locale === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const localePath = locale === 'ar' ? '' : '/en';
  const baseUrl = 'https://www.deyarsu.com';
  const pageImage = 'https://ext.same-assets.com/3073684241/1858852453.jpeg';
  
  const breadcrumbItems = [
    { label: t('breadcrumb.services'), href: `${localePath}/#services` },
    { label: t('breadcrumb.byootShaar'), href: `${localePath}/services/byoot-shaar`, current: true }
  ];

  // Fetch dynamic content from DB
  const { projects, articles, faqs, reviews } = await getLocalizedServiceContent('byoot-shaar', locale);
  const categoryWhere = buildCategoryWhereClause('byoot-shaar');
  const contentUpdates = await getServiceContentUpdates(categoryWhere);
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews : 0;
  const categoryName = isArabic ? 'بيوت الشعر' : 'Byoot Shaar';

  const whatsappMessage = isArabic 
    ? "السلام عليكم، أريد الاستفسار عن خدمة بيوت الشعر وطلب عرض سعر."
    : "Hello, I would like to inquire about hair tent service and request a quote.";
  const whatsappURL = `https://wa.me/966553719009?text=${encodeURIComponent(whatsappMessage)}`;

  const heroFeatures = [
    { icon: Shield, text: t('hero.features.warranty') },
    { icon: Award, text: t('hero.features.quality') },
    { icon: Users, text: t('hero.features.team') },
    { icon: Clock, text: t('hero.features.delivery') }
  ];

  const stats = [
    { number: '500+', label: t('stats.projects') },
    { number: '15+', label: t('stats.experience') },
    { number: '100%', label: t('stats.satisfaction') },
    { number: '24/7', label: t('stats.support') }
  ];

  const serviceSchema = generateServiceSchema({
    name: t('schema.serviceName'),
    description: t('schema.serviceDescription'),
    areaServed: isArabic ? 'جدة' : 'Jeddah',
    priceRange: '5000-8000',
    image: pageImage,
    url: `${localePath}/services/byoot-shaar`,
    aggregateRating: { ratingValue: 4.9, reviewCount: 167 }
  });

  const productSchema = generateProductSchema({
    name: t('schema.productName'),
    description: t('schema.productDescription'),
    image: pageImage,
    price: '5000',
    currency: 'SAR',
    availability: 'https://schema.org/InStock',
    aggregateRating: { ratingValue: 4.9, reviewCount: 167 }
  });

  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('schema.projectsListName'),
    "description": t('schema.projectsListDescription'),
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description || '',
        "url": `${baseUrl}/portfolio/${project.id}`,
        "image": project.media_items?.[0]?.src || ''
      }
    }))
  };

  const articlesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('schema.articlesListName'),
    "description": t('schema.articlesListDescription'),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesListSchema) }}
      />

      <ServiceReviewSchema 
        serviceName={t('pageTitle')}
        serviceUrl={`${baseUrl}${isArabic ? '' : '/en'}/services/byoot-shaar`}
        reviews={reviews}
      />

      <Navbar />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-600 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-600 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}{' '}
              <span className="text-amber-600">{t('hero.titleHighlight')}</span>
              <br />
              {t('hero.subtitle')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-600">
              {heroFeatures.map((feature) => (
                <div key={feature.text} className="flex items-center space-x-2 space-x-reverse">
                  <feature.icon className="w-4 h-4 text-amber-600" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="tel:+966553719009">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.callCta')}
                </Button>
              </Link>
              <Link href={whatsappURL} target="_blank">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('hero.whatsappCta')}
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute top-1/4 left-8 w-16 h-16 bg-amber-600/10 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-blue-600/10 rounded-full blur-xl" />
        </section>

        {/* Byoot Shaar Types Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('byootTypes.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('byootTypes.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {byootShaarTypes.map((type) => {
                const TypeIcon = type.icon;
                return (
                  <div key={type.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="bg-amber-50 p-6 text-center relative overflow-hidden">
                      <div className="inline-flex items-center justify-center w-16 h-16 text-amber-600 rounded-full bg-white/80 mb-4 relative z-10 shadow-sm">
                        <TypeIcon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 relative z-10">{t(`byootTypes.${type.id}.title`)}</h3>
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/40 rounded-full blur-2xl" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4 text-center">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {t(`byootTypes.${type.id}.category`)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow text-center">
                        {t(`byootTypes.${type.id}.description`)}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {(t.raw(`byootTypes.${type.id}.features`) as string[]).map((feature: string) => (
                          <li key={feature} className="flex items-start text-sm text-gray-600">
                            <Check className="w-4 h-4 text-amber-600 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t pt-4 mt-auto">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500">{isArabic ? 'الحجم:' : 'Size:'} {t(`byootTypes.${type.id}.size`)}</span>
                        </div>
                        <div className="text-lg font-black text-amber-600 mb-4 text-center">
                          {t(`byootTypes.${type.id}.price`)}
                        </div>
                        <Link href={whatsappURL} target="_blank">
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                            {isArabic ? 'طلب عرض سعر' : 'Request Quote'}
                            <ArrowIcon className="w-4 h-4 mr-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isArabic ? 'إنجازاتنا في أرقام' : 'Our Achievements in Numbers'}
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {isArabic 
                  ? 'أرقام تتحدث عن خبرتنا وجودة خدماتنا في مجال بيوت الشعر'
                  : 'Numbers that speak about our expertise and service quality in hair tents'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">{stat.label}</div>
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

        {/* Massive SEO Intensive Article Section */}
        <ByootShaarExpertArticle isArabic={isArabic} />

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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={whatsappURL} target="_blank">
                <Button size="lg" className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('cta.whatsappButton')}
                </Button>
              </Link>
              <Link href="tel:+966553719009">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('cta.callButton')}
                </Button>
              </Link>
              <Link href="mailto:info@deyarsu.com">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('cta.emailButton')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
      <ContentRefreshNotification lastUpdate={contentUpdates.mostRecentUpdate} contentType="projects" />
    </>
  );
}
