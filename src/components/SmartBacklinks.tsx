'use client';

import React from 'react';
import Link from 'next/link';
import { Link as LinkIcon, ExternalLink, Activity, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

interface SmartBacklinksProps {
  currentPath: string;
  categoryName?: string; // e.g. "mazallat", "landscaping", "articles", "projects"
}

export default function SmartBacklinks({ currentPath, categoryName = "general" }: SmartBacklinksProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const dir = isArabic ? "rtl" : "ltr";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  // INTERNAL LINKS MATRIX (High Value Deep Links)
  const internalLinks = [
    { nameAr: "تصميم بيوت الشعر الملكية", nameEn: "Royal Byoot Shaar", path: "/services/byoot-shaar", category: "byoot-shaar" },
    { nameAr: "تنسيق الحدائق والشلالات", nameEn: "Landscaping & Waterfalls", path: "/services/landscaping", category: "landscaping" },
    { nameAr: "مظلات السيارات والمسابح", nameEn: "Car & Pool Shades", path: "/services/mazallat", category: "mazallat" },
    { nameAr: "سواتر الجدران الفاخرة", nameEn: "Luxury Wall Fences", path: "/services/sawater", category: "sawater" },
    { nameAr: "برجولات الحدائق والجلسات", nameEn: "Garden Pergolas", path: "/services/pergolas", category: "pergolas" },
    { nameAr: "الساندوتش بانل والغرف الجاهزة", nameEn: "Sandwich Panels & Ready Rooms", path: "/services/sandwich-panel", category: "sandwich-panel" },
    { nameAr: "ترميم وتشطيب المباني", nameEn: "Building Renovation & Finishing", path: "/services/renovation", category: "renovation" },
    { nameAr: "مقالات هندسية ونصائح", nameEn: "Engineering Articles", path: "/articles", category: "articles" },
    { nameAr: "معرض المشاريع المنفذة", nameEn: "Executed Projects Gallery", path: "/portfolio", category: "projects" },
  ];

  // Filter out the current category to avoid linking to itself
  const filteredInternalLinks = internalLinks.filter(link => link.category !== categoryName && !currentPath.includes(link.path));

  // EXTERNAL AUTHORITY LINKS (Outbound Links for SEO Trust)
  const getExternalLinks = (category: string) => {
    const commonLinks = [
      { 
        nameAr: "رؤية السعودية 2030 (جودة الحياة)", 
        nameEn: "Saudi Vision 2030 (Quality of Life)", 
        url: "https://www.vision2030.gov.sa/v2030/vrps/qol/" 
      },
      { 
        nameAr: "كود البناء السعودي", 
        nameEn: "Saudi Building Code", 
        url: "https://sbc.gov.sa/" 
      }
    ];

    const specificLinks: Record<string, any[]> = {
      mazallat: [
        { nameAr: "معايير PVC العالمية", nameEn: "Global PVC Standards", url: "https://en.wikipedia.org/wiki/Polyvinyl_chloride" }
      ],
      sawater: [
        { nameAr: "أنظمة حماية الخصوصية المعمارية", nameEn: "Architectural Privacy Systems", url: "https://en.wikipedia.org/wiki/Fence" }
      ],
      landscaping: [
        { nameAr: "أنظمة الري العالمية", nameEn: "Global Irrigation Systems", url: "https://en.wikipedia.org/wiki/Irrigation" },
        { nameAr: "فوائد التشجير البيئية", nameEn: "Environmental Afforestation Benefits", url: "https://www.unep.org/" }
      ],
      "byoot-shaar": [
        { nameAr: "تاريخ الخيام وبيوت الشعر العربية", nameEn: "History of Arab Tents", url: "https://en.wikipedia.org/wiki/Bedouin_tent" }
      ],
      pergolas: [
        { nameAr: "العمارة الخارجية والبرجولات", nameEn: "Outdoor Architecture & Pergolas", url: "https://en.wikipedia.org/wiki/Pergola" }
      ]
    };

    return [...(specificLinks[category] || []), ...commonLinks];
  };

  const externalLinks = getExternalLinks(categoryName);

  return (
    <div className="mt-16 mb-8 w-full border-t-2 border-gray-100 pt-10" dir={dir}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* INTERNAL LINKS (SEO Mesh) */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-3">
            <LinkIcon className="w-6 h-6 text-primary" />
            {isArabic ? "روابط داخلية هامة (شبكة خدماتنا):" : "Important Internal Links (Our Network):"}
          </h4>
          <ul className="space-y-4">
            {filteredInternalLinks.slice(0, 5).map((link, idx) => (
              <li key={idx}>
                <Link href={`${isArabic ? '' : '/en'}${link.path}`} className="flex items-center text-gray-600 hover:text-primary transition-colors group font-medium">
                  <Arrow className="w-4 h-4 mr-2 ml-2 text-gray-400 group-hover:text-primary transition-colors" />
                  {isArabic ? link.nameAr : link.nameEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EXTERNAL LINKS (Domain Authority Booster) */}
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-emerald-600" />
            {isArabic ? "مراجع ومصادر خارجية (معايير الجودة):" : "External References & Sources (Quality Standards):"}
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            {isArabic ? "نحن نلتزم بالمعايير العالمية والمحلية في تنفيذ كافة مشاريعنا:" : "We adhere to global and local standards in executing all our projects:"}
          </p>
          <ul className="space-y-4">
            {externalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-emerald-700 transition-colors group font-medium">
                  <ExternalLink className="w-4 h-4 mr-2 ml-2 text-emerald-500" />
                  {isArabic ? link.nameAr : link.nameEn}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
