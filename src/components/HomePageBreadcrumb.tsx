import Link from 'next/link';
import BreadcrumbSchema from './BreadcrumbSchema';

interface HomePageBreadcrumbProps {
  locale?: string;
}

export default function HomePageBreadcrumb({ locale = 'ar' }: HomePageBreadcrumbProps) {
  const isRTL = locale === 'ar';
  const homeText = isRTL ? 'الرئيسية' : 'Home';

  return (
    <BreadcrumbSchema 
      items={[]}
      baseUrl="https://www.deyarsu.com"
      homeName={homeText}
    />
  );
}
