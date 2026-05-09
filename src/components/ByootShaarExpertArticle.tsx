import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, ShieldAlert, Award, MapPin, Construction, Shield, Tent, Zap, Flame } from 'lucide-react';

export default function ByootShaarExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    "بيوت شعر بجدة", "تفصيل خيام ملكية", "بيوت شعر جاهزة", "مقاول بيوت شعر", 
    "مجالس عربية خارجية", "خيام قماش ألماني", "بيوت شعر مبطنة", "أسعار بيوت الشعر بجدة", 
    "خيام ملكية مع مشب", "تصميم خيام خارجية", "بيوت شعر تراثية", "تركيب بيوت شعر",
    "خيام شفافة", "ديكورات بيوت شعر", "تفصيل خيمة حوش", "خيام PVC كوري",
    "مجالس تراثية بجدة", "خيام شتوية", "بيوت شعر عصرية"
  ];

  const keywordsEn = [
    "Byoot Shaar Jeddah", "Royal Tents Installation", "Ready Arabic Tents", "Tents Contractor Jeddah",
    "Outdoor Arabic Majlis", "German Fabric Tents", "Lined Byoot Shaar", "Byoot Shaar Prices Jeddah",
    "Royal Tents with Fireplace", "Outdoor Tent Design", "Traditional Byoot Shaar", "Tent Installation",
    "Transparent Tents", "Tent Decorations", "Courtyard Tent Customization", "Korean PVC Tents",
    "Traditional Majlis Jeddah", "Winter Tents", "Modern Arabic Tents"
  ];

  const keywords = isArabic ? keywordsAr : keywordsEn;
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <section className="py-24 bg-white border-y border-gray-100" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-base font-bold uppercase tracking-wider">
              {isArabic ? "الدليل المرجعي الأقوى لتصميم بيوت الشعر والخيام الملكية 2026" : "The Ultimate Reference Guide for Byoot Shaar & Royal Tents 2026"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
            {isArabic ? (
              <>المرجع الهندسي والتراثي: كل ما يخص <span className="text-amber-600">بيوت الشعر في جدة</span></>
            ) : (
              <>The Engineering & Heritage Reference: Everything About <span className="text-amber-600">Byoot Shaar in Jeddah</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "بيت الشعر أو (الخيمة الملكية) ليس مجرد مكان للجلوس، بل هو امتداد لأصالة الضيافة السعودية ومجلس لاستقبال كبار الضيوف. في ديار جدة، ندمج بين عراقة الماضي بتفاصيل التراث (السدو والخيام)، وتكنولوجيا المستقبل من عزل حراري ومقاومة للحرائق. هذا الدليل يكشف لك تفاصيل العزل المائي، قوة الهياكل الحديدية، وكيف تبني مجلساً ملكياً يدوم لعقود دون التأثر بالرطوبة."
              : "Byoot Shaar (Royal Tents) are not just seating areas; they are an extension of authentic Saudi hospitality and a grand majlis for guests. At Deyar Jeddah, we blend the rich heritage of the past (Sadu and tents) with future technology like thermal insulation and fire resistance. This guide reveals waterproofing details, iron frame strength, and how to build a royal majlis that lasts decades without humidity damage."}
          </p>
        </div>

        <div className={`prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed max-w-none ${isArabic ? 'text-justify' : 'text-left'}`}>
          
          {/* Section 1: Deep Climate & Aesthetic Analysis */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-amber-500 mb-8 bg-gray-50 py-4`}>
            {isArabic ? "1. التحدي الهندسي لبيوت الشعر في جدة: كيف نمنع تسرب مياه الأمطار؟" : "1. The Engineering Challenge of Byoot Shaar in Jeddah: How to Prevent Rain Leaks?"}
          </h3>
          <p className="text-xl">
            {isArabic 
              ? "تصميم خيمة في بيئة ساحلية مثل جدة يتطلب هندسة دقيقة. بيوت الشعر التقليدية القديمة كانت تعاني من مشكلتين رئيسيتين: تسرب مياه الأمطار الغزيرة المفاجئة من الأسقف، وتراكم الحرارة الخانقة في الصيف. بدون طبقات عزل حقيقية، يتحول بيت الشعر إلى فرن حراري نهاراً وبركة مياه شتاءً."
              : "Designing a tent in a coastal environment like Jeddah requires precise engineering. Old traditional Byoot Shaar suffered from two main issues: heavy sudden rainwater leaking from the roofs, and suffocating heat accumulation in the summer. Without genuine insulation layers, the tent becomes an oven by day and a water pool in winter."}
          </p>
          <p className="text-xl mt-4">
            {isArabic
              ? "نحن نعتمد نظام (الطبقات المتعددة): الهيكل الخارجي يُصنع من تيوبات حديدية صلبة، ثم يُغطى بقماش PVC ألماني أو كوري عالي السماكة (مانع 100% لتسرب المياه). أسفله نضع طبقات عزل حراري (صوف صخري أو فوم) لعزل الحرارة، ثم طبقة خشبية لتقوية السقف، وأخيراً البطانة الداخلية من قماش السدو أو المخمل الفاخر. هذا التصميم يضمن لك تكييفاً ممتازاً وأماناً تاماً."
              : "We rely on the (Multi-Layer) system: The outer frame is made of solid steel tubes, covered with high-thickness German or Korean PVC (100% waterproof). Beneath that, we place thermal insulation layers (Rockwool or Foam), then a wooden layer to strengthen the roof, and finally the inner lining of luxurious Sadu or velvet fabric. This design guarantees excellent AC cooling and total safety."}
          </p>

          {/* Section 2: Massive Material Table */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-amber-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "2. معجم خامات بيوت الشعر والخيام: الهندسة والفخامة" : "2. Byoot Shaar Materials Glossary: Engineering & Luxury"}
          </h3>
          <p className="text-xl mb-6">
            {isArabic 
              ? "الخامات التي نستخدمها في التفصيل تحدد عمر بيت الشعر ومستوى فخامته. إليك المواصفات القياسية لأفخم الخيام الملكية:"
              : "The materials we use determine the tent's lifespan and luxury level. Here are the standard specifications for the most luxurious royal tents:"}
          </p>
          
          <div className="overflow-x-auto my-10 shadow-2xl rounded-3xl border-4 border-gray-100">
            <table className={`min-w-full bg-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <thead className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <tr>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "العنصر الهندسي" : "Engineering Element"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "المواصفات الفنية والخامات" : "Technical Specs & Materials"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "الغرض والفائدة" : "Purpose & Benefit"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Construction className="w-5 h-5 text-amber-600"/> {isArabic ? "الهيكل الحديدي (Frame)" : "Iron Frame"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "تيوبات حديد وطنية مجلفنة بسماكة لا تقل عن 1.5 إلى 2 ملم، يتم دهانها بأساس إيبوكسي." : "Galvanized national iron tubes (1.5-2mm thick), painted with epoxy primer."}</td>
                  <td className="py-6 px-6 text-amber-800 font-bold">{isArabic ? "يتحمل أوزان الطبقات العازلة والرياح القوية دون أي اهتزاز أو تقوس." : "Bears the weight of insulation layers and strong winds without swaying or bending."}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-slate-600"/> {isArabic ? "التغطية الخارجية (PVC)" : "Outer Cover (PVC)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "قماش بي في سي (ألماني 1050 جرام أو كوري 1100 جرام) بخطوط بارزة تشبه بيت الشعر الأصلي." : "PVC fabric (German 1050g or Korean 1100g) with prominent lines resembling authentic hair tents."}</td>
                  <td className="py-6 px-6 text-slate-800 font-bold">{isArabic ? "مقاوم للحريق، يمنع تسرب مياه الأمطار 100%، ولا يتغير لونه مع الشمس." : "Fire-resistant, 100% waterproof, and UV-resistant (color doesn't fade)."}</td>
                </tr>
                <tr className="hover:bg-sky-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Flame className="w-5 h-5 text-red-500"/> {isArabic ? "العزل الحراري والمائي" : "Thermal & Water Insulation"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "صوف صخري (Rockwool) أو عزل فوم كويتي سماكة 4 سم، مع ألواح خشب بلاي وود 9 ملم." : "Rockwool or 4cm Kuwaiti foam insulation, with 9mm plywood boards."}</td>
                  <td className="py-6 px-6 text-sky-800 font-bold">{isArabic ? "يحفظ البرودة داخل الخيمة ويقلل استهلاك المكيفات، ويعزل الصوت." : "Preserves AC cooling inside the tent, reduces electricity usage, and soundproofs."}</td>
                </tr>
                <tr className="hover:bg-rose-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Tent className="w-5 h-5 text-rose-600"/> {isArabic ? "البطانة الداخلية والديكور" : "Inner Lining & Decor"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "أقمشة سدو سوري تراثية، أو مخمل فاخر، مع إضاءة مخفية (سبوت لايت) وتمديدات كهربائية." : "Traditional Syrian Sadu fabrics or luxury velvet, with hidden spotlights and wiring."}</td>
                  <td className="py-6 px-6 text-rose-800 font-bold">{isArabic ? "يعطي الفخامة الملكية من الداخل ويخفي جميع الهياكل الحديدية." : "Provides royal luxury from the inside and conceals all iron structures."}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: Massive Advice Section (Trust Building) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-14 rounded-[3rem] border-4 border-blue-200 my-20 relative overflow-hidden shadow-2xl">
            <ShieldAlert className={`absolute top-1/2 ${isArabic ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} w-96 h-96 text-blue-500/5 -translate-y-1/2 pointer-events-none`} />
            <h4 className="text-3xl md:text-4xl font-black text-blue-700 mb-8 flex items-center gap-4 relative z-10">
              <Construction className="w-12 h-12" />
              {isArabic ? "نصائح فنية هامة: أخطاء شائعة يجب تجنبها عند تفصيل بيت الشعر!" : "Important Technical Advice: Common Mistakes to Avoid When Building Byoot Shaar!"}
            </h4>
            <div className="relative z-10 text-xl">
              <p className="text-blue-900 mb-8 font-bold leading-relaxed bg-white/50 p-6 rounded-2xl">
                {isArabic 
                  ? "بيت الشعر استثمار كبير يجب أن يدوم لسنوات طوال. الكثير من العملاء يقعون ضحية للأسعار الرخيصة التي تخفي وراءها كوارث في التنفيذ والعزل. بصفتنا خبراء، ننصحك بالانتباه للآتي:"
                  : "A Byoot Shaar is a large investment that must last for many years. Many clients fall victim to cheap prices that hide execution and insulation disasters. As experts, we advise you to note the following:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800 font-medium">
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "1. تجاهل التمديدات الكهربائية الآمنة:" : "1. Ignoring Safe Electrical Wiring:"}</strong>
                  {isArabic ? "بيوت الشعر تحتاج إلى تمديدات كهربائية (للمكيفات والإضاءة). يجب التأكد من تمرير الأسلاك داخل (مواسير عازلة للحرائق) لتجنب حدوث أي ماس كهربائي مع الحديد أو القماش." : "Tents require electrical wiring (for ACs and lights). Ensure wires are run through (fire-retardant conduits) to avoid electrical shorts with iron or fabric."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "2. تخطي طبقة الخشب في السقف:" : "2. Skipping the Wooden Roof Layer:"}</strong>
                  {isArabic ? "بعض المقاولين يضعون العزل بين الحديد والقماش مباشرة للتوفير. الأصول الهندسية تحتم وضع طبقة خشب (بلاكاش 9 ملم) لشد السقف ومنع ترهل العزل أو القماش مع الزمن." : "Some contractors place insulation directly between iron and fabric to save money. Proper engineering requires a wood layer (9mm plywood) to tense the roof and prevent insulation/fabric sagging."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "3. استخدام أقمشة غير مقاومة للحريق:" : "3. Using Non-Fire-Retardant Fabrics:"}</strong>
                  {isArabic ? "تأكد من استخدام قماش خارجي وداخلي معالج بمواد مانعة للاشتعال (Fire Retardant)، خاصة إذا كنت تنوي تركيب (مشب نار) أو مدخنة داخل بيت الشعر." : "Ensure the outer and inner fabrics are treated with Fire Retardant materials, especially if you plan to install a (fireplace / Mashab) or chimney inside."}
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "4. ميول السقف الضعيف:" : "4. Weak Roof Slopes:"}</strong>
                  {isArabic ? "إذا كان ميول الهرم في السقف منخفضاً، ستتجمع مياه الأمطار فوق بيت الشعر. يجب أن يكون الميول حاداً ومحسوباً بدقة لتصريف المياه تلقائياً نحو الخارج." : "If the roof pyramid slope is too low, rainwater will pool on top. The slope must be sharp and precisely calculated to drain water automatically outwards."}
                </div>
              </div>
              
              <div className="mt-10 bg-blue-700 text-white p-8 rounded-2xl text-center text-2xl font-black shadow-xl">
                {isArabic 
                  ? "في ديار جدة العالمية، نقوم بتسليم بيوت الشعر على (المفتاح)، تشمل الهيكل، العزل، الكهرباء، الديكور الداخلي، وتركيب المشبات، مع ضمان حقيقي موثق على جودة التنفيذ."
                  : "At Deyar Jeddah Global, we deliver Byoot Shaar (Turnkey), including framing, insulation, electricals, interior decor, and fireplace installation, with a documented actual warranty on execution quality."}
              </div>
            </div>
          </div>

          {/* Section 5: True Transparent Pricing */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-amber-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "5. أسعار تفصيل بيوت الشعر في جدة لعام 2026 (بدون مفاجآت)" : "5. Byoot Shaar Customization Prices in Jeddah 2026 (No Surprises)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "الأسعار التالية تمثل (تكلفة المتر المربع الأرضي أو الطولي) وتعتمد على عدد الطبقات العازلة ومستوى الديكور الداخلي. السعر يشمل التنفيذ الكامل:"
              : "The following prices represent (cost per square meter) depending on the number of insulation layers and interior decor level. Price includes full execution:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-amber-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "بيت شعر عادي (بطانة سدو بدون ديكورات)" : "Standard Tent (Sadu lining, no decor)"}</span>
              <span className="text-2xl font-black text-amber-600">{isArabic ? "يبدأ من 170 ريال/م²" : "Starts 170 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-amber-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "بيت شعر ملكي (عزل 3 طبقات + ديكور سقف)" : "Royal Tent (3 insulation layers + roof decor)"}</span>
              <span className="text-2xl font-black text-amber-600">{isArabic ? "يبدأ من 240 ريال/م²" : "Starts 240 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-amber-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "بيت شعر فاخر (مخمل + سبوت لايت + زجاج)" : "Luxury Tent (Velvet + Spotlights + Glass)"}</span>
              <span className="text-2xl font-black text-amber-600">{isArabic ? "يبدأ من 350 ريال/م²" : "Starts 350 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-amber-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "خيام أوروبية شفافة (للمقاهي والحدائق)" : "Transparent European Tents (Cafes & Gardens)"}</span>
              <span className="text-2xl font-black text-amber-600">{isArabic ? "يبدأ من 300 ريال/م²" : "Starts 300 SAR/m²"}</span>
            </div>
          </div>
          
          {/* Section 6: Local Hyper-Targeting */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 mt-20 shadow-lg">
            <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-amber-600" />
              {isArabic ? "أين نعمل؟ تنفيذ بيوت الشعر والمجالس الفاخرة:" : "Where Do We Work? Execution of Luxury Byoot Shaar & Majlis:"}
            </h4>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              {isArabic 
                ? "نوفر خدمات رفع المقاسات وتصميم بيوت الشعر (للفلل، القصور، والاستراحات) في نفس اليوم. تغطي خدماتنا أرجاء جدة والمدن المجاورة:"
                : "We provide same-day measurement and tent design services for villas, palaces, and resorts. Our services cover all parts of Jeddah and neighboring cities:"}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-lg font-bold text-amber-600 leading-loose">
              {isArabic ? 
              "أبحر الشمالية والجنوبية، حي الشاطئ، المحمدية، النعيم، البساتين، الخالدية، الروضة، الزهراء، المرجان، الصفا، المروة، الحمدانية، حي السامر، الأجاويد، مدينة مكة المكرمة، ورابغ." 
              : "North & South Obhur, Al-Shati, Al-Mohammadiya, Al-Naeem, Al-Basateen, Al-Khalidiya, Al-Rawdah, Al-Zahra, Al-Murjan, Al-Safa, Al-Marwah, Al-Hamdaniya, Al-Samer, Al-Ajaweed, Holy Mecca, and Rabigh."}
            </div>
          </div>

          {/* MASSIVE Smart SEO Keyword Cloud */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-amber-600" />
              {isArabic ? "دليل الكلمات المفتاحية لمشاريعنا (SEO Core Tags):" : "Keyword Guide for Our Projects (SEO Core Tags):"}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* SMART BACKLINKS SECTION */}
          <SmartBacklinks currentPath="/services/byoot-shaar" categoryName="byoot-shaar" />

        </div>
      </div>
    </section>
  );
}
