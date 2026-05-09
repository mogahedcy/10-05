import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, CheckCircle2, ShieldAlert, Award, MapPin, HardHat, Droplets, Wrench, SunMedium, Construction, Umbrella } from 'lucide-react';

export default function MazallatExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    "مظلات سيارات بجدة", "مظلات مسابح", "مظلات PVC", "قماش بولي إيثيلين", 
    "مظلات لكسان", "مظلات كابولي", "مظلات شد إنشائي", "مظلات هرمية", 
    "مظلات حدائق خشبية", "مظلات حديد مجلفن", "أسعار المظلات في جدة", 
    "مظلات قماش كوري 1100 جرام", "مظلات خارجية للمنازل", "مظلات ساكو البديلة",
    "تركيب مظلات رخيصة بجدة", "مظلات مدارس", "مظلات مواقف سيارات",
    "مقاول مظلات وسواتر بجدة", "أفضل شركة مظلات في مكة وجدة", "مظلات مساجد",
    "مظلات أحواش", "برجولات حديد شكل خشب", "مظلات سيارات مودرن",
    "مظلات قماش استرالي", "مظلات بولي كربونيت", "تفصيل مظلات جدة",
    "مظلات مداخل فلل", "مظلات اسطح منازل", "مظلات قماش الماني", "مظلات متحركة"
  ];

  const keywordsEn = [
    "Car Shades Jeddah", "Swimming Pool Shades", "PVC Shades", "Polyethylene Fabric",
    "Lexan Canopies", "Cantilever Shades", "Tensile Structures", "Pyramid Shades",
    "Wooden Garden Pergolas", "Galvanized Steel Shades", "Shade Prices in Jeddah",
    "1100g Korean Fabric Shades", "Outdoor Home Shades", "Custom Carports",
    "Cheap Shades Installation Jeddah", "School Canopies", "Parking Lot Shades",
    "Top Shades Contractor Jeddah", "Mosque Shades", "Backyard Canopies",
    "Iron Pergolas Wood Finish", "Modern Car Shades", "Australian Fabric Shades",
    "Polycarbonate Canopies", "Villa Entrance Shades", "Rooftop Shades", 
    "German PVC Shades", "Retractable Shades Jeddah"
  ];

  const keywords = isArabic ? keywordsAr : keywordsEn;
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <section className="py-24 bg-white border-y border-gray-100" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-base font-bold uppercase tracking-wider">
              {isArabic ? "الدليل الأضخم والأشمل محلياً لعام 2026" : "The Most Massive & Comprehensive Local Guide 2026"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
            {isArabic ? (
              <>المرجع الهندسي والتجاري: كل ما يخص <span className="text-accent">المظلات في جدة والمملكة</span></>
            ) : (
              <>The Engineering & Commercial Reference: Everything About <span className="text-accent">Shades in Jeddah & KSA</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "تفوقنا على كافة منافسينا لم يأتِ من فراغ. في ديار جدة العالمية، نضع بين يديك حصيلة خبرة 15 عاماً من التنفيذ الميداني لمئات المشاريع الحكومية والخاصة. هذا الدليل ليس مجرد محتوى ترويجي، بل هو خريطة طريق هندسية دقيقة تكشف لك أدق تفاصيل الحدادة، الأقمشة، اللحامات، وكيفية ضمان استثمارك لسنوات طويلة دون خسائر."
              : "Our superiority over competitors didn't come from nowhere. At Deyar Jeddah, we provide you with 15 years of field execution experience across hundreds of governmental and private projects. This guide isn't just promotional content; it's a precise engineering roadmap revealing the finest details of blacksmithing, fabrics, welding, and how to secure your investment for years without losses."}
          </p>
        </div>

        <div className={`prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed max-w-none ${isArabic ? 'text-justify' : 'text-left'}`}>
          
          {/* Section 1: Deep Climate Analysis */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 bg-gray-50 py-4`}>
            {isArabic ? "1. التحدي المناخي في عروس البحر الأحمر: لماذا تفشل المظلات العادية في جدة؟" : "1. The Climate Challenge in the Red Sea Bride: Why Standard Shades Fail in Jeddah?"}
          </h3>
          <p className="text-xl">
            {isArabic 
              ? "لا يخفى على أحد أن مناخ مدينة جدة والمدن الساحلية يتميز بطبيعة قاسية جداً على المعادن والمنسوجات. نحن لا نتحدث فقط عن شمس حارقة تتجاوز 50 درجة مئوية في ذروة الصيف، بل نتحدث عن (العدو الخفي): نسبة الرطوبة العالية التي تتجاوز 85% والمشبعة بأملاح البحر الأحمر (Chlorides). هذه التركيبة المناخية تفتك بأي حديد غير معالج (غير مجلفن) وتدمر أي قماش غير مزود بطبقات حماية (UV Protection)."
              : "It's no secret that the climate in Jeddah and coastal cities is extremely harsh on metals and textiles. We are not just talking about a blazing sun exceeding 50°C in peak summer, but the (hidden enemy): high humidity exceeding 85% saturated with Red Sea salts (Chlorides). This climatic combination destroys untreated (non-galvanized) iron and ruins any fabric lacking UV protection layers."}
          </p>
          <p className="text-xl mt-4">
            {isArabic
              ? "الكثير من المنافسين يقومون بتركيب مظلات بأسعار بخسة باستخدام حديد (أسود) ودهانات عادية، مما يؤدي لظهور الصدأ خلال أقل من 6 أشهر وتلف القماش وتيبسه. نحن في ديار جدة نطبق معايير أرامكو الهندسية: نستخدم الحديد المجلفن، وأساسات إيبوكسي (Epoxy Primer) شديدة الالتصاق، ثم طبقات من دهان البولي يوريثان (Polyurethane) الناري المقاوم للصدأ والأملاح لعمر افتراضي يتجاوز 15 عاماً."
              : "Many competitors install cheap shades using (black) iron and standard paints, leading to rust appearing in less than 6 months and fabric stiffening. At Deyar Jeddah, we apply Aramco's engineering standards: we use galvanized steel, highly adhesive Epoxy Primer bases, followed by rust and salt-resistant Polyurethane enamel coatings for a lifespan exceeding 15 years."}
          </p>

          {/* Section 2: Massive Material Table */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "2. الدليل الهندسي لخامات تغطية المظلات: مقارنة فنية لا يخبرك بها المقاولون" : "2. Engineering Guide to Shade Covers: Technical Comparison Contractors Hide"}
          </h3>
          <p className="text-xl mb-6">
            {isArabic 
              ? "اختيار القماش هو القرار الأهم. السوق مليء بكلمات مثل (قماش صيني مقلد، درجة ثانية). لتتجاوز كل هذا الغموض، إليك المواصفات الفنية المعتمدة عالمياً ومحلياً والتي نوفرها:"
              : "Choosing the fabric is the most critical decision. The market is flooded with fake Chinese knockoffs. To bypass this ambiguity, here are the globally and locally certified technical specifications we provide:"}
          </p>
          
          <div className="overflow-x-auto my-10 shadow-2xl rounded-3xl border-4 border-gray-100">
            <table className={`min-w-full bg-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <thead className="bg-gradient-to-r from-primary to-accent text-white">
                <tr>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "اسم الخامة والمصدر" : "Material Name & Source"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "الأوزان والسماكات (الجرام/متر)" : "Weights & Thickness (g/sqm)"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "خصائص العزل الميكانيكية" : "Mechanical Insulation Properties"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "العمر الافتراضي والضمان" : "Lifespan & Warranty"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blue-600"/> {isArabic ? "بي في سي (PVC) ألماني وكوري" : "PVC (German & Korean)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "1100 جرام (الأقوى)، 900 جرام، 680 جرام" : "1100g (Strongest), 900g, 680g"}</td>
                  <td className="py-6 px-6 text-green-700 font-bold">{isArabic ? "عزل حراري 100%، منع تسرب المياه 100%، مضاد للاشتعال (Fire Retardant)، مضاد للفطريات." : "100% Thermal Insulation, 100% Waterproof, Fire Retardant, Anti-fungal."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "ضمان 10 سنوات (عمر يفوق 15 سنة)" : "10 Years Warranty (Lifespan 15+)"}</td>
                </tr>
                <tr className="hover:bg-green-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><SunMedium className="w-5 h-5 text-green-600"/> {isArabic ? "بولي إيثيلين (HDPE) أسترالي" : "Polyethylene (HDPE) Australian"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "كثافة عالية تتراوح بين 340 إلى 380 جرام للمتر المربع" : "High density ranging 340-380 g/sqm"}</td>
                  <td className="py-6 px-6 text-blue-700 font-bold">{isArabic ? "يسمح بمرور الهواء بنسبة 5%، يحجب أشعة الشمس بنسبة 95%، ممتاز للمناطق ذات الرياح القوية." : "Allows 5% airflow, blocks 95% sunlight, excellent for high-wind areas."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "ضمان 5 إلى 8 سنوات" : "5 to 8 Years Warranty"}</td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Droplets className="w-5 h-5 text-purple-600"/> {isArabic ? "لكسان (Polycarbonate)" : "Lexan (Polycarbonate)"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "ألواح بسماكات (3 ملم، 4 ملم، 6 ملم، 8 ملم، 10 ملم)" : "Panels thickness (3mm, 4mm, 6mm, 8mm, 10mm)"}</td>
                  <td className="py-6 px-6 text-purple-700 font-bold">{isArabic ? "شفاف، محبب، أو ملون. عزل للأمطار 100%، مضاد للكسر بقوة تعادل 250 ضعف الزجاج." : "Transparent, crystal, or colored. 100% rain proof, 250x stronger than glass."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "ضمان 10 سنوات ضد الكسر والاصفرار" : "10 Years Warranty vs Breakage/Yellowing"}</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><HardHat className="w-5 h-5 text-orange-600"/> {isArabic ? "قماش بي في دي إف (PVDF)" : "PVDF Fabric"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "ألماني عالي الجودة بوزن يتجاوز 1050 جرام" : "High quality German weighing 1050g+"}</td>
                  <td className="py-6 px-6 text-orange-700 font-bold">{isArabic ? "طبقة حماية تفلون مانعة للالتصاق (لا يتراكم عليه الغبار)، مقاومة قصوى للأشعة فوق البنفسجية." : "Teflon anti-stick coating (repels dust), maximum UV resistance."}</td>
                  <td className="py-6 px-6 font-black text-accent">{isArabic ? "ضمان 15 سنة فما فوق" : "15+ Years Warranty"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Deep Dive into Shade Types */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "3. أشكال وتصاميم المظلات وتطبيقاتها المثلى (التفاصيل التي تميزنا)" : "3. Shade Shapes, Designs & Optimal Applications (What Sets Us Apart)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "لا يوجد تصميم (واحد يناسب الجميع). نحن ندرس اتجاه الشمس، مساحة الفناء، مسارات الرياح، ونوع الجدار قبل اقتراح التصميم. إليك أقوى الأنواع التي ننفذها بدقة هندسية:"
              : "There is no (one-size-fits-all) design. We study sun direction, courtyard space, wind paths, and wall types before proposing a design. Here are the top types we execute with engineering precision:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                {isArabic ? "1. مظلات السيارات الكابولي (Cantilever)" : "1. Cantilever Car Shades"}
              </h4>
              <p className="text-gray-600 mb-4 font-medium leading-relaxed">
                {isArabic 
                  ? "أصعب وأقوى أنواع المظلات هندسياً. تعتمد على التثبيت من جهة واحدة فقط (الخلف) بدون أي أعمدة أمامية تعيق وقوف السيارة. نستخدم فيها مواسير دائرية قوية (4 إلى 6 بوصة) وقواعد خرسانية مسلحة بعمق يصل إلى 80 سم تحت الأرض لضمان عدم اقتلاعها نهائياً. مثالية لمواقف الشركات والجهات الحكومية والفلل ذات المساحات الضيقة."
                  : "The most engineering-intensive and strongest shade. Relies on single-side mounting (rear) without front pillars blocking car parking. We use strong circular pipes (4-6 inches) and reinforced concrete bases up to 80cm deep to ensure it never uproots. Ideal for corporate parking, government entities, and tight villa spaces."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                {isArabic ? "2. المظلات الهرمية والمخروطية (X-Shape & Pyramid)" : "2. Pyramid & Conical Shades (X-Shape)"}
              </h4>
              <p className="text-gray-600 mb-4 font-medium leading-relaxed">
                {isArabic 
                  ? "الخيار المفضل للأحواش السكنية ومواقف السيارات الخاصة. شكلها المرتفع من المنتصف يمنع تجمع مياه الأمطار أو الأتربة تماماً. نقوم بتنفيذ الهيكل بنظام المواسير والفريمات المزدوجة، ونستخدم ماكينات لحام كورية لضمان دمج الأقمشة حرارياً بدون خياطة يدوية لتجنب تسرب المياه نهائياً."
                  : "The preferred choice for residential courtyards and private parking. Its raised center perfectly prevents rain pooling and dust accumulation. We execute the frame using double piping systems and use Korean welding machines to thermally bond the fabrics without manual stitching, permanently avoiding water leaks."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                {isArabic ? "3. مظلات الشد الإنشائي (Tensile Structures)" : "3. Tensile Structure Shades"}
              </h4>
              <p className="text-gray-600 mb-4 font-medium leading-relaxed">
                {isArabic 
                  ? "قمة التطور المعماري. تستخدم للمساحات الضخمة (الملاعب، الحدائق العامة، المراكز التجارية، ومظلات المدارس). نعتمد فيها على برامج هندسية ثلاثية الأبعاد (مثل AutoCAD و SAP2000) لحساب قوة الشد ومقاومة الرياح. نستخدم كابلات فولاذية (Steel Wire Ropes) غير قابلة للصدأ (Stainless Steel 316) مع أقمشة PVDF القوية."
                  : "The pinnacle of architectural evolution. Used for massive spaces (stadiums, public parks, malls, and school shades). We rely on 3D engineering software (like AutoCAD and SAP2000) to calculate tension and wind resistance. We use Stainless Steel 316 wire ropes with robust PVDF fabrics."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <h4 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                {isArabic ? "4. مظلات البرجولات الحديدية بخشب بلاستيكي" : "4. Iron Pergolas with WPC Wood"}
              </h4>
              <p className="text-gray-600 mb-4 font-medium leading-relaxed">
                {isArabic 
                  ? "نحول حدائق وجلسات الأسطح في فلل جدة إلى تحف فنية. نصنع الهيكل من الحديد الصلب المدهون بألوان خشبية، ونغطيه إما بمادة اللكسان أو القماش لإعطاء ظل كثيف ومنع دخول مياه المطر، مع الاحتفاظ بالمظهر الخشبي الطبيعي الذي لا يتسوس ولا يتأثر بالنمل الأبيض."
                  : "We transform gardens and rooftop seating in Jeddah villas into masterpieces. We build the frame from solid iron painted in wood tones, covering it with Lexan or fabric to provide dense shade and block rain, while maintaining a natural wood look that never rots or attracts termites."}
              </p>
            </div>
          </div>

          {/* Section 4: Massive Advice Section (Trust Building) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-14 rounded-[3rem] border-4 border-blue-200 my-20 relative overflow-hidden shadow-2xl">
            <ShieldAlert className={`absolute top-1/2 ${isArabic ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} w-96 h-96 text-blue-500/5 -translate-y-1/2 pointer-events-none`} />
            <h4 className="text-3xl md:text-4xl font-black text-blue-700 mb-8 flex items-center gap-4 relative z-10">
              <Construction className="w-12 h-12" />
              {isArabic ? "نصائح فنية هامة: أخطاء شائعة يجب تجنبها عند تركيب المظلات!" : "Important Technical Advice: Common Mistakes to Avoid When Installing Shades!"}
            </h4>
            <div className="relative z-10 text-xl">
              <p className="text-blue-900 mb-8 font-bold leading-relaxed bg-white/50 p-6 rounded-2xl">
                {isArabic 
                  ? "الكثير من العملاء يواجهون مشاكل في المظلات التي يتم تركيبها بواسطة عمالة غير متخصصة وبأسعار مغرية جداً. كيف يحدث ذلك؟ يتم تخفيض الجودة في تفاصيل فنية دقيقة لا يراها العميل إلا بعد تلف المظلة! تأكد من تجنب هذه الأخطاء التنفيذية:"
                  : "Many customers face issues with shades installed by non-specialized labor at very tempting prices. How does this happen? Quality is reduced in fine technical details that the customer only sees after the shade fails! Ensure to avoid these execution mistakes:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800 font-medium">
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "1. تقليل سماكات الحديد:" : "1. Reducing Iron Thickness:"}</strong>
                  {isArabic ? "تأكد من استخدام الحديد بالسماكة المتفق عليها (مثل 2 ملم). استخدام حديد تجاري ضعيف (1 ملم) يجعل المظلة تتمايل مع أول عاصفة هواء، مما يؤدي إلى تمزق القماش." : "Ensure the use of iron with the agreed-upon thickness (e.g., 2mm). Using weak commercial iron (1mm) causes the shade to sway with the first windstorm, leading to fabric tearing."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "2. اللحام السطحي وتخطي العزل:" : "2. Surface Welding & Skipping Insulation:"}</strong>
                  {isArabic ? "يجب التأكد من إكمال خط اللحام بالكامل وتجليخه وتنعيمه قبل الدهان. اللحام النقطي والدهان المباشر فوق اللحام يسمح للرطوبة باختراق المفصل وحدوث الصدأ فوراً." : "Ensure the weld line is fully completed, ground, and smoothed before painting. Spot welding and direct painting over the weld allows moisture to penetrate the joint and rust instantly."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "3. الأقمشة غير المطابقة للمواصفات:" : "3. Non-Compliant Fabrics:"}</strong>
                  {isArabic ? "تأكد من مصدر القماش، حيث يوجد أقمشة مقلدة تفتقر للخيوط الداعمة القوية (Yarn). القماش الأصلي يتحمل الشد العالي، بينما المقلد يتمزق بمجرد شده أو تعرضه للرياح." : "Verify the fabric source, as there are counterfeit fabrics lacking strong supporting yarns. Original fabric withstands high tension, while fake fabric tears upon tensioning or exposure to wind."}
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-blue-200">
                  <strong className="text-2xl text-blue-900 block mb-3">{isArabic ? "4. استخدام مسامير تثبيت ضعيفة:" : "4. Using Weak Anchoring Bolts:"}</strong>
                  {isArabic ? "احرص على استخدام مسامير مجلفنة من شركات معتمدة أو براغي كيميائية للأحمال العالية. استخدام خوابير رخيصة يعرض المظلة لخطر السقوط بمرور الوقت." : "Ensure the use of galvanized bolts from certified companies or Chemical Anchors for heavy loads. Using cheap wall plugs puts the shade at risk of falling over time."}
                </div>
              </div>
              
              <div className="mt-10 bg-blue-700 text-white p-8 rounded-2xl text-center text-2xl font-black shadow-xl">
                {isArabic 
                  ? "في ديار جدة، نلتزم بأعلى المعايير المهنية والهندسية. نوفر شهادات منشأ للمواد، ونستخدم أقوى أدوات التثبيت، ولا نسلمك المشروع إلا بعد اجتيازه كافة اختبارات الجودة."
                  : "At Deyar Jeddah, we adhere to the highest professional and engineering standards. We provide material origin certificates, use the strongest anchoring tools, and only handover the project after passing all quality tests."}
              </div>
            </div>
          </div>

          {/* Section 5: True Transparent Pricing */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-accent mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "5. تفاصيل أسعار تركيب المظلات في جدة لعام 2026 (بشفافية تامة)" : "5. Shade Installation Prices in Jeddah 2026 (Total Transparency)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "الأسعار التالية تمثل (متوسط تكلفة المتر المربع) للمشاريع القياسية. الأسعار تتضمن الهيكل المعدني، الدهان الناري الإيبوكسي، القماش، والتركيب، مع الضمان الشامل."
              : "The following prices represent the (average cost per square meter) for standard projects. Prices include the metal frame, Epoxy polyurethane paint, fabric, installation, and comprehensive warranty."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات بولي إيثيلين أسترالي" : "Australian Polyethylene"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 80 ريال/م²" : "Starts 80 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات PVC كوري 1100 جرام" : "Korean PVC 1100g"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 95 ريال/م²" : "Starts 95 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات PVC ألماني 1050 جرام" : "German PVC 1050g"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 130 ريال/م²" : "Starts 130 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات لكسان (بولي كربونيت)" : "Lexan (Polycarbonate)"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 220 ريال/م²" : "Starts 220 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات خشب بلاستيكي مجدول" : "WPC Braided Wooden"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 170 ريال/م²" : "Starts 170 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-accent transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "مظلات حدائق شد إنشائي" : "Tensile Garden Shades"}</span>
              <span className="text-2xl font-black text-accent">{isArabic ? "يبدأ من 300 ريال/م²" : "Starts 300 SAR/m²"}</span>
            </div>
          </div>
          <p className="text-base text-gray-500 italic bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            * {isArabic 
                ? "إخلاء مسؤولية تسويقية: نحن نعلن أسعارنا بشفافية، الأسعار قابلة للنزول في حال المساحات الكبيرة (فوق 100 متر مربع) وقابلة للزيادة الطفيفة إذا كان الموقع يتطلب قواعد خرسانية مكلفة أو رافعات ثقيلة." 
                : "Marketing Disclaimer: We declare our prices transparently. Prices can decrease for large areas (over 100 sqm) and increase slightly if the site requires expensive concrete footings or heavy cranes."}
          </p>
          
          {/* Section 6: Local Hyper-Targeting */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 mt-20 shadow-lg">
            <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-accent" />
              {isArabic ? "تغطية جغرافية أخطبوطية شاملة لكافة أحياء جدة ومكة:" : "Comprehensive Octopus-like Geographic Coverage for all Jeddah & Mecca Neighborhoods:"}
            </h4>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              {isArabic 
                ? "لأننا نملك أسطولاً من سيارات التركيب وعمالة نظامية ضخمة، فنحن نصلك في نفس اليوم لرفع المقاسات وتقديم الكروكي الهندسي أينما كنت. تشمل تغطيتنا كافة أرجاء جدة الراقية والتجارية:"
                : "Because we own a fleet of installation vehicles and a massive legal workforce, we reach you the same day for measurements and architectural sketches wherever you are. Our coverage includes all elite and commercial areas of Jeddah:"}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-lg font-bold text-accent leading-loose">
              {isArabic ? 
              "أبحر الشمالية، أبحر الجنوبية، حي الشاطئ، حي الروضة، حي الخالدية، حي الزهراء، حي السلامة، حي البساتين، حي النعيم، حي المحمدية، حي المرجان، حي الصفا، حي المروة، حي الحمدانية، حي السامر، حي الأجاويد، حي السنابل، بالإضافة إلى تغطية كاملة لمكة المكرمة وضواحيها ورابغ ومدينة الملك عبدالله الاقتصادية." 
              : "North Obhur, South Obhur, Al-Shati, Al-Rawdah, Al-Khalidiya, Al-Zahra, Al-Salama, Al-Basateen, Al-Naeem, Al-Mohammadiya, Al-Murjan, Al-Safa, Al-Marwah, Al-Hamdaniya, Al-Samer, Al-Ajaweed, Al-Sanabel, plus full coverage of Holy Mecca and its suburbs, Rabigh, and King Abdullah Economic City."}
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
          <SmartBacklinks currentPath="/services/mazallat" categoryName="mazallat" />

        </div>
      </div>
    </section>
  );
}
