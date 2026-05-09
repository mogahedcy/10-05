import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Target } from 'lucide-react';

export default async function HomeSeoArticle({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'seo' });
  const isArabic = locale === 'ar';

  if (!isArabic) return null; // We might only want this massive SEO text for the primary Arabic site

  const keywords = [
    "أفضل شركة مظلات بجدة", "مظلات سيارات", "تركيب برجولات", "سواتر خصوصية",
    "ساندوتش بانل", "تنسيق حدائق", "مظلات مسابح", "بيوت شعر", "خيام ملكية",
    "تصميم مظلات", "مظلات خشبية", "مظلات PVC", "مظلات لكسان", "حداد مظلات"
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed text-justify">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center leading-tight">
            أفضل شركة مظلات وبرجولات في جدة — ديار جدة العالمية
          </h2>
          
          <p className="mb-6">
            منذ أكثر من <strong>15 عاماً</strong>، ونحن في <strong>ديار جدة العالمية</strong> نقدم أرقى وأفضل خدمات تصميم وتركيب <strong>المظلات والسواتر والبرجولات</strong> في مدينة جدة والمملكة العربية السعودية. لقد استطعنا بفضل الله ثم بفضل ثقة أكثر من 5000 عميل، أن نرسخ اسمنا كأفضل شركة متخصصة في توفير حلول التظليل المبتكرة التي تجمع بين <em>الجمال المعماري والمتانة الهندسية</em>.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-10 mb-4">لماذا تختار مظلات السيارات والحدائق من ديار جدة؟</h3>
          <p className="mb-6">
            تعتبر <strong>مظلات السيارات</strong> من الأساسيات في مناخ المملكة الحار. نحن نستخدم أجود أنواع الأقمشة العالمية مثل <strong>PVC الكوري والألماني</strong> والبولي إيثيلين الأسترالي، والتي تضمن عزلاً تاماً للأشعة فوق البنفسجية (UV) ومقاومة عالية للأمطار والرياح. سواء كنت تبحث عن <em>مظلات كابولي، مظلات هرمية، مظلات مخروطية</em>، أو مظلات شد إنشائي، فإن فريقنا الهندسي جاهز لتنفيذها بضمان يصل إلى 10 سنوات.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-10 mb-4">تركيب برجولات وتنسيق حدائق بأحدث التصاميم</h3>
          <p className="mb-6">
            حول حديقة منزلك أو سطح الفلة إلى تحفة فنية من خلال خدمات <strong>تركيب البرجولات وتنسيق الحدائق</strong>. نقدم برجولات خشبية وحديدية، بالإضافة إلى برجولات الخشب البلاستيكي (WPC) المعالج ضد التسوس والرطوبة. كما نوفر خيارات تسقيف باللكسان الشفاف أو الملون لتوفير إضاءة طبيعية مع الحماية من الأمطار.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-10 mb-4">خدمات متكاملة: سواتر، ساندوتش بانل، وبيوت شعر</h3>
          <ul className="space-y-3 mb-8 list-disc list-inside">
            <li><strong>السواتر:</strong> نوفر سواتر حديدية (مجدول وشرائح)، سواتر خشبية، وسواتر قماشية لضمان الخصوصية التامة لأسوار الفلل والمدارس.</li>
            <li><strong>ساندوتش بانل:</strong> تنفيذ غرف وملاحق ومستودعات باستخدام ألواح الساندوتش بانل المعزولة حرارياً وصوتياً.</li>
            <li><strong>بيوت الشعر والخيام:</strong> تصميم وتركيب بيوت شعر ملكية وخيام تراثية تناسب الأجواء العربية الأصيلة ومجهزة بأفضل الديكورات الداخلية.</li>
          </ul>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-12">
            <h4 className="text-xl font-bold text-primary mb-6 flex items-center">
              <Target className="w-6 h-6 text-accent ml-3" />
              الكلمات المفتاحية وخدماتنا في جدة:
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
