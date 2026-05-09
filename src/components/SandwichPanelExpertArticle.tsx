import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, ShieldAlert, Award, CheckCircle, HardHat, Layers, Thermometer, Zap } from 'lucide-react';

export default function SandwichPanelExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    'ساندوتش بانل جدة', 'أسعار ساندوتش بانل 2026', 'ساندوتش بانل حراري', 'غرف جاهزة جدة',
    'ساندوتش بانل للأسقف', 'ساندوتش بانل للجدران', 'مستودعات بانل', 'عزل حراري جدة',
    'ساندوتش بانل بولي يوريثان', 'ساندوتش بانل EPS', 'تركيب ساندوتش بانل', 'مقاول ساندوتش بانل',
    'غرف تبريد جدة', 'ملاحق ساندوتش بانل', 'أسعار متر ساندوتش بانل',
  ];
  const keywordsEn = [
    'Sandwich Panel Jeddah', 'Sandwich Panel prices 2026', 'Thermal Sandwich Panel', 'Ready Rooms Jeddah',
    'Roof Sandwich Panel', 'Wall Sandwich Panel', 'Panel Warehouses', 'Thermal insulation Jeddah',
    'PU Sandwich Panel', 'EPS Sandwich Panel', 'Sandwich Panel installation', 'Sandwich Panel contractor',
    'Cold rooms Jeddah', 'Panel annexes', 'Sandwich Panel price per meter',
  ];
  const keywords = isArabic ? keywordsAr : keywordsEn;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 border border-gray-100">

          {/* 1. عنوان رئيسي */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <Layers className="w-5 h-5" />
              {isArabic ? 'المرجع الشامل للساندوتش بانل في جدة 2026' : 'The Complete Sandwich Panel Reference in Jeddah 2026'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {isArabic
                ? 'كل ما تحتاج معرفته عن الساندوتش بانل قبل الشراء!'
                : 'Everything You Need to Know About Sandwich Panels Before Buying!'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic
                ? 'دليل هندسي احترافي يكشف أسعار السوق الحقيقية، أنواع الألواح، ومواصفات الجودة التي يجب أن تطلبها من أي مقاول قبل توقيع العقد.'
                : 'A professional engineering guide revealing real market prices, panel types, and quality specifications you must demand from any contractor before signing a contract.'}
            </p>
          </div>

          {/* 2. مقدمة احترافية */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-14 border-r-4 border-slate-600">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <HardHat className="w-7 h-7 text-slate-600" />
              {isArabic ? '1. ما هو الساندوتش بانل ولماذا هو الخيار الأمثل؟' : '1. What is Sandwich Panel and Why is it the Optimal Choice?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  {isArabic
                    ? 'الساندوتش بانل هو لوح مركب يتكون من طبقتَين خارجيتَين من الصلب أو الألومنيوم وحشوة عازلة في الوسط (بولي يوريثان PU أو البوليسترين EPS). هذا التركيب يمنحه خصائص استثنائية في العزل الحراري والصوتي مقارنةً بالبناء التقليدي.'
                    : 'Sandwich panel is a composite board consisting of two outer layers of steel or aluminum with an insulating core (Polyurethane PU or EPS). This composition gives it exceptional thermal and acoustic insulation properties compared to traditional construction.'}
                </p>
                <p>
                  {isArabic
                    ? 'في مناخ جدة الحار، يُعدّ الساندوتش بانل الحل الأذكى لبناء الغرف الجاهزة، المستودعات، الهناجر، الأسقف، وحتى الجدران الخارجية بتكلفة أقل بنسبة 40-60% من البناء التقليدي.'
                    : "In Jeddah's hot climate, sandwich panel is the smartest solution for building ready rooms, warehouses, hangars, roofs, and even exterior walls at 40-60% less cost than traditional construction."}
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {(isArabic ? [
                    'عزل حراري يقلل استهلاك التكييف بنسبة 50%',
                    'وزن خفيف يسهّل التركيب السريع',
                    'مقاومة للرطوبة والحشرات والنار',
                    'تركيب بدون عمالة بناء متخصصة',
                    'قابلية التفكيك وإعادة التركيب',
                    'ضمان من 10 إلى 20 سنة',
                  ] : [
                    'Thermal insulation reduces AC consumption by 50%',
                    'Lightweight for quick installation',
                    'Resistant to moisture, insects, and fire',
                    'Installation without specialized construction labor',
                    'Can be dismantled and reinstalled',
                    'Warranty from 10 to 20 years',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. أنواع الساندوتش بانل */}
          <div className="mb-14">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Layers className="w-7 h-7 text-blue-600" />
              {isArabic ? '2. أنواع الساندوتش بانل وتطبيقاتها' : '2. Types of Sandwich Panels and Their Applications'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isArabic ? [
                {
                  type: 'بولي يوريثان (PU) — للتبريد والعزل الفائق',
                  desc: 'الأعلى جودة في العزل الحراري. مناسب لغرف التبريد، المستودعات الغذائية، والمنشآت الصناعية الحساسة للحرارة.',
                  price: 'يبدأ من 120 ريال/م²',
                  color: 'bg-blue-50 border-blue-200 text-blue-800',
                },
                {
                  type: 'بوليسترين (EPS) — للمباني والملاحق',
                  desc: 'الأوفر سعراً والأكثر انتشاراً. مناسب للغرف الجاهزة، الملاحق السكنية، مستودعات التخزين العادية.',
                  price: 'يبدأ من 75 ريال/م²',
                  color: 'bg-green-50 border-green-200 text-green-800',
                },
                {
                  type: 'الصوف الصخري (Rockwool) — مقاوم للحريق',
                  desc: 'للمنشآت التي تشترط مقاومة الحريق. مناسب للمصانع، المستشفيات، المدارس، والمباني الحكومية.',
                  price: 'يبدأ من 150 ريال/م²',
                  color: 'bg-orange-50 border-orange-200 text-orange-800',
                },
                {
                  type: 'بانل الأسقف (Roof Panel)',
                  desc: 'مقوّس أو مسطح، مصمم لتحمّل الأحمال العلوية. يستخدم في أسقف المستودعات والهناجر.',
                  price: 'يبدأ من 90 ريال/م²',
                  color: 'bg-purple-50 border-purple-200 text-purple-800',
                },
                {
                  type: 'بانل الجدران (Wall Panel)',
                  desc: 'للجدران الخارجية والداخلية. يوفر عزلاً حرارياً وصوتياً ممتازاً مع إمكانية الطلاء.',
                  price: 'يبدأ من 80 ريال/م²',
                  color: 'bg-cyan-50 border-cyan-200 text-cyan-800',
                },
                {
                  type: 'غرف التحكم والكابينات',
                  desc: 'وحدات متكاملة جاهزة للتركيب. تشمل الأبواب والنوافذ والأسلاك الكهربائية.',
                  price: 'يبدأ من 8,000 ريال/وحدة',
                  color: 'bg-pink-50 border-pink-200 text-pink-800',
                },
              ] : [
                {
                  type: 'Polyurethane (PU) — For Cold Storage & Super Insulation',
                  desc: 'Highest quality thermal insulation. Suitable for cold rooms, food warehouses, and heat-sensitive industrial facilities.',
                  price: 'Starting from 120 SAR/m²',
                  color: 'bg-blue-50 border-blue-200 text-blue-800',
                },
                {
                  type: 'Polystyrene (EPS) — For Buildings & Annexes',
                  desc: 'Most affordable and widely used. Suitable for ready rooms, residential annexes, and general storage warehouses.',
                  price: 'Starting from 75 SAR/m²',
                  color: 'bg-green-50 border-green-200 text-green-800',
                },
                {
                  type: 'Rockwool — Fire Resistant',
                  desc: 'For facilities requiring fire resistance. Suitable for factories, hospitals, schools, and government buildings.',
                  price: 'Starting from 150 SAR/m²',
                  color: 'bg-orange-50 border-orange-200 text-orange-800',
                },
                {
                  type: 'Roof Panel',
                  desc: 'Curved or flat, designed to bear upper loads. Used in warehouse and hangar roofs.',
                  price: 'Starting from 90 SAR/m²',
                  color: 'bg-purple-50 border-purple-200 text-purple-800',
                },
                {
                  type: 'Wall Panel',
                  desc: 'For exterior and interior walls. Provides excellent thermal and acoustic insulation with painting capability.',
                  price: 'Starting from 80 SAR/m²',
                  color: 'bg-cyan-50 border-cyan-200 text-cyan-800',
                },
                {
                  type: 'Control Rooms & Cabins',
                  desc: 'Integrated ready-to-install units. Includes doors, windows, and electrical wiring.',
                  price: 'Starting from 8,000 SAR/unit',
                  color: 'bg-pink-50 border-pink-200 text-pink-800',
                },
              ]).map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${item.color}`}>
                  <h4 className="font-black text-base mb-3">{item.type}</h4>
                  <p className="text-sm leading-relaxed mb-4 opacity-80">{item.desc}</p>
                  <div className="font-black text-lg">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. أسعار 2026 */}
          <div className="mb-14">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Target className="w-7 h-7 text-emerald-600" />
              {isArabic ? '3. أسعار الساندوتش بانل في جدة 2026 (أسعار المتر الفعلية)' : '3. Sandwich Panel Prices in Jeddah 2026 (Actual Per-Meter Prices)'}
            </h3>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {(isArabic ? [
                  { label: 'EPS 50 مم (الأساسي)', price: '75–95 ريال/م²' },
                  { label: 'EPS 100 مم (الأكثر طلباً)', price: '95–120 ريال/م²' },
                  { label: 'PU 50 مم (للتبريد)', price: '120–160 ريال/م²' },
                  { label: 'PU 100 مم (للتبريد العالي)', price: '180–230 ريال/م²' },
                  { label: 'Rockwool 50 مم (مقاوم للحريق)', price: '150–200 ريال/م²' },
                  { label: 'Rockwool 100 مم (للمصانع)', price: '200–280 ريال/م²' },
                  { label: 'غرفة جاهزة 3×4 متر (شاملة)', price: 'تبدأ من 12,000 ريال' },
                  { label: 'مستودع 100 م² (هيكل + بانل)', price: 'تبدأ من 55,000 ريال' },
                ] : [
                  { label: 'EPS 50mm (Basic)', price: '75–95 SAR/m²' },
                  { label: 'EPS 100mm (Most Popular)', price: '95–120 SAR/m²' },
                  { label: 'PU 50mm (Cold Storage)', price: '120–160 SAR/m²' },
                  { label: 'PU 100mm (High Cold Storage)', price: '180–230 SAR/m²' },
                  { label: 'Rockwool 50mm (Fire Resistant)', price: '150–200 SAR/m²' },
                  { label: 'Rockwool 100mm (Industrial)', price: '200–280 SAR/m²' },
                  { label: 'Ready Room 3×4m (All Inclusive)', price: 'Starting from 12,000 SAR' },
                  { label: '100m² Warehouse (Structure + Panel)', price: 'Starting from 55,000 SAR' },
                ]).map((row, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/10 rounded-xl px-5 py-3">
                    <span className="text-gray-300 text-sm">{row.label}</span>
                    <span className="text-emerald-400 font-black">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                {isArabic
                  ? '* الأسعار المذكورة تشمل التوريد والتركيب داخل جدة. السعر النهائي يعتمد على السماكة، الكمية، وتفاصيل المشروع.'
                  : '* Prices include supply and installation within Jeddah. Final price depends on thickness, quantity, and project details.'}
              </p>
            </div>
          </div>

          {/* 5. أسئلة الغش التجاري */}
          <div className="mb-14 bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <ShieldAlert className="w-7 h-7 text-red-600" />
              {isArabic ? '4. معايير الجودة: ممارسات يجب الانتباه لها قبل التعاقد' : '4. Quality Standards: Practices to Watch Out For Before Contracting'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(isArabic ? [
                {
                  trick: 'التباين في السماكة الفعلية للألواح',
                  warn: 'قد تختلف سماكة الألواح الموردة للموقع عن المواصفات المتفق عليها. لضمان جودة العزل، احرص على مراجعة شهادة المصنع وقياس سُمك اللوح قبل البدء بالتركيب.',
                },
                {
                  trick: 'اختلاف مادة العزل (الحشوة)',
                  warn: 'يوجد تفاوت كبير في الأداء والسعر بين حشوة البولي يوريثان (PU) والبوليسترين (EPS). تأكد دائماً من مطابقة المادة الموردة للبنود المذكورة صراحةً في العقد وفاتورة الشراء.',
                },
                {
                  trick: 'استخدام قطاعات حديد غير مطابقة',
                  warn: 'لضمان السلامة الهيكلية ومقاومة الرياح، يجب الالتزام بسماكات وأوزان الحديد المحددة. اطلب الاطلاع على المخططات الإنشائية وتأكد من مطابقة المواد لها.',
                },
                {
                  trick: 'الاعتماد على الضمانات الشفهية',
                  warn: 'الضمانات الشفهية لا تكفي لحفظ حقوقك على المدى الطويل. اشترط دائماً الحصول على ضمان خطي وموثق يغطي الهيكل والعزل ضد التسريبات لمدة لا تقل عن 5 إلى 10 سنوات.',
                },
              ] : [
                {
                  trick: 'Discrepancy in Actual Panel Thickness',
                  warn: 'The thickness of the supplied panels may differ from the agreed specifications. To ensure insulation quality, review the factory certificate and measure the thickness before installation.',
                },
                {
                  trick: 'Difference in Insulation Material (Core)',
                  warn: 'There is a significant performance and price gap between PU and EPS cores. Always ensure the supplied material matches the terms explicitly stated in the contract.',
                },
                {
                  trick: 'Using Non-Compliant Steel Sections',
                  warn: 'To ensure structural integrity, the specified steel thicknesses and weights must be used. Request to see the structural drawings and verify material compliance.',
                },
                {
                  trick: 'Relying on Verbal Warranties',
                  warn: 'Verbal warranties are not enough to protect your long-term rights. Always insist on a documented, written warranty covering the structure and insulation for at least 5 to 10 years.',
                },
              ]).map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-red-100">
                  <h4 className="font-black text-red-700 mb-2">⚠️ {item.trick}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.warn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. لماذا ديار جدة */}
          <div className="mb-14">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-yellow-600" />
              {isArabic ? '5. لماذا ديار جدة العالمية هي خيارك الأول؟' : '5. Why is Deyar Jeddah Your First Choice?'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isArabic ? [
                { title: 'خبرة 15+ سنة', desc: 'في مجال الساندوتش بانل وتنفيذ المستودعات والغرف الجاهزة في جدة ومنطقة مكة.' },
                { title: 'ألواح معتمدة', desc: 'نستورد مباشرة من مصانع حاصلة على شهادات ISO 9001 وتلبي معايير كود البناء السعودي.' },
                { title: 'ضمان مكتوب 10 سنوات', desc: 'على الهيكل الإنشائي والألواح ضد التشوه والصدأ والتسريب.' },
                { title: 'تنفيذ سريع', desc: 'مستودع 200 م² ينجز في 7-10 أيام. غرفة جاهزة في يوم واحد.' },
                { title: 'أسعار تنافسية', desc: 'بدون وسطاء. نتعامل مع المصانع مباشرة ونوفّر عليك 20-30%.' },
                { title: 'دراسة مجانية', desc: 'نزور موقعك ونقدم لك مخطط وعرض سعر مجاني بدون التزام.' },
              ] : [
                { title: '15+ Years Experience', desc: 'In sandwich panel, warehouses, and ready rooms in Jeddah and Makkah region.' },
                { title: 'Certified Panels', desc: 'We import directly from ISO 9001 certified factories meeting Saudi Building Code standards.' },
                { title: '10-Year Written Warranty', desc: 'On structural framework and panels against deformation, rust, and leakage.' },
                { title: 'Fast Execution', desc: '200m² warehouse completed in 7-10 days. Ready room in one day.' },
                { title: 'Competitive Prices', desc: 'No middlemen. We deal directly with factories, saving you 20-30%.' },
                { title: 'Free Site Study', desc: 'We visit your site and provide a free plan and quote with no obligation.' },
              ]).map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Thermal Icon Section */}
          <div className="mb-14 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4 flex-shrink-0">
                <Thermometer className="w-16 h-16 text-red-300" />
                <Zap className="w-12 h-12 text-yellow-300" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-3">
                  {isArabic ? 'الساندوتش بانل يوفّر لك 50% من فاتورة الكهرباء!' : 'Sandwich Panel Saves You 50% on Electricity Bills!'}
                </h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {isArabic
                    ? 'بفضل معامل العزل الحراري العالي (U-Value منخفض)، يحافظ الساندوتش بانل على درجة الحرارة الداخلية ثابتة في مناخ جدة الحار، مما يقلل الحمل على أجهزة التكييف بشكل ملحوظ ويوفر آلاف الريالات سنوياً.'
                    : "Thanks to its high thermal insulation coefficient (low U-Value), sandwich panel maintains stable indoor temperature in Jeddah's hot climate, significantly reducing AC load and saving thousands of riyals annually."}
                </p>
              </div>
            </div>
          </div>

          {/* SEO Keywords Cloud */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-slate-600" />
              {isArabic ? 'دليل الكلمات المفتاحية لمشاريعنا (SEO Core Tags):' : 'Keyword Guide for Our Projects (SEO Core Tags):'}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Smart Backlinks */}
          <SmartBacklinks currentPath="/services/sandwich-panel" categoryName="sandwich-panel" />

        </div>
      </div>
    </section>
  );
}
