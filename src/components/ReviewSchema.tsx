interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  title?: string;
}

interface ReviewSchemaProps {
  serviceName: string;
  itemType?: 'Service' | 'Product' | 'LocalBusiness';
  serviceUrl?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  reviews?: Review[];
  provider?: {
    name: string;
    url?: string;
  };
}

export default function ReviewSchema({ 
  serviceName,
  itemType = 'Service',
  serviceUrl,
  aggregateRating,
  reviews,
  provider
}: ReviewSchemaProps) {
  const reviewsToUse = reviews || [];

  const defaultProvider = {
    name: 'ديار جدة العالمية',
    url: 'https://www.deyarsu.com'
  };

  const providerData = provider || defaultProvider;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": serviceName,
    ...(serviceUrl && { "url": serviceUrl }),
    ...(itemType === 'Service' && {
      "provider": {
        "@type": "Organization",
        "name": providerData.name,
        ...(providerData.url && { "url": providerData.url })
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue.toString(),
        "reviewCount": aggregateRating.reviewCount.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    ...(reviewsToUse.length > 0 && {
      "review": reviewsToUse.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished,
        ...(review.title && { "name": review.title })
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
