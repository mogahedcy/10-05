import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, ShieldAlert, Award, CheckCircle, HardHat, Paintbrush, Hammer, Home } from 'lucide-react';

export default function RenovationExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    'ترميم فلل جدة', 'تشطيبات منازل جدة 2026', 'مقاول ترميم جدة', 'أسعار ترميم المنازل',
    'تجديد استراحات جدة', 'دهانات خارجية جدة', 'ترميم ملاحق', 'صيانة مباني جدة',
    'تشطيب فيلا جدة', 'أعمال سباكة وكهرباء', 'ترميم واجهات', 'بلاط وسيراميك جدة',
    'مقاول تشطيبات', 'أسعار متر التشطيب', 'ترميم شامل',
  ];
  const keywordsEn = [
    'Villa renovation Jeddah', 'Home finishing Jeddah 2026', 'Renovation contractor Jeddah',
    'Home renovation prices', 'Rest house renovation Jeddah', 'External painting Jeddah',
    'Annex renovation', 'Building maintenance Jeddah', 'Villa finishing Jeddah',
    'Plumbing and electrical', 'Facade renovation', 'Tiles and ceramics Jeddah',
    'Finishing contractor', 'Finishing price per meter', 'Complete renovation',
  ];
  const keywords = isArabic ? keywordsAr : keywordsEn;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 border border-gray-100">

          {/* 1. العنوان الرئيسي */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Hammer className="w-5 h-5" />
              {isArabic ? 'المرجع الشامل للترميم والتشطيبات في جدة 2026' : 'The Complete Renovation & Finishing Reference in Jeddah 2026'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {isArabic
                ? 'كيف تُجدّد منزلك بأقل تكلفة وأعلى جودة في جدة 2026؟'
                : 'How to Renovate Your Home at Lowest Cost & Highest Quality in Jeddah 2026?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic
                ? 'دليل احترافي يكشف أسعار الترميم الحقيقية، أساليب اختيار المقاول الصحيح، ومراحل التنفيذ التي يجب أن تعرفها قبل إنفاق أي ريال.'
                : 'A professional guide revealing real renovation prices, how to choose the right contractor, and execution phases you must know before spending a single riyal.'}
            </p>
          </div>

          {/* 2. ما الذي يشمله الترميم */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-14 border-r-4 border-blue-600">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Home className="w-7 h-7 text-blue-600" />
              {isArabic ? '1. ما الذي يشمله الترميم والتشطيب الشامل؟' : '1. What Does Complete Renovation & Finishing Include?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <p className="mb-4 font-semibold text-blue-900">
                  {isArabic ? 'أعمال الترميم الخارجية:' : 'External Renovation Works:'}
                </p>
                <ul className="space-y-2">
                  {(isArabic ? [
                    'دهانات الواجهات الخارجية بالبوية المائية أو الجبس المزخرف',
                    'إصلاح وصيانة الأسطح والعوازل',
                    'ترميم الكسوات والطلاءات الخارجية',
                    'تجديد الأبواب والنوافذ والمداخل',
                    'ترميم الجدران والمداميك الخارجية',
                  ] : [
                    'Exterior facade painting with water paint or decorative plaster',
                    'Roof repair and maintenance of insulation',
                    'Restoration of external cladding and coatings',
                    'Renewal of doors, windows, and entrances',
                    'Restoration of external walls and masonry',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 font-semibold text-blue-900">
                  {isArabic ? 'أعمال التشطيب الداخلية:' : 'Internal Finishing Works:'}
                </p>
                <ul className="space-y-2">
                  {(isArabic ? [
                    'دهانات داخلية (جبس، بويات، ديكور)',
                    'تركيب بلاط وسيراميك وباركيه',
                    'أعمال سباكة (تمديدات، صرف، كباين)',
                    'أعمال كهرباء (توصيلات، إضاءة، إنذار)',
                    'أسقف جبسية وديكورات',
                    'أعمال نجارة وأبواب وخزائن',
                  ] : [
                    'Interior painting (plaster, paints, decorations)',
                    'Tile, ceramic, and parquet installation',
                    'Plumbing works (extensions, drainage, cabins)',
                    'Electrical works (connections, lighting, alarms)',
                    'Gypsum ceilings and decorations',
                    'Carpentry, doors, and wardrobes',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. أسعار 2026 */}
          <div className="mb-14">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Target className="w-7 h-7 text-emerald-600" />
              {isArabic ? '2. أسعار الترميم والتشطيب في جدة 2026 (الأسعار الحقيقية)' : '2. Renovation & Finishing Prices in Jeddah 2026 (Real Prices)'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(isArabic ? [
                {
                  title: 'دهانات خارجية (بويا خارجية)',
                  items: ['طلاء بويا عادي: 18–25 ريال/م²', 'طلاء بويا فاخرة (Jotun/Dulux): 30–45 ريال/م²', 'جبس ديكوري خارجي: 55–80 ريال/م²'],
                  color: 'bg-orange-50 border-orange-200',
                },
                {
                  title: 'دهانات داخلية',
                  items: ['طلاء داخلي عادي (طبقتان): 12–18 ريال/م²', 'طلاء بويا فاخرة (مغسولة): 22–35 ريال/م²', 'جبس لياسة (طلاء الجدار قبل الدهان): 25–40 ريال/م²'],
                  color: 'bg-blue-50 border-blue-200',
                },
                {
                  title: 'بلاط وسيراميك',
                  items: ['تركيب سيراميك أرضي: 40–65 ريال/م²', 'تركيب بلاط جداري: 45–70 ريال/م²', 'باركيه هندسي: 80–150 ريال/م²'],
                  color: 'bg-purple-50 border-purple-200',
                },
                {
                  title: 'أسقف جبسية',
                  items: ['سقف جبسي بورد ساده: 80–120 ريال/م²', 'سقف مع إضاءة وديكور: 130–200 ريال/م²', 'جدران جبسية حواجز: 90–150 ريال/م²'],
                  color: 'bg-green-50 border-green-200',
                },
                {
                  title: 'أعمال سباكة (تمديد جديد)',
                  items: ['تمديد أنابيب PVC داخلي: 3,500–7,000 ريال/شقة', 'تغيير تمديد قديم: 5,000–12,000 ريال/فيلا', 'صيانة وإصلاح تسريب: 500–2,000 ريال'],
                  color: 'bg-cyan-50 border-cyan-200',
                },
                {
                  title: 'أعمال كهرباء',
                  items: ['تمديد كهرباء شقة جديدة: 4,000–8,000 ريال', 'استبدال لوحة كهربائية: 2,500–6,000 ريال', 'تركيب إضاءة وإنذار: 1,500–5,000 ريال'],
                  color: 'bg-yellow-50 border-yellow-200',
                },
              ] : [
                {
                  title: 'External Painting',
                  items: ['Regular exterior paint: 18–25 SAR/m²', 'Premium exterior paint (Jotun/Dulux): 30–45 SAR/m²', 'Exterior decorative plaster: 55–80 SAR/m²'],
                  color: 'bg-orange-50 border-orange-200',
                },
                {
                  title: 'Interior Painting',
                  items: ['Regular interior paint (2 coats): 12–18 SAR/m²', 'Premium washable paint: 22–35 SAR/m²', 'Gypsum plaster (before painting): 25–40 SAR/m²'],
                  color: 'bg-blue-50 border-blue-200',
                },
                {
                  title: 'Tiles & Ceramics',
                  items: ['Floor ceramic installation: 40–65 SAR/m²', 'Wall tile installation: 45–70 SAR/m²', 'Engineered parquet: 80–150 SAR/m²'],
                  color: 'bg-purple-50 border-purple-200',
                },
                {
                  title: 'Gypsum Ceilings',
                  items: ['Plain plasterboard ceiling: 80–120 SAR/m²', 'Ceiling with lighting & decor: 130–200 SAR/m²', 'Gypsum partition walls: 90–150 SAR/m²'],
                  color: 'bg-green-50 border-green-200',
                },
                {
                  title: 'Plumbing (New Extensions)',
                  items: ['Internal PVC pipe extension: 3,500–7,000 SAR/apt', 'Replace old extension: 5,000–12,000 SAR/villa', 'Maintenance & leak repair: 500–2,000 SAR'],
                  color: 'bg-cyan-50 border-cyan-200',
                },
                {
                  title: 'Electrical Works',
                  items: ['New apartment wiring: 4,000–8,000 SAR', 'Replace electrical panel: 2,500–6,000 SAR', 'Install lighting & alarms: 1,500–5,000 SAR'],
                  color: 'bg-yellow-50 border-yellow-200',
                },
              ]).map((section, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${section.color}`}>
                  <h4 className="font-black text-gray-900 mb-4 text-base">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3. نصائح ذهبية */}
          <div className="mb-14 bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-emerald-600" />
              {isArabic ? '3. نصائح ذهبية لضمان جودة التشطيب والترميم' : '3. Golden Tips to Ensure Quality Renovation & Finishing'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(isArabic ? [
                {
                  title: 'التأكد من جودة الدهانات',
                  desc: 'تأكد من تطبيق طبقتين من الدهان لتحقيق التغطية الكاملة وحماية الجدران لفترة أطول. يُنصح بمراجعة العقد للتأكد من ذكر عدد الطبقات صراحةً.',
                },
                {
                  title: 'فحص المواد المستخدمة',
                  desc: 'اطلب دائماً الاطلاع على عبوات المواد الأصلية (كالدهانات والمعجون) وتأكد من استخدامها وفقاً لتوصيات الشركة المصنعة دون تخفيف زائد.',
                },
                {
                  title: 'حساب المساحات بدقة',
                  desc: 'تأكد من استبعاد مساحات الأبواب والنوافذ من إجمالي مساحة الدهانات أو البلاط لضمان دفع التكلفة الحقيقية للمواد والعمل.',
                },
                {
                  title: 'الالتزام بجدول زمني مكتوب',
                  desc: 'لضمان سير العمل بانتظام، اطلب إدراج جدول زمني مفصل ومُلزم في العقد المبرم لضمان تسليم المشروع في وقته المحدد.',
                },
              ] : [
                {
                  title: 'Verify Paint Quality',
                  desc: 'Ensure two coats of paint are applied for full coverage and longer protection. It is advised to clearly state the number of coats in the contract.',
                },
                {
                  title: 'Inspect Materials Used',
                  desc: 'Always request to see the original material containers (like paint and filler) and ensure they are used according to manufacturer recommendations.',
                },
                {
                  title: 'Accurate Area Calculation',
                  desc: 'Ensure that doors and windows are excluded from the total painting or tiling area to guarantee paying the exact cost of work.',
                },
                {
                  title: 'Commit to a Written Timeline',
                  desc: 'To ensure steady progress, request a detailed and binding timeline in the contract to ensure the project is delivered on time.',
                },
              ]).map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-emerald-100">
                  <h4 className="font-black text-emerald-700 mb-2">💡 {item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. لماذا ديار جدة */}
          <div className="mb-14">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-yellow-600" />
              {isArabic ? '4. لماذا ديار جدة العالمية للترميم والتشطيبات؟' : '4. Why Deyar Jeddah for Renovation & Finishing?'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isArabic ? [
                { title: 'فريق متكامل', desc: 'نوفر جميع تخصصات الترميم في فريق واحد: دهانات، سباكة، كهرباء، أسقف، بلاط - بلا تنسيق مرهق منك.' },
                { title: 'مواد أصلية مضمونة', desc: 'نستخدم حصرياً مواد من ماركات معتمدة (Jotun, Dulux, Saudi ceramics) مع الفاتورة والضمان.' },
                { title: 'ضمان العمل 3 سنوات', desc: 'أي عيب في التنفيذ نُصلحه مجاناً خلال 3 سنوات من تاريخ التسليم بموجب عقد مكتوب.' },
                { title: 'مشرف في الموقع', desc: 'مشرف هندسي يتابع كل مرحلة ويضمن الجودة. لا تعتمد على عمالة بلا إشراف.' },
                { title: 'أسعار شفافة', desc: 'عرض سعر تفصيلي لكل بند على حدة. لا مفاجآت ولا زيادات غير متوقعة بعد البدء.' },
                { title: 'معاينة مجانية', desc: 'فريقنا يزور موقعك، يُقيّم الوضع الحالي، ويقدم توصيات احترافية مجانية.' },
              ] : [
                { title: 'Integrated Team', desc: 'We provide all renovation specialties in one team: painting, plumbing, electrical, ceilings, tiles - no exhausting coordination from you.' },
                { title: 'Guaranteed Original Materials', desc: 'We exclusively use materials from certified brands (Jotun, Dulux, Saudi ceramics) with invoice and warranty.' },
                { title: '3-Year Work Warranty', desc: 'Any execution defect is fixed free within 3 years from delivery date per written contract.' },
                { title: 'On-Site Supervisor', desc: 'Engineering supervisor follows each phase and ensures quality. No unsupervised labor.' },
                { title: 'Transparent Pricing', desc: 'Detailed quote for each item separately. No surprises or unexpected additions after starting.' },
                { title: 'Free Inspection', desc: 'Our team visits your site, evaluates the current condition, and provides free professional recommendations.' },
              ]).map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-indigo-100">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mb-14 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 text-white text-center">
            <Paintbrush className="w-14 h-14 mx-auto mb-4 text-yellow-300" />
            <h4 className="text-2xl font-black mb-3">
              {isArabic ? 'جدّد منزلك اليوم — نزورك مجاناً!' : 'Renovate Your Home Today — We Visit You for Free!'}
            </h4>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              {isArabic
                ? 'تواصل معنا الآن واحصل على معاينة مجانية وعرض سعر تفصيلي لمشروع الترميم أو التشطيب خلال 24 ساعة.'
                : 'Contact us now and get a free inspection and detailed quote for your renovation or finishing project within 24 hours.'}
            </p>
          </div>

          {/* Keywords */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              {isArabic ? 'دليل الكلمات المفتاحية لمشاريعنا (SEO Core Tags):' : 'Keyword Guide for Our Projects (SEO Core Tags):'}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Smart Backlinks */}
          <SmartBacklinks currentPath="/services/renovation" categoryName="renovation" />

        </div>
      </div>
    </section>
  );
}
