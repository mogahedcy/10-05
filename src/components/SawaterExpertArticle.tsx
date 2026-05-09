import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, CheckCircle2, ShieldAlert, Award, MapPin, HardHat, Shield, Construction, Wind, EyeOff } from 'lucide-react';

export default function SawaterExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    "سواتر حديد بجدة", "تركيب سواتر خشبية", "سواتر قماش للحوش", "سواتر شينكو معزول", 
    "سواتر بلاستيك مجدول", "سواتر حديد شرائح", "سواتر لكسان للمسابح", "أسعار السواتر بجدة", 
    "تعلية جدران الفلل", "سواتر حواجز جدارية", "حداد سواتر بجدة", "مظلات وسواتر جدة",
    "سواتر قماش بولي إيثيلين", "حاجز رؤية بين الجيران", "سواتر مودرن للفلل", 
    "أرخص أنواع السواتر بجدة", "سواتر مشغول", "سواتر قص ليزر", "مقاول سواتر بمكة"
  ];

  const keywordsEn = [
    "Iron Fences Jeddah", "Wooden Privacy Screens", "Fabric Fences for Courtyards", "Insulated Shinko Fences",
    "Braided WPC Fences", "Louvered Iron Fences", "Lexan Pool Enclosures", "Fence Prices in Jeddah",
    "Villa Wall Extensions", "Wall Barrier Screens", "Fence Blacksmith Jeddah", "Shades and Fences Jeddah",
    "Polyethylene Fabric Fences", "Neighbor Privacy Barriers", "Modern Villa Fences",
    "Cheapest Fences in Jeddah", "Wrought Iron Fences", "Laser Cut Fences", "Mecca Fence Contractor"
  ];

  const keywords = isArabic ? keywordsAr : keywordsEn;
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <section className="py-24 bg-white border-y border-gray-100" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-base font-bold uppercase tracking-wider">
              {isArabic ? "الدليل المرجعي الأقوى لتأمين المنازل والفلل 2026" : "The Ultimate Reference Guide for Home & Villa Security 2026"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
            {isArabic ? (
              <>المرجع الهندسي والتجاري: كل ما يخص <span className="text-accent">السواتر في جدة والمملكة</span></>
            ) : (
              <>The Engineering & Commercial Reference: Everything About <span className="text-accent">Fences in Jeddah & KSA</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "الخصوصية في مجتمعنا السعودي ليست رفاهية، بل ضرورة حتمية. في ديار جدة العالمية، نقدم لك خبرة 15 عاماً في تنفيذ آلاف الأمتار من حواجز السواتر (حديد، خشب، قماش، شينكو). هذا الدليل الهندسي يكشف لك أسرار الحدادة الثقيلة، طرق التثبيت الآمنة ضد العواصف، وكيف تحمي أسرتك وممتلكاتك بأفضل الخامات دون أن تقع ضحية للغش التجاري."
              : "Privacy in our Saudi society isn't a luxury; it's an absolute necessity. At Deyar Jeddah, we offer 15 years of experience executing thousands of meters of privacy fences (Iron, Wood, Fabric, Shinko). This engineering guide reveals the secrets of heavy blacksmithing, storm-proof anchoring methods, and how to protect your family and property with the best materials without falling victim to commercial fraud."}
          </p>
        </div>

        <div className={`prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed max-w-none ${isArabic ? 'text-justify' : 'text-left'}`}>
          
          {/* Section 1: Deep Climate & Privacy Analysis */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 bg-gray-50 py-4`}>
            {isArabic ? "1. هندسة الخصوصية ومقاومة الرياح: لماذا تنهار السواتر العادية في جدة؟" : "1. Privacy Engineering & Wind Resistance: Why Standard Fences Collapse in Jeddah?"}
          </h3>
          <p className="text-xl">
            {isArabic 
              ? "السواتر ليست مجرد (ساتر يمنع الرؤية)، بل هي جدار معدني يتعرض لضغط رياح هائل (Wind Load) خاصة في المناطق المفتوحة وأحياء شمال جدة وأبحر. السواتر العادية التي يتم تركيبها بـ (خوابير مسامير) ضعيفة وبدون (عمدان دبل) تسقط على السيارات أو الممتلكات عند أول عاصفة هواء شديدة، مما يشكل خطراً مميتاً."
              : "Fences are not just (screens blocking vision); they are metal walls subjected to massive wind loads, especially in open areas and North Jeddah neighborhoods like Obhur. Standard fences installed with weak (wall plugs) and without (double pillars) collapse onto cars or property during the first severe windstorm, posing a lethal risk."}
          </p>
          <p className="text-xl mt-4">
            {isArabic
              ? "نحن نستخدم قواعد فولاذية (Plates) بسماكات تبدأ من 8 ملم إلى 12 ملم، يتم تثبيتها بمسامير كيميائية (Chemical Anchors) تتغلغل داخل الخرسانة وتصبح جزءاً منها. علاوة على ذلك، نستخدم حديد سابك المجلفن المدهون بأساس إيبوكسي مقاوم للرطوبة وأملاح البحر، لضمان عدم ظهور الصدأ البني المزعج الذي يشوه جدران الفلل البيضاء."
              : "We use solid steel base plates ranging from 8mm to 12mm thickness, fastened with Chemical Anchors that penetrate the concrete and fuse with it. Furthermore, we use galvanized SABIC steel painted with moisture and sea-salt resistant Epoxy primer, guaranteeing the absence of ugly brown rust that ruins white villa walls."}
          </p>

          {/* Section 2: Massive Material Table */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "2. المعجم الفني لأنواع السواتر: مقارنة هندسية شفافة" : "2. Technical Glossary of Fence Types: Transparent Engineering Comparison"}
          </h3>
          <p className="text-xl mb-6">
            {isArabic 
              ? "اختيار نوع الساتر يعتمد على ميزانيتك، ودرجة التهوية المطلوبة، والمنظر الجمالي. إليك المواصفات الفنية الحقيقية لأقوى الأنواع التي نصنعها في ورشنا:"
              : "Choosing the fence type depends on your budget, required ventilation, and aesthetic preference. Here are the true technical specs of the strongest types we manufacture in our workshops:"}
          </p>
          
          <div className="overflow-x-auto my-10 shadow-2xl rounded-3xl border-4 border-gray-100">
            <table className={`min-w-full bg-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <thead className="bg-gradient-to-r from-primary to-accent text-white">
                <tr>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "نوع الساتر (الخامة)" : "Fence Type (Material)"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "السماكات والهيكل الداعم" : "Thickness & Support Structure"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "نسبة حجب الرؤية والتهوية" : "Vision Block & Ventilation"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "العمر الافتراضي والصلابة" : "Lifespan & Durability"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-indigo-600"/> {isArabic ? "سواتر الحديد (شرائح أبجور ومجدول)" : "Iron Fences (Louvered & Braided)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "سماكات صاج الحديد (0.5 ملم إلى 1 ملم). أعمدة 8x8 سم." : "Iron sheet thickness (0.5mm to 1mm). 8x8cm pillars."}</td>
                  <td className="py-6 px-6 text-indigo-700 font-bold">{isArabic ? "حجب رؤية 100%. الشرائح تسمح بتمرير هواء بنسبة 10%. المجدول يسمح بـ 25%." : "100% Vision Block. Louvers allow 10% airflow. Braided allows 25%."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "صلابة أمنية قصوى (عمر يتجاوز 20 عاماً)" : "Max Security Durability (20+ Years)"}</td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><EyeOff className="w-5 h-5 text-amber-600"/> {isArabic ? "سواتر الخشب البلاستيكي (WPC)" : "WPC Wooden Fences"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "شرائح خشب معالجة بالبلاستيك المقاوم للتسوس والتشقق. هياكل حديد مجلفن." : "Wood strips treated with anti-rot/crack plastic. Galvanized iron frames."}</td>
                  <td className="py-6 px-6 text-amber-700 font-bold">{isArabic ? "حجب رؤية 100%. فخامة عالية جداً تشبه الخشب الطبيعي تماماً." : "100% Vision block. Ultra-luxurious look identical to natural wood."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "مقاوم للنمل الأبيض والمياه (ضمان 10 سنوات)" : "Termite & Water Resistant (10 Years)"}</td>
                </tr>
                <tr className="hover:bg-emerald-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Wind className="w-5 h-5 text-emerald-600"/> {isArabic ? "سواتر القماش (PVC و البولي إيثيلين)" : "Fabric Fences (PVC & Polyethylene)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "قماش كوري أو أسترالي مشدود على فريمات حديد تيوب." : "Korean or Australian fabric stretched on tubular iron frames."}</td>
                  <td className="py-6 px-6 text-emerald-700 font-bold">{isArabic ? "حجب رؤية 90% إلى 100%. خفيفة الوزن وتكلفتها الاقتصادية ممتازة." : "90% to 100% Vision block. Lightweight with excellent economical cost."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "ممتازة للإيجارات والأسوار العالية (ضمان 5-10 سنوات)" : "Great for rentals & high walls (5-10 Years)"}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Construction className="w-5 h-5 text-slate-600"/> {isArabic ? "سواتر شينكو (معزول وعادي)" : "Shinko Fences (Insulated & Regular)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "ألواح صاج متعرجة (أبيض وبيج) بسماكات 0.35 إلى 0.50 ملم." : "Corrugated sheet panels (White/Beige) 0.35mm to 0.50mm thickness."}</td>
                  <td className="py-6 px-6 text-slate-700 font-bold">{isArabic ? "حجب 100%. العزل يحجب صوت الرياح والحرارة بشكل كبير." : "100% block. Insulation significantly blocks wind noise and heat."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "الأرخص والعملي للمساحات الكبيرة والمصانع" : "Cheapest & practical for large areas & factories"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: Massive Advice Section (Trust Building) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-14 rounded-[3rem] border-4 border-blue-200 my-20 relative overflow-hidden shadow-2xl">
            <ShieldAlert className={`absolute top-1/2 ${isArabic ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} w-96 h-96 text-blue-500/5 -translate-y-1/2 pointer-events-none`} />
            <h4 className="text-3xl md:text-4xl font-black text-blue-700 mb-8 flex items-center gap-4 relative z-10">
              <Construction className="w-12 h-12" />
              {isArabic ? "نصائح فنية هامة: أخطاء شائعة يجب تجنبها عند تركيب السواتر!" : "Important Technical Advice: Common Mistakes to Avoid When Installing Fences!"}
            </h4>
            <div className="relative z-10 text-xl">
              <p className="text-blue-900 mb-8 font-bold leading-relaxed bg-white/50 p-6 rounded-2xl">
                {isArabic 
                  ? "الكثير من العملاء يواجهون مشاكل في السواتر التي يتم تركيبها بواسطة عمالة غير متخصصة. السواتر هياكل معدنية ثقيلة، وأي خطأ في التأسيس قد يعرضها للسقوط. للحفاظ على سلامتك، تأكد من تجنب هذه الأخطاء التنفيذية:"
                  : "Many customers face issues with fences installed by non-specialized labor. Fences are heavy metal structures, and any flaw in the foundation can lead to collapse. For your safety, ensure to avoid these execution mistakes:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800 font-medium">
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "1. استخدام (بليتات) رقيقة جداً:" : "1. Using Very Thin Base-Plates:"}</strong>
                  {isArabic ? "تأكد من عدم استخدام قاعدة حديد (بليتة) سماكتها تقل عن 8 ملم لتثبيت العمود. السماكات الضعيفة (3 ملم) تنثني مع الرياح وتؤدي لانخلاع المسمار." : "Ensure not to use an iron base-plate thinner than 8mm to anchor the pillar. Weak thicknesses (3mm) bend with the wind and cause the bolt to dislodge."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "2. زيادة المسافات بين الأعمدة:" : "2. Increasing Distance Between Pillars:"}</strong>
                  {isArabic ? "الأصول الهندسية تحتم وضع عمود كل (2.5 إلى 3 متر كحد أقصى). زيادة المسافة إلى 4 متر تجعل الساتر يهتز مع الهواء ويصدر أصواتاً مزعجة ويفقد تماسكه." : "Engineering principles dictate a pillar every (2.5 to 3 meters max). Increasing the distance to 4 meters makes the fence shake loudly in the wind and lose its structural integrity."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "3. اللحام السطحي الضعيف:" : "3. Weak Surface Welding:"}</strong>
                  {isArabic ? "يجب التأكد من تلحيم الفريمات بخط لحام كامل دائري بدلاً من 'بنطة لحام' واحدة. اللحام الضعيف ينكسر فوراً عند تعرض الساتر للضغط." : "Ensure frames are welded with a full circular weld seam rather than a single 'spot weld'. Weak welding breaks instantly when the fence is under pressure."}
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "4. التثبيت بمسامير غير مجلفنة:" : "4. Fastening with Ungalvanized Screws:"}</strong>
                  {isArabic ? "تأكد من استخدام مسامير مجلفنة مقاومة للصدأ. المسامير العادية تتآكل خلال أشهر قليلة مما يؤدي إلى سقوط ألواح الصاج واحدة تلو الأخرى." : "Ensure the use of galvanized rust-resistant screws. Normal screws corrode within a few months, causing the sheet panels to fall off."}
                </div>
              </div>
              
              <div className="mt-10 bg-blue-700 text-white p-8 rounded-2xl text-center text-2xl font-black shadow-xl">
                {isArabic 
                  ? "في ديار جدة العالمية، نلتزم بتطبيق المعايير الهندسية الصارمة. نستخدم (براغي كيميائية) وعمدان دبل لحماية عائلتك، مع ضمان فعلي يمتد لـ 10 سنوات."
                  : "At Deyar Jeddah Global, we commit to strict engineering standards. We use (Chemical Anchors) and Double Pillars to protect your family, backed by an actual 10-year warranty."}
              </div>
            </div>
          </div>

          {/* Section 5: True Transparent Pricing */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "5. أسعار تركيب السواتر في جدة لعام 2026 (بدون مفاجآت)" : "5. Fence Installation Prices in Jeddah 2026 (No Surprises)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "الأسعار التالية تمثل (تكلفة المتر المربع) وتعتمد على ارتفاع الساتر وطول الجدار. السعر شامل الهيكل المعدني، الدهان الحراري المقاوم للصدأ، التركيب، والضمان:"
              : "The following prices represent (cost per square meter) depending on fence height and wall length. The price includes the metal frame, rust-resistant thermal paint, installation, and warranty:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر قماش (بولي إيثيلين/PVC)" : "Fabric Fences (Polyethylene/PVC)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 80 ريال/م²" : "Starts 80 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر شينكو (زنك متعرج)" : "Shinko Fences (Corrugated Zinc)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 65 ريال/م²" : "Starts 65 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر حديد (مجدول)" : "Iron Fences (Braided)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 110 ريال/م²" : "Starts 110 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر حديد (شرائح أبجور)" : "Iron Fences (Louvered)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 120 ريال/م²" : "Starts 120 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر خشب بلاستيكي (WPC مجدول)" : "WPC Wood Fences (Braided)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 160 ريال/م²" : "Starts 160 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر خشب بلاستيكي (WPC شرائح)" : "WPC Wood Fences (Louvered)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 180 ريال/م²" : "Starts 180 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors md:col-span-2">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "سواتر لكسان (بولي كربونيت) وزجاج للمسابح" : "Lexan (Polycarbonate) & Glass for Pools"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 170 ريال/م²" : "Starts 170 SAR/m²"}</span>
            </div>
          </div>
          
          {/* Section 6: Local Hyper-Targeting */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 mt-20 shadow-lg">
            <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-accent" />
              {isArabic ? "أين نعمل؟ تغطية شاملة وفورية لمشاريع السواتر:" : "Where Do We Work? Immediate & Comprehensive Coverage for Fence Projects:"}
            </h4>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              {isArabic 
                ? "يتحرك مهندسونا يومياً لرفع المقاسات وتركيب السواتر في كافة أنحاء جدة الراقية، التجارية، والمناطق الصناعية. نضمن لك زيارة مجانية في نفس اليوم إذا كنت متواجداً في:"
                : "Our engineers deploy daily for measurements and fence installations across all elite, commercial, and industrial areas of Jeddah. We guarantee a free same-day visit if you are located in:"}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-lg font-bold text-accent leading-loose">
              {isArabic ? 
              "أبحر الشمالية والجنوبية، حي الشاطئ، حي الروضة، حي الخالدية، حي الزهراء، حي السلامة، حي البساتين، حي النعيم، حي المحمدية، حي المرجان، حي الصفا، حي المروة، حي الحمدانية، حي السامر، حي الأجاويد، حي السنابل، المدينة الصناعية الأولى والثانية بجدة، وكامل أحياء مكة المكرمة ورابغ والطائف." 
              : "North and South Obhur, Al-Shati, Al-Rawdah, Al-Khalidiya, Al-Zahra, Al-Salama, Al-Basateen, Al-Naeem, Al-Mohammadiya, Al-Murjan, Al-Safa, Al-Marwah, Al-Hamdaniya, Al-Samer, Al-Ajaweed, Al-Sanabel, 1st & 2nd Industrial Cities in Jeddah, and all neighborhoods of Mecca, Rabigh, and Taif."}
            </div>
          </div>

          {/* MASSIVE Smart SEO Keyword Cloud */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-accent" />
              {isArabic ? "دليل الكلمات المفتاحية لمشاريعنا (SEO Core Tags):" : "Keyword Guide for Our Projects (SEO Core Tags):"}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-accent hover:text-accent hover:bg-accent/5 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* SMART BACKLINKS SECTION */}
          <SmartBacklinks currentPath="/services/sawater" categoryName="sawater" />

        </div>
      </div>
    </section>
  );
}
