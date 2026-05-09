import React from 'react';
import SmartBacklinks from './SmartBacklinks';
import { Target, ShieldAlert, Award, MapPin, Construction, Shield, TreePine, Droplets, Leaf, Sprout } from 'lucide-react';

export default function LandscapingExpertArticle({ isArabic }: { isArabic: boolean }) {
  const keywordsAr = [
    "تنسيق حدائق جدة", "تركيب عشب صناعي بجدة", "تصميم شلالات منزلية", "عشب طبيعي", 
    "ممرات حدائق", "ديكورات حدائق خارجية", "نوافير راقصة", "أسعار تنسيق الحدائق 2026", 
    "عشب جداري 3D", "مظلات وجلسات حدائق", "تصميم لاندسكيب", "إضاءة حدائق ذكية",
    "تصميم حدائق فلل", "تنسيق حوش", "مقاول حدائق بجدة", "أرخص عشب صناعي",
    "صيانة حدائق", "حدائق مودرن", "شلالات جدارية بجدة"
  ];

  const keywordsEn = [
    "Landscaping Jeddah", "Artificial Grass Installation", "Home Waterfalls Design", "Natural Grass",
    "Garden Walkways", "Outdoor Garden Decor", "Dancing Fountains", "Landscaping Prices 2026",
    "3D Vertical Gardens", "Garden Shades and Seating", "Landscape Design", "Smart Garden Lighting",
    "Villa Gardens Design", "Courtyard Landscaping", "Jeddah Garden Contractor", "Cheapest Artificial Grass",
    "Garden Maintenance", "Modern Gardens", "Wall Waterfalls Jeddah"
  ];

  const keywords = isArabic ? keywordsAr : keywordsEn;
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <section className="py-24 bg-white border-y border-gray-100" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-base font-bold uppercase tracking-wider">
              {isArabic ? "الدليل المرجعي الأقوى لتنسيق الحدائق (لاندسكيب) 2026" : "The Ultimate Reference Guide for Landscaping 2026"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
            {isArabic ? (
              <>المرجع الهندسي الزراعي: كل ما يخص <span className="text-green-600">تنسيق الحدائق في جدة</span></>
            ) : (
              <>The Agricultural Engineering Reference: Everything About <span className="text-green-600">Landscaping in Jeddah</span></>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "الحديقة ليست مجرد عشب أخضر؛ إنها المساحة التي تتنفس فيها عائلتك، والمكان الذي يعكس رقي منزلك. في ديار جدة العالمية، نقوم بتحويل الأحواش الباهتة والأسطح المهملة إلى (منتجعات خاصة) تدمج بين سحر الشلالات المائية، حيوية العشب الدائم، وتكنولوجيا الإضاءة الذكية. هذا الدليل يكشف لك كيف تتجنب أخطاء الزراعة في جو جدة الحار، وكيف تحصل على جودة عالية بأسعار تنافسية جداً."
              : "A garden isn't just green grass; it's the space where your family breathes, reflecting your home's elegance. At Deyar Jeddah Global, we transform dull courtyards and neglected roofs into (private resorts) integrating the magic of waterfalls, the vitality of evergreen grass, and smart lighting tech. This guide reveals how to avoid planting mistakes in Jeddah's hot climate and how to get high quality at very competitive prices."}
          </p>
        </div>

        <div className={`prose prose-lg md:prose-xl prose-primary mx-auto text-gray-700 leading-relaxed max-w-none ${isArabic ? 'text-justify' : 'text-left'}`}>
          
          {/* Section 1: Deep Climate & Aesthetic Analysis */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-green-500 mb-8 bg-gray-50 py-4`}>
            {isArabic ? "1. تحدي المناخ والتربة في جدة: لماذا يموت العشب الطبيعي؟" : "1. Jeddah's Climate & Soil Challenge: Why Does Natural Grass Die?"}
          </h3>
          <p className="text-xl">
            {isArabic 
              ? "الكثير من أصحاب الفلل في جدة يعانون من اصفرار العشب الطبيعي وموت النباتات بعد أشهر قليلة من زراعتها. السبب يكمن في ثلاثة عوامل: ملوحة التربة الساحلية، حرارة الصيف الشديدة، والاعتماد على أنظمة ري عشوائية تسبب تعفن الجذور."
              : "Many villa owners in Jeddah suffer from natural grass yellowing and plant death a few months after planting. The cause lies in three factors: coastal soil salinity, extreme summer heat, and relying on random irrigation systems that cause root rot."}
          </p>
          <p className="text-xl mt-4">
            {isArabic
              ? "نحن نعالج ذلك جذرياً عبر: (1) استبدال تربة الأساس بتربة زراعية معقمة (بيتموس وبيرلايت)، (2) تصميم شبكات ري أوتوماتيكية بالتنقيط تضمن وصول المياه بانتظام دون هدر، أو (3) الاعتماد على (العشب الصناعي فائق الجودة) كحل ذكي لا يحتاج لقطرة ماء واحدة ويحتفظ بلونه الأخضر الكثيف لعشر سنوات كاملة."
              : "We treat this radically by: (1) replacing foundational soil with sterile agricultural soil (Peatmoss & Perlite), (2) designing automatic drip irrigation networks ensuring water reaches regularly without waste, or (3) relying on (ultra-quality artificial grass) as a smart solution requiring zero water while retaining its dense green color for a full ten years."}
          </p>

          {/* Section 2: Massive Material Table */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-green-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "2. معجم خامات اللاندسكيب: الجودة والاستدامة" : "2. Landscaping Materials Glossary: Quality & Sustainability"}
          </h3>
          <p className="text-xl mb-6">
            {isArabic 
              ? "استخدام الخامات الصحيحة هو الفاصل بين حديقة تعيش شهراً، وحديقة تعيش عمراً. إليك المعايير التي نستخدمها:"
              : "Using the right materials is the difference between a garden that lives a month and one that lives a lifetime. Here are the standards we use:"}
          </p>
          
          <div className="overflow-x-auto my-10 shadow-2xl rounded-3xl border-4 border-gray-100">
            <table className={`min-w-full bg-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "العنصر" : "Element"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "المواصفات الهندسية" : "Engineering Specs"}</th>
                  <th className="py-6 px-6 font-black text-lg">{isArabic ? "الفائدة العملية" : "Practical Benefit"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                <tr className="hover:bg-green-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Leaf className="w-5 h-5 text-green-600"/> {isArabic ? "العشب الصناعي (Artificial Grass)" : "Artificial Grass"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "ألياف بوليمر معالجة ضد الـ UV، سماكة (3 إلى 5 سم)، مع فتحات تصريف مياه دقيقة لمنع العفن." : "UV-treated polymer fibers, thickness (3 to 5 cm), with precise water drainage holes to prevent rot."}</td>
                  <td className="py-6 px-6 text-green-800 font-bold">{isArabic ? "لا يحتاج ري أو قص، آمن على الأطفال، ولا يجذب الحشرات والزواحف." : "No watering or mowing needed, safe for kids, and doesn't attract insects/reptiles."}</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Droplets className="w-5 h-5 text-blue-600"/> {isArabic ? "الشلالات والنوافير (Water Features)" : "Waterfalls & Fountains"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "عزل مائي ألماني 3 طبقات، مضخات مياه غاطسة إيطالية (صامتة)، وإضاءة تحت مائية IP68." : "3-layer German waterproofing, Italian submersible (silent) water pumps, and IP68 underwater lighting."}</td>
                  <td className="py-6 px-6 text-blue-800 font-bold">{isArabic ? "يمنع تسرب المياه لجدران الفيلا، ويضمن تدفق مائي نقي وصوت خرير مهدئ." : "Prevents water leaks to villa walls, ensures pure water flow and soothing trickle sound."}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary">
                    <div className="flex items-center gap-2"><Construction className="w-5 h-5 text-slate-600"/> {isArabic ? "الممرات (Walkways & Stepping Stones)" : "Walkways & Stepping Stones"}</div>
                  </td>
                  <td className="py-6 px-6 font-medium">{isArabic ? "حجر طبيعي (عشوائي أو هندسي)، خشب WPC، وبلاط متداخل على قاعدة خرسانية مسلحة ومائلة للتصريف." : "Natural stone (random or geometric), WPC wood, and interlocking tiles on a sloped reinforced concrete base."}</td>
                  <td className="py-6 px-6 text-slate-800 font-bold">{isArabic ? "يمنع هبوط الأرضيات وتجمع المياه، ويعطي مسارات مشي آمنة وفخمة." : "Prevents ground sinking and water pooling, providing safe and luxurious walking paths."}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: Massive Advice Section (Trust Building) */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 md:p-14 rounded-[3rem] border-4 border-green-200 my-20 relative overflow-hidden shadow-2xl">
            <ShieldAlert className={`absolute top-1/2 ${isArabic ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} w-96 h-96 text-green-500/5 -translate-y-1/2 pointer-events-none`} />
            <h4 className="text-3xl md:text-4xl font-black text-green-700 mb-8 flex items-center gap-4 relative z-10">
              <Construction className="w-12 h-12" />
              {isArabic ? "نصائح فنية هامة: أخطاء كارثية في تصميم الحدائق يجب أن تحذر منها!" : "Important Technical Advice: Disastrous Garden Design Mistakes to Beware Of!"}
            </h4>
            <div className="relative z-10 text-xl">
              <p className="text-green-900 mb-8 font-bold leading-relaxed bg-white/50 p-6 rounded-2xl">
                {isArabic 
                  ? "سوق تنسيق الحدائق مليء بالهواة الذين يقدمون أسعاراً محروقة ولكنهم يدمرون بنية منزلك. بصفتنا خبراء، ننصحك بالانتباه لما يلي:"
                  : "The landscaping market is full of amateurs offering burnt prices but destroying your home's structure. As experts, we advise you to note the following:"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-800 font-medium">
                <div className="bg-white/60 p-6 rounded-2xl border border-green-200">
                  <strong className="text-2xl text-green-900 block mb-3">{isArabic ? "1. تركيب العشب الصناعي فوق التراب مباشرة:" : "1. Installing Artificial Grass Directly on Dirt:"}</strong>
                  {isArabic ? "أكبر خطأ! العشب الصناعي يحتاج لتأسيس طبقة (صبيز/حصى صغير) ودكها برصاصة ميكانيكية، ثم وضع قماش مانع لنمو الأعشاب الطفيلية، لمنع هبوط العشب أو تشكل المستنقعات تحته." : "Biggest mistake! Artificial grass needs a foundation layer (gravel/sub-base) compacted by a mechanical compactor, then a weed-barrier fabric, to prevent sinking or swamp formation beneath."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-green-200">
                  <strong className="text-2xl text-green-900 block mb-3">{isArabic ? "2. بناء الشلالات بدون عزل الايبوكسي:" : "2. Building Waterfalls Without Epoxy Insulation:"}</strong>
                  {isArabic ? "بناء شلال جداري ملاصق لجدار الفيلا بدون عزل مائي احترافي سيؤدي حتماً لتشرب الجدار للماء، تقشر الدهانات من الداخل، وتهالك الخرسانة. العزل المائي (3 طبقات) هو خط أحمر." : "Building a wall waterfall touching the villa wall without professional waterproofing will inevitably lead to water seepage, interior paint peeling, and concrete degradation. 3-layer insulation is a red line."}
                </div>
                
                <div className="bg-white/60 p-6 rounded-2xl border border-green-200">
                  <strong className="text-2xl text-green-900 block mb-3">{isArabic ? "3. التمديدات الكهربائية المكشوفة:" : "3. Exposed Electrical Wiring:"}</strong>
                  {isArabic ? "حديقتك مكان للماء (ري أو شلالات) والكهرباء (إضاءة). استخدام أسلاك غير معزولة أو عدم استخدام مواسير (PVC رمادي) يهدد حياة أطفالك بخطر الصعق الكهربائي." : "Your garden is a place for water (irrigation/waterfalls) and electricity (lighting). Using uninsulated wires or failing to use grey PVC conduits threatens your children's lives with electrocution."}
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-green-200">
                  <strong className="text-2xl text-green-900 block mb-3">{isArabic ? "4. زراعة الأشجار ذات الجذور المدمرة:" : "4. Planting Trees with Destructive Roots:"}</strong>
                  {isArabic ? "زراعة أشجار جذورها عميقة أو عرضية قوية (مثل الفيكس أو الكونوكاربس) بالقرب من خزان المياه أو أسوار الفيلا يؤدي إلى كسر الأنابيب وتصدع الأسوار بمرور السنين." : "Planting trees with deep or strong horizontal roots (like Ficus or Conocarpus) near water tanks or villa walls leads to pipe breakage and wall cracking over the years."}
                </div>
              </div>
              
              <div className="mt-10 bg-green-700 text-white p-8 rounded-2xl text-center text-2xl font-black shadow-xl">
                {isArabic 
                  ? "في ديار جدة، نقوم بالتصميم المعماري 3D قبل البدء، لنضمن توزيع المساحات وتجنب أي تعارض بين تمديدات المياه والكهرباء، مع ضمان حقيقي على كافة التركيبات."
                  : "At Deyar Jeddah, we do 3D architectural design before starting, ensuring space distribution and avoiding conflicts between plumbing and electricals, with a real warranty on all installations."}
              </div>
            </div>
          </div>

          {/* Section 5: True Transparent Pricing */}
          <h3 className={`text-3xl font-black text-primary ${isArabic ? 'border-r-8 pr-6' : 'border-l-8 pl-6'} border-green-500 mb-8 mt-16 bg-gray-50 py-4`}>
            {isArabic ? "5. عروض أسعار تنسيق الحدائق في جدة (تحديث حصري لعام 2026)" : "5. Landscaping Price Offers in Jeddah (Exclusive 2026 Update)"}
          </h3>
          <p className="text-xl mb-8">
            {isArabic 
              ? "نقدم أسعاراً تنافسية تعتبر الأفضل في السوق السعودي لعام 2026، مع الحفاظ الكامل على الجودة والمواصفات القياسية. السعر يشمل التوريد والتركيب والضمان:"
              : "We offer competitive prices considered the best in the Saudi market for 2026, fully maintaining quality and standard specifications. Price includes supply, installation, and warranty:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-green-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "توريد وتركيب عشب صناعي (كثافة عالية)" : "Supply & Install Artificial Grass (High Density)"}</span>
              <span className="text-2xl font-black text-green-600">{isArabic ? "يبدأ من 25 ريال/م²" : "Starts 25 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-green-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "تنسيق متكامل (عشب + ممرات حجرية)" : "Full Landscaping (Grass + Stone Walkways)"}</span>
              <span className="text-2xl font-black text-green-600">{isArabic ? "يبدأ من 120 ريال/م²" : "Starts 120 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-green-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "تنسيق فاخر (إضاءة ذكية + شبكات ري مخفية)" : "Luxury Landscaping (Smart Light + Hidden Irrigation)"}</span>
              <span className="text-2xl font-black text-green-600">{isArabic ? "يبدأ من 250 ريال/م²" : "Starts 250 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-green-500 transition-colors">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "عشب جداري (3D مع زهور صناعية)" : "Vertical Wall Grass (3D with Artificial Flowers)"}</span>
              <span className="text-2xl font-black text-green-600">{isArabic ? "يبدأ من 100 ريال/م²" : "Starts 100 SAR/m²"}</span>
            </div>
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-green-500 transition-colors md:col-span-2">
              <span className="text-xl font-bold text-gray-800">{isArabic ? "تصميم وبناء شلالات مودرن جدارية (تسليم مفتاح)" : "Design & Build Modern Wall Waterfalls (Turnkey)"}</span>
              <span className="text-2xl font-black text-green-600">{isArabic ? "المشروع يبدأ من 3500 ريال" : "Project starts at 3500 SAR"}</span>
            </div>
          </div>
          
          {/* Section 6: Local Hyper-Targeting */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-200 mt-20 shadow-lg">
            <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-green-600" />
              {isArabic ? "أين نعمل؟ فرقنا الزراعية والهندسية في جدة:" : "Where Do We Work? Our Agricultural & Engineering Teams in Jeddah:"}
            </h4>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              {isArabic 
                ? "نوفر خدمات رفع المقاسات وتصميم الـ 3D مجاناً (عند التعاقد). نخدم كافة الفلل، القصور، والمشاريع التجارية في:"
                : "We provide free measurements and 3D design (upon contracting). We serve all villas, palaces, and commercial projects in:"}
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-lg font-bold text-green-600 leading-loose">
              {isArabic ? 
              "حي الشاطئ، المرجان، النعيم، المحمدية، البساتين، الخالدية، الروضة، الزهراء، أبحر الشمالية، أبحر الجنوبية، حي الحمدانية، الصفا، المروة، السامر، الأجاويد، بالإضافة إلى رابغ، ثول، ومدينة مكة المكرمة." 
              : "Al-Shati, Al-Murjan, Al-Naeem, Al-Mohammadiya, Al-Basateen, Al-Khalidiya, Al-Rawdah, Al-Zahra, North & South Obhur, Al-Hamdaniya, Al-Safa, Al-Marwah, Al-Samer, Al-Ajaweed, plus Rabigh, Thuwal, and Mecca."}
            </div>
          </div>

          {/* MASSIVE Smart SEO Keyword Cloud */}
          <div className="mt-20 pt-10 border-t-4 border-gray-100">
            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-green-600" />
              {isArabic ? "دليل الكلمات المفتاحية لمشاريعنا لعام 2026 (SEO Core Tags):" : "Keyword Guide for Our 2026 Projects (SEO Core Tags):"}
            </h4>
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-white text-gray-700 text-base font-bold rounded-xl border-2 border-gray-200 hover:border-green-500 hover:text-green-600 hover:bg-green-50 cursor-default transition-all shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* SMART BACKLINKS SECTION */}
          <SmartBacklinks currentPath="/services/landscaping" categoryName="landscaping" />

        </div>
      </div>
    </section>
  );
}
