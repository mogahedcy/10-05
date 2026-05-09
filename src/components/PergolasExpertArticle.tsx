import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, ShieldAlert, Award, MapPin, Construction, Shield, Trees, Sun, Droplets } from 'lucide-react';

export default function PergolasExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    "برجولات خشبية بجدة", "تركيب برجولات حديد", "برجولات حدائق مودرن", "مظلات جلوس خارجية", 
    "برجولات خشب بلاستيكي WPC", "برجولات أسطح", "برجولات لكسان شفافة", "أسعار البرجولات بجدة", 
    "تصميم جلسات خارجية", "برجولات ألمنيوم", "مظلات خشبية للحدائق", "برجولات قماش للرووف",
    "برجولات معلقة", "برجولات مودرن 2024", "مقاول برجولات بجدة", 
    "أرخص برجولات بجدة", "برجولات قص ليزر", "تنسيق حدائق وبرجولات", "برجولات استراحات"
  ];

  const keywordsEn = [
    "Wooden Pergolas Jeddah", "Iron Pergolas Installation", "Modern Garden Pergolas", "Outdoor Seating Shades",
    "WPC Wood Pergolas", "Rooftop Pergolas", "Transparent Lexan Pergolas", "Pergola Prices in Jeddah",
    "Outdoor Seating Design", "Aluminum Pergolas", "Wooden Garden Shades", "Fabric Roof Pergolas",
    "Hanging Pergolas", "Modern Pergolas 2024", "Jeddah Pergola Contractor",
    "Cheapest Pergolas Jeddah", "Laser Cut Pergolas", "Landscaping & Pergolas", "Resort Pergolas"
  ];

  const keywords = isArabic ? keywordsAr : keywordsEn;
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <section className="py-24 bg-white border-y border-gray-100" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-base font-bold uppercase tracking-wider">
              {isArabic ? "الدليل المرجعي الأقوى لتصميم البرجولات والجلسات 2026" : "The Ultimate Reference Guide for Pergola & Seating Design 2026"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
            {isArabic ? (
              <>المرجع الهندسي والتجاري: كل ما يخص <span className="text-emerald-600">البرجولات في جدة</span></>
            ) : (
              <>The Engineering & Commercial Reference: Everything About <span className="text-emerald-600">Pergolas in Jeddah</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "البرجولات ليست مجرد (مظلة شمس)، بل هي قلب الحديقة وروح الجلسة الخارجية في أي فيلا راقية. في ديار جدة العالمية، نقدم لك خبرة 15 عاماً في تحويل الأسطح الميتة والحدائق الفارغة إلى منتجعات فاخرة من خلال دمج برجولات الخشب البلاستيكي (WPC) والحديد واللكسان. هذا الدليل الفني يكشف لك أسرار تحمل البرجولات للرطوبة، كيفية تفادي تعفن الخشب، وكيفية الحصول على فخامة المنتجعات بأسعار تنافسية."
              : "Pergolas are not just (sun shades); they are the heart of the garden and the soul of the outdoor seating in any elite villa. At Deyar Jeddah Global, we offer 15 years of experience in transforming dead rooftops and empty gardens into luxury resorts by integrating WPC wood, iron, and Lexan pergolas. This technical guide reveals the secrets of moisture endurance, how to avoid wood rot, and how to achieve resort luxury at competitive prices."}
          </p>
        </div>

        <div className={`prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed max-w-none ${isArabic ? 'text-justify' : 'text-left'}`}>
          
          {/* Section 1: Deep Climate & Aesthetic Analysis */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-emerald-500 mb-8 bg-gray-50 py-4`}>
            {isArabic ? "1. التحدي المناخي في جدة: لماذا تتعفن البرجولات الرخيصة؟" : "1. The Climate Challenge in Jeddah: Why Do Cheap Pergolas Rot?"}
          </h3>
          <p className="text-xl">
            {isArabic 
              ? "مدينة جدة تتميز بمناخ شديد القسوة على الأخشاب الطبيعية: رطوبة تتجاوز 85% ليلاً، شمس حارقة نهاراً، وأملاح بحرية تفتت الأنسجة. البرجولات الخشبية التقليدية التي يركبها المقاولون غير المختصين تتعرض לـ (التشقق، التعفن، وهجوم النمل الأبيض) خلال أقل من سنة، وتصبح مشوهة وخطيرة."
              : "The city of Jeddah has an extremely harsh climate on natural wood: humidity exceeding 85% at night, scorching sun during the day, and sea salts that disintegrate tissues. Traditional wooden pergolas installed by non-specialized contractors are exposed to (cracking, rotting, and termite attacks) in less than a year, becoming disfigured and dangerous."}
          </p>
          <p className="text-xl mt-4">
            {isArabic
              ? "الحل الهندسي العبقري الذي نتبناه هو استخدام هياكل حديدية (Tubular Steel) مجلفنة بالكامل كمحور ارتكاز خفي، وتلبيسها بخشب الـ (WPC - الخشب البلاستيكي) المعالج. هذا يعطيك صلابة الحديد 100%، ومظهر الخشب الطبيعي 100%، مع مناعة تامة ضد المياه والحشرات، وعمر افتراضي يتجاوز العشرين عاماً دون نقطة صيانة واحدة!"
              : "The genius engineering solution we adopt is using fully galvanized Tubular Steel structures as a hidden core, cladding it with treated (WPC - Wood Plastic Composite). This gives you 100% iron rigidity, and 100% natural wood appearance, with complete immunity against water and insects, and a lifespan exceeding twenty years without a single drop of maintenance!"}
          </p>

          {/* Section 2: Massive Material Table */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-emerald-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "2. كتالوج أنواع البرجولات: الهندسة والأناقة" : "2. Pergola Types Catalog: Engineering & Elegance"}
          </h3>
          <p className="text-xl mb-6">
            {isArabic 
              ? "سواء كنت ترغب بجلسة مغلقة للخصوصية، أو برجولة مفتوحة لتسلق النباتات، إليك الأنواع الأقوى التي ننفذها في قصور ومشاريع جدة:"
              : "Whether you want a closed seating area for privacy, or an open pergola for climbing plants, here are the strongest types we execute in Jeddah's palaces and projects:"}
          </p>
          
          <div className="overflow-x-auto my-10 shadow-2xl rounded-3xl border-4 border-gray-100">
            <table className={`min-w-full bg-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <tr>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "نوع البرجولة" : "Pergola Type"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "المواصفات الهيكلية والخامات" : "Structural Specs & Materials"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "مستوى الظل والحماية" : "Shade & Protection Level"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "الاستخدام الأمثل" : "Optimal Usage"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                <tr className="hover:bg-emerald-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Trees className="w-5 h-5 text-emerald-600"/> {isArabic ? "برجولات الخشب البلاستيكي (WPC)" : "WPC Wooden Pergolas"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "هيكل حديد مخفي مع أعمدة وتيوبات WPC المعالج ضد التسوس والمياه." : "Hidden iron frame with WPC pillars and tubes treated against rot and water."}</td>
                  <td className="py-6 px-6 text-emerald-700 font-bold">{isArabic ? "مفتوحة لتمرير الهواء، أو مغطاة باللكسان العازل للمطر 100%." : "Open for airflow, or covered with 100% rain-insulating Lexan."}</td>
                  <td className="py-6 px-6 font-black text-emerald-800">{isArabic ? "أفخم خيار للحدائق والرووف" : "Most luxurious for gardens & roofs"}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-slate-600"/> {isArabic ? "برجولات الحديد (قص ليزر ومودرن)" : "Iron Pergolas (Laser Cut & Modern)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "أعمدة فولاذية ضخمة (10x10)، ودهانات نارية فرن بمظهر خشبي أو سادة." : "Massive steel pillars (10x10), and oven-baked fire paints with wooden or solid looks."}</td>
                  <td className="py-6 px-6 text-slate-700 font-bold">{isArabic ? "عمر افتراضي غير محدود. يمكن تغطيتها بقماش أو لكسان للحماية الكاملة." : "Unlimited lifespan. Can be covered with fabric or Lexan for full protection."}</td>
                  <td className="py-6 px-6 font-black text-slate-800">{isArabic ? "الاستراحات والأماكن المفتوحة القاسية" : "Resorts & harsh open areas"}</td>
                </tr>
                <tr className="hover:bg-sky-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Sun className="w-5 h-5 text-sky-600"/> {isArabic ? "برجولات اللكسان الشفاف (الزجاجي)" : "Transparent Lexan Pergolas (Glass-like)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "هيكل حديد أو ألمنيوم مع ألواح بولي كربونيت ضد الكسر بسماكة 4 إلى 6 ملم." : "Iron or aluminum frame with unbreakable polycarbonate panels 4 to 6 mm thick."}</td>
                  <td className="py-6 px-6 text-sky-700 font-bold">{isArabic ? "تسمح بمرور ضوء الشمس بنسبة 40% وتحجب الحرارة والأشعة فوق البنفسجية." : "Allows 40% sunlight while blocking heat and UV rays completely."}</td>
                  <td className="py-6 px-6 font-black text-sky-800">{isArabic ? "تغطية المسابح والجلسات الشتوية" : "Pool coverings & winter seating"}</td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Droplets className="w-5 h-5 text-amber-600"/> {isArabic ? "برجولات القماش (الشد الإنشائي)" : "Fabric Pergolas (Tensile Structures)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "هياكل حديدية رشيقة مغطاة بأقمشة PVC الأوروبية شديدة التحمل ومقاومة للحريق." : "Sleek iron frames covered with heavy-duty European fire-resistant PVC fabrics."}</td>
                  <td className="py-6 px-6 text-amber-700 font-bold">{isArabic ? "تظليل ممتاز بنسبة 95%، اقتصادية جداً وسريعة التركيب." : "Excellent 95% shading, very economical and fast to install."}</td>
                  <td className="py-6 px-6 font-black text-amber-800">{isArabic ? "المقاهي ومواقف الفلل الواسعة" : "Cafes & wide villa courtyards"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: Massive Advice Section (Trust Building) */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-10 md:p-14 rounded-[3rem] border-4 border-emerald-200 my-20 relative overflow-hidden shadow-2xl">
            <ShieldAlert className={`absolute top-1/2 ${isArabic ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} w-96 h-96 text-emerald-500/5 -translate-y-1/2 pointer-events-none`} />
            <h4 className="text-3xl md:text-4xl font-black text-emerald-700 mb-8 flex items-center gap-4 relative z-10">
              <Construction className="w-12 h-12" />
              {isArabic ? "نصائح فنية هامة: أخطاء شائعة يجب تجنبها عند تصميم برجولتك!" : "Important Technical Advice: Common Mistakes to Avoid When Designing Your Pergola!"}
            </h4>
            <div className="relative z-10 text-xl">
              <p className="text-emerald-900 mb-8 font-bold leading-relaxed bg-white/50 p-6 rounded-2xl">
                {isArabic 
                  ? "البرجولات تعتبر عنصراً معمارياً يضيف قيمة فعلية لعقارك، ولكن سوء التنفيذ يحولها إلى هيكل مزعج وخطير. بصفتنا مستشارين هندسيين، ننصحك بالانتباه للآتي قبل التوقيع مع أي مقاول:"
                  : "Pergolas are an architectural element that adds real value to your property, but poor execution turns them into a nuisance. As engineering consultants, we advise you to note the following before signing with any contractor:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-emerald-800 font-medium">
                <div className="bg-white/60 p-6 rounded-2xl border border-emerald-200">
                  <strong className="text-2xl text-emerald-900 block mb-3">{isArabic ? "1. فخ الخشب الطبيعي الرخيص:" : "1. The Cheap Natural Wood Trap:"}</strong>
                  {isArabic ? "تجنب تماماً استخدام خشب (السويدي) أو (الزان) الرخيص في الخارج! هذه الأخشاب تتشرب المياه وتصبح مسكناً للنمل الأبيض في جدة. استبدلها فوراً بالخشب البلاستيكي WPC أو الحديد المعالج كيميائياً." : "Completely avoid using cheap (Swedish) or (Beech) wood outdoors! These woods absorb water and become termite nests in Jeddah. Replace immediately with WPC or chemically treated iron."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-emerald-200">
                  <strong className="text-2xl text-emerald-900 block mb-3">{isArabic ? "2. إهمال ميول الأمطار (كارثة السقف):" : "2. Neglecting Rain Slopes (Roof Disaster):"}</strong>
                  {isArabic ? "إذا قررت تغطية البرجولة باللكسان، يجب تصميم (ميول خفي) بنسبة 3-5% لمنع تجمع مياه الأمطار فوق السقف، والذي يؤدي لتسرب المياه للداخل وسقوط ألواح اللكسان تحت وزن الماء." : "If you cover the pergola with Lexan, a (hidden slope) of 3-5% must be designed to prevent rainwater accumulation, which causes leaking and panel collapse under water weight."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-emerald-200">
                  <strong className="text-2xl text-emerald-900 block mb-3">{isArabic ? "3. التثبيت العشوائي في الأسطح:" : "3. Random Rooftop Anchoring:"}</strong>
                  {isArabic ? "تركيب برجولة في السطح يتطلب حذراً بالغاً كي لا يتم ثقب العزل المائي (Waterproofing) للسطح. نحن نستخدم قواعد (أرجل خرسانية مسبقة الصب) أو مسامير مثبتة بدقة هندسية لضمان عدم تسرب المياه لسقف المنزل." : "Installing a rooftop pergola requires extreme caution not to puncture the surface Waterproofing. We use (pre-cast concrete feet) or precision-anchored bolts to guarantee no water leaks to the house ceiling."}
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-emerald-200">
                  <strong className="text-2xl text-emerald-900 block mb-3">{isArabic ? "4. دهانات الحديد الرديئة:" : "4. Poor Iron Paints:"}</strong>
                  {isArabic ? "الدهان العادي يتقشر بعد أول صيف. يجب التأكد من استخدام مقاولك لدهانات (نارية - فرن) أو أساس (إيبوكسي زنك) لتكوين طبقة درع ضد الصدأ الناتج عن الرطوبة." : "Normal paint peels after the first summer. Ensure your contractor uses (Oven-baked Fire paints) or (Epoxy Zinc) primer to form a rust-shield against humidity."}
                </div>
              </div>
              
              <div className="mt-10 bg-emerald-700 text-white p-8 rounded-2xl text-center text-2xl font-black shadow-xl">
                {isArabic 
                  ? "في ديار جدة العالمية، نقدم لك جلسات ملكية تدوم طويلاً، بتشطيبات 3D مسبقة قبل التنفيذ لتشاهد حديقتك قبل أن نضع فيها مسماراً واحداً، كل هذا مع ضمان 10 سنوات."
                  : "At Deyar Jeddah Global, we offer you royal seating that lasts, with 3D renderings before execution so you see your garden before we drive a single nail, all backed by a 10-year warranty."}
              </div>
            </div>
          </div>

          {/* Section 5: True Transparent Pricing */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-emerald-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "5. أسعار تركيب البرجولات في جدة لعام 2026 (بدون مفاجآت)" : "5. Pergola Installation Prices in Jeddah 2026 (No Surprises)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "الأسعار التالية تمثل (تكلفة المتر المربع) وتعتمد على حجم البرجولة، التصميم (مودرن أم كلاسيك)، ومستلزمات الديكور الإضافية مثل الإضاءة. السعر يشمل التركيب والضمان:"
              : "The following prices represent (cost per square meter) depending on pergola size, design (modern/classic), and extra decor like lighting. Price includes installation and warranty:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-emerald-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "برجولات حديد مغطاة بقماش" : "Iron Pergolas Covered with Fabric"}</span>
              <span className="text-2xl font-black text-emerald-600">{isArabic ? "تبدأ من 130 ريال/م²" : "Starts 130 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-emerald-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "برجولات حديد (شكل خشب مودرن)" : "Iron Pergolas (Modern Wood Look)"}</span>
              <span className="text-2xl font-black text-emerald-600">{isArabic ? "تبدأ من 180 ريال/م²" : "Starts 180 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-emerald-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "برجولات خشب بلاستيكي WPC" : "WPC Wooden Pergolas"}</span>
              <span className="text-2xl font-black text-emerald-600">{isArabic ? "تبدأ من 220 ريال/م²" : "Starts 220 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-emerald-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "برجولات حديد مع لكسان (بولي كربونيت)" : "Iron Pergolas with Lexan"}</span>
              <span className="text-2xl font-black text-emerald-600">{isArabic ? "تبدأ من 230 ريال/م²" : "Starts 230 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-emerald-500 transition-colors md:col-span-2">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "برجولات ألمنيوم ذكية (متحركة/مضلعة)" : "Smart Aluminum Pergolas (Louvered)"}</span>
              <span className="text-2xl font-black text-emerald-600">{isArabic ? "تبدأ من 550 ريال/م²" : "Starts 550 SAR/m²"}</span>
            </div>
          </div>
          
          {/* Section 6: Local Hyper-Targeting */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 mt-20 shadow-lg">
            <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-emerald-600" />
              {isArabic ? "أين نعمل؟ تنفيذ فوري للبرجولات وتنسيق الحدائق:" : "Where Do We Work? Immediate Execution for Pergolas & Landscaping:"}
            </h4>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              {isArabic 
                ? "فرقنا الفنية تنتشر في أهم أحياء العروس لتحويل حدائق الفلل والأسطح إلى تحف معمارية. احجز زيارتك المجانية اليوم إذا كنت في:"
                : "Our technical teams are spread across the Bride of the Red Sea's top neighborhoods to turn villa gardens and roofs into architectural masterpieces. Book your free visit today if you are in:"}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-lg font-bold text-emerald-600 leading-loose">
              {isArabic ? 
              "أبحر الشمالية، أبحر الجنوبية، حي الشاطئ، حي الخالدية، حي الروضة، حي الزهراء، حي البساتين، حي المحمدية، حي المرجان، حي النعيم، حي السلامة، حي الصفا، حي المروة، حي الحمدانية، حي الأجاويد، حي السامر، بالإضافة لمدينة مكة المكرمة، ثول، ومدينة الملك عبدالله الاقتصادية (KAEC)." 
              : "North Obhur, South Obhur, Al-Shati, Al-Khalidiya, Al-Rawdah, Al-Zahra, Al-Basateen, Al-Mohammadiya, Al-Murjan, Al-Naeem, Al-Salama, Al-Safa, Al-Marwah, Al-Hamdaniya, Al-Ajaweed, Al-Samer, plus Mecca, Thuwal, and King Abdullah Economic City (KAEC)."}
            </div>
          </div>

          {/* MASSIVE Smart SEO Keyword Cloud */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-emerald-600" />
              {isArabic ? "دليل الكلمات المفتاحية لمشاريعنا (SEO Core Tags):" : "Keyword Guide for Our Projects (SEO Core Tags):"}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* SMART BACKLINKS SECTION */}
          <SmartBacklinks currentPath="/services/pergolas" categoryName="pergolas" />

        </div>
      </div>
    </section>
  );
}
