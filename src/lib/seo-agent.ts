import ai, { GROQ_MODEL } from './groq-client';

async function callGroqWithJSON(systemPrompt: string, userPrompt: string): Promise<any> {
  const response = await ai.chat.completions.create({
    model: GROQ_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' }
  });

  const content = response.choices[0]?.message?.content || '{}';
  
  try {
    return JSON.parse(content);
  } catch (error) {
    console.warn('⚠️ GROQ returned malformed JSON. Attempting regex extraction...', error);
    // محاولة استخراج الـ JSON في حال قام الـ AI بإضافة نص قبله أو بعده
    const jsonMatch = content.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.error('❌ Regex extraction failed:', e);
      }
    }
    throw new Error('فشل تحليل مخرجات الذكاء الاصطناعي (JSON Parsing Error)');
  }
}

async function callGroq(systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await ai.chat.completions.create({
    model: GROQ_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.7
  });

  return response.choices[0]?.message?.content || '';
}

export interface KeywordAnalysis {
  primary_keywords: string[];
  secondary_keywords: string[];
  long_tail_keywords: string[];
  keyword_density: { [key: string]: number };
  search_intent: string;
  difficulty_score: number;
  opportunity_score: number;
}

export interface ContentAnalysis {
  seo_score: number;
  readability_score: number;
  keyword_optimization: string;
  content_gaps: string[];
  suggestions: string[];
  meta_title_suggestion: string;
  meta_description_suggestion: string;
  h1_suggestions: string[];
  internal_linking_opportunities: string[];
}

export interface CompetitorInsight {
  top_keywords: string[];
  content_strategy: string;
  content_gaps: string[];
  backlink_opportunities: string[];
  improvement_areas: string[];
}

export class SEOAgent {
  async analyzeKeywords(content: string, targetKeywords: string[], language = 'ar'): Promise<KeywordAnalysis> {
    try {
      const prompt = `أنت خبير SEO استراتيجي ومهندس معماري متخصص في قطاع الحدادة والإنشاءات (مظلات، برجولات، سواتر) في السوق السعودي. 
      حلل المحتوى التالي لاستخراج أقوى الكلمات المفتاحية التي تضمن تصدر نتائج البحث في جدة والمملكة.

المحتوى: ${content}

الكلمات المفتاحية المستهدفة حالياً: ${targetKeywords.join(', ')}

قدم تحليلاً استراتيجياً بصيغة JSON يتضمن:
- primary_keywords: الكلمات الأساسية عالية الأهمية والتحويل (3-5 كلمات مثل "مظلات سيارات جدة"، "تركيب برجولات مودرن")
- secondary_keywords: كلمات LSI مرتبطة تقنياً (5-10 كلمات مثل "قماش PVC ألماني"، "خشب معالج"، "مظلات لكسان")
- long_tail_keywords: عبارات بحث طويلة تستهدف نية الشراء (5-10 عبارات مثل "أفضل شركة تركيب مظلات في حي الشاطئ جدة")
- keyword_density: كثافة كل كلمة رئيسية في المحتوى
- search_intent: نية البحث الدقيقة (هل المستخدم يبحث عن معلومة أم يريد الشراء فوراً؟)
- difficulty_score: درجة صعوبة المنافسة مع كبار السوق (1-100)
- opportunity_score: درجة الفرصة لاقتناص المركز الأول (1-100)

المتطلبات الاحترافية:
1. استهدف أحياء جدة الراقية (الشاطئ، الروضة، الحمراء، أبحر الشمالية، البساتين) بشكل ذكي.
2. استخدم مصطلحات هندسية وتقنية احترافية (سمك الحديد، نوع القماش، العزل الحراري، الضمان).
3. اجعل الكلمات المفتاحية تبدو كأنها مختارة بعناية من مستشار تسويق خبير.`;

      const result = await callGroqWithJSON(
        "أنت مستشار SEO وخبير هندسي متخصص في سوق الإنشاءات والمظلات السعودي. قدم استجابة JSON دقيقة واحترافية.",
        prompt
      );
      return result as KeywordAnalysis;
    } catch (error) {
      console.error('Error analyzing keywords:', error);
      throw new Error('فشل تحليل الكلمات المفتاحية');
    }
  }

  async analyzeContent(content: string, targetKeywords: string[], url?: string): Promise<ContentAnalysis> {
    try {
      const prompt = `أنت خبير SEO متقدم. حلل هذا المحتوى وقدم تقييماً شاملاً:

المحتوى: ${content}

الكلمات المفتاحية المستهدفة: ${targetKeywords.join(', ')}
${url ? `الرابط: ${url}` : ''}

قدم تحليلاً بصيغة JSON يشمل:
- seo_score: درجة SEO الإجمالية (1-100)
- readability_score: درجة سهولة القراءة (1-100)
- keyword_optimization: تقييم استخدام الكلمات المفتاحية
- content_gaps: الفجوات في المحتوى التي يجب تغطيتها
- suggestions: اقتراحات محددة للتحسين
- meta_title_suggestion: عنوان meta محسّن (50-60 حرف)
- meta_description_suggestion: وصف meta محسّن (150-160 حرف)
- h1_suggestions: اقتراحات لعناوين H1 جذابة
- internal_linking_opportunities: فرص للربط الداخلي

ركز على تقنيات SEO القوية والفعالة.`;

      const result = await callGroqWithJSON(
        "أنت خبير SEO استراتيجي متخصص في تحليل وتحسين المحتوى لمحركات البحث.",
        prompt
      );
      return result as ContentAnalysis;
    } catch (error) {
      console.error('Error analyzing content:', error);
      throw new Error('فشل تحليل المحتوى');
    }
  }

  async generateBilingualArticle(
    topic: string,
    keywords: string[]
  ): Promise<{
    ar: { title: string; excerpt: string; content: string; metaTitle: string; metaDescription: string; keywords: string[] };
    en: { title: string; excerpt: string; content: string; metaTitle: string; metaDescription: string; keywords: string[] };
    aiAnalysis: { score: number; recommendations: string[] };
  }> {
    try {
      const systemPrompt = `أنت "أبو فهد"، مهندس معماري سعودي مخضرم وخبير حدادة ومقاولات بخبرة تفوق 25 عاماً في سوق جدة والسعودية (مظلات، برجولات، سواتر). أسلوبك ليس روبوتياً إطلاقاً! أنت تكتب بحماس، بخبرة ميدانية عميقة، وبلغة تجمع بين الفصحى المطعمة بمصطلحات السوق السعودي الحقيقية (مثل: مواسير، ملي، تيوب، لكسان، قماش كوري، بي في سي).

      مهمتك القصوى: توليد مقال ثنائي اللغة (عربي/إنجليزي) جبار، موسوعي، ولا يقهر في الـ SEO.

      ===== قوانين صارمة لا مجال لتجاهلها =====

      1. الإخراج: JSON صحيح 100% فقط. بدون أي مقدمات أو شروحات.
      
      2. اللغتين منفصلتين تماماً:
         - العربي: لغة خبير محلي حقيقي يشرح لعميل في جدة. استخدم عبارات مثل "يا إخوان"، "من واقع خبرتي"، "السوق مليان غش لكن...".
         - الإنجليزي: لغة مهندس استشاري دولي (High-end Architectural English) يكتب للمقيمين والشركات. لا تترجم حرفياً!
      
      3. الطول والعمق: 2500+ كلمة لكل لغة. يجب أن يكون محتوى "دسم جداً" (10x Content).
      
      4. الكلمات المفتاحية (SEO الدموي):
         - قم بحشو الكلمات المفتاحية بشكل طبيعي واحترافي جداً (كثافة 2-3%).
         - استخدم الكلمات المترادفة (LSI) وكلمات النية الشرائية (أسعار، تكلفة، تركيب، أفضل شركة، ضمان).
         - يجب وضع الكلمات المفتاحية بالخط العريض <strong> في النص.
         - اذكر أسماء أحياء جدة بدقة في سياق العمل (الشاطئ، الروضة، المرجان، أبحر، الصفا، السلامة، المحمدية).
      
      5. عمق تقني مخيف (Technical Depth):
         - اذكر سماكات الحديد (1.5 ملم، 2 ملم).
         - اذكر أوزان الأقمشة (1100 جرام، 680 جرام).
         - اذكر طرق التثبيت (بليتات، مسامير مجلفنة، لحام، دهان ناري مقاوم للصدأ).
         - اذكر تحديات طقس جدة (الرطوبة العالية، الأملاح، شمس أغسطس الحارقة) وكيف تتغلبون عليها.
      
      6. بنية HTML أسطورية:
         - عناوين <h2> رئيسية مغرية.
         - عناوين <h3> فرعية تفصيلية.
         - استخدم <blockquote> لنصائحك الذهبية كخبير.
         - استخدم <table> لمقارنة الأسعار أو الخامات (مهم جداً لجوجل).
         - استخدم قوائم <ul> و <ol>.
         - قسم الأسئلة الشائعة (FAQ) بـ 5 أسئلة بأسلوب Schema-ready.
      
      7. الربط الداخلي الماكر (Smart Internal Links):
         ادمج هذه الروابط في سياق الكلام بذكاء:
         <a href="/services/mazallat">مظلات السيارات</a>, <a href="/services/pergolas">برجولات الحدائق</a>, <a href="/services/sawater">سواتر الخصوصية</a>, <a href="/services/sandwich-panel">ساندوتش بانل</a>, <a href="/quote">طلب تسعيرة فورية</a>.

      مخرجات JSON المطلوبة:
      {
        "ar": {
          "title": "عنوان طويل، جذاب، مليء بالكلمات المفتاحية (60-80 حرف)",
          "excerpt": "ملخص ناري يثير الفضول (200 كلمة)",
          "content": "محتوى HTML ضخم جداً جداً (2500+ كلمة) بتنسيق خرافي",
          "metaTitle": "SEO Title",
          "metaDescription": "SEO Description ينتهي بـ Call to Action",
          "keywords": ["أقوى 30 كلمة مفتاحية فعلية استخدمتها"]
        },
        "en": {
          "title": "Exceptional English Title with Keywords",
          "excerpt": "Powerful summary",
          "content": "Massive HTML content (2500+ words)",
          "metaTitle": "SEO Title",
          "metaDescription": "SEO Description",
          "keywords": ["30 powerful English keywords"]
        },
        "aiAnalysis": {
          "score": 99,
          "recommendations": ["نصيحة 1"]
        }
      }`;

      const userPrompt = `أريدك أن تفجر مهاراتك وتكتب أضخم وأعظم مقال ثنائي اللغة عن: "${topic}".
      
      الكلمات المفتاحية الأساسية التي يجب التركيز عليها بقوة: ${keywords.join(', ')}.
      
      تذكر:
      - اكتب كخبير حقيقي (أبو فهد) يمتلك 25 سنة خبرة.
      - المقال يجب أن يكون موسوعة كاملة (أسعار، خامات، طرق غش في السوق وكيف نتجنبها، ضمانات ديار جدة).
      - كثف المحتوى إلى أقصى حد ممكن (2500 كلمة للغة الواحدة). لا تعطيني محتوى سطحي أو عام.
      - نسق بـ HTML مبهر (جداول، قوائم، اقتباسات).`;


      const result = await callGroqWithJSON(systemPrompt, userPrompt);
      return result as any;
    } catch (error) {
      console.error('Error generating bilingual article:', error);
      throw new Error('فشل توليد المقال ثنائي اللغة');
    }
  }

  async generateOptimizedContent(
    topic: string,
    keywords: string[],
    contentType: 'article' | 'project_description' | 'service_page',
    wordCount = 800
  ): Promise<{ title: string; content: string; meta_description: string; tags: string[] }> {
    try {
      const contentTypeAr = {
        article: 'مقال',
        project_description: 'وصف مشروع',
        service_page: 'صفحة خدمة'
      };

      const prompt = `أنت لست مجرد كاتب محتوى، أنت "مدير مشاريع تنفيذي ومهندس خبير" في "ديار جدة العالمية"، تمتلك خبرة 25 عاماً في سوق المظلات، السواتر، البرجولات والساندوتش بانل في السعودية.

المطلوب: كتابة ${contentTypeAr[contentType]} أسطوري وموسوعي، يعتبر "المرجع الأول" في محركات البحث عن: ${topic}

الكلمات المفتاحية الأساسية: ${keywords.join(', ')}
الحد الأدنى للطول: ${wordCount * 2} كلمة (ضاعف المحتوى واجعله عميقاً جداً).

=== قواعد التنفيذ الصارمة (SEO & Expert Voice) ===
1. نبرة الخبير الصارم: اكتب بلغة هندسية احترافية مخلوطة بخبرة الميدان السعودي. استخدم مصطلحات مثل (قوة تحمل الرياح، سماكة التيوبات، الجلفنة الحارة، عزل مائي وحراري، قماش ضغط عالي، لكسان ضد الكسر).
2. استهداف نية المشتري بذكاء: المشتري يبحث عن (السعر، الضمان، الجودة، أفضل شركة). غطي هذه المحاور بتفصيل ممل ومقنع.
3. التكثيف المفتاحي (Keyword Density): قم بزرع الكلمات المفتاحية بذكاء وكثافة عالية (2-3%)، وضع أهم الكلمات بين وسوم <strong> لتنبيه محركات البحث لأهميتها.
4. بنية HTML أكاديمية: 
   - <h2> لعناوين الفصول الرئيسية.
   - <h3> للتفاصيل والمواد والأسعار.
   - <table> لمقارنة أنواع المواد (مثال: مقارنة بين PVC الكوري والألماني من حيث السعر والضمان).
   - <ul> و <ol> لخطوات التنفيذ ومميزات ديار جدة.
   - <blockquote> لنصيحة خبير أو تحذير من الغش التجاري في السوق.
5. الروابط الداخلية (Internal Links): يجب وضع 5 روابط على الأقل للمجالات الأخرى لتمرير الـ PageRank:
   <a href="/services/mazallat">مظلات سيارات</a>, <a href="/services/pergolas">برجولات</a>, <a href="/services/sawater">سواتر</a>, <a href="/services/sandwich-panel">ساندوتش بانل</a>, <a href="/quote">احصل على تسعيرة مجانية</a>.
6. الـ Meta Description يجب أن يكون كـ Hook إعلاني، 150 حرف، وينتهي بـ (اتصل الآن لرفع المقاسات مجاناً).

قدم النتيجة بصيغة JSON حصرية:
{
  "title": "عنوان ناري وطويل يحتوي الكلمة المفتاحية الرئيسية",
  "content": "المحتوى الموسوعي الضخم جداً بتنسيق HTML المتقدم",
  "meta_description": "الوصف الخاطف الجذاب",
  "tags": ["تگ1", "تگ2", "تگ3", "تگ4", "تگ5"]
}`;

      const result = await callGroqWithJSON(
        "أنت كاتب محتوى SEO خبير تنشئ محتوى عالي الجودة محسّن لمحركات البحث.",
        prompt
      );
      return result;
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('فشل توليد المحتوى');
    }
  }

  async analyzeCompetitor(competitorUrl: string, industry: string): Promise<CompetitorInsight> {
    try {
      const prompt = `أنت محلل SEO تنافسي محترف. حلل استراتيجية المنافس التالي:

رابط المنافس: ${competitorUrl}
المجال: ${industry}

بناءً على خبرتك في السوق، قدم تحليلاً استراتيجياً بصيغة JSON يتضمن:
- top_keywords: الكلمات المفتاحية التي من المحتمل أن يستهدفها (10-15 كلمة)
- content_strategy: وصف استراتيجية المحتوى المحتملة
- content_gaps: الفجوات في محتوى المنافس يمكن استغلالها
- backlink_opportunities: فرص الحصول على روابط خلفية
- improvement_areas: مجالات يمكن التفوق فيها

ركز على الاستراتيجيات القوية والفعالة للتفوق على المنافسين.`;

      const result = await callGroqWithJSON(
        "أنت خبير تحليل تنافسي في SEO متخصص في إيجاد الفرص الاستراتيجية.",
        prompt
      );
      return result as CompetitorInsight;
    } catch (error) {
      console.error('Error analyzing competitor:', error);
      throw new Error('فشل تحليل المنافس');
    }
  }

  async suggestInternalLinks(content: string, availablePages: { title: string; url: string; keywords: string[] }[]): Promise<{ suggestions: { anchor_text: string; target_url: string; position: string; relevance_score: number }[] }> {
    try {
      const prompt = `أنت خبير في بناء بنية الربط الداخلي. حلل المحتوى التالي واقترح روابط داخلية مناسبة:

المحتوى: ${content}

الصفحات المتاحة للربط:
${availablePages.map(p => `- ${p.title} (${p.url}): ${p.keywords.join(', ')}`).join('\n')}

قدم اقتراحات بصيغة JSON تحتوي على:
- suggestions: قائمة باقتراحات الروابط، كل اقتراح يحتوي على:
  * anchor_text: نص الرابط المقترح
  * target_url: الرابط الهدف
  * position: موقع الإدراج المقترح في المحتوى
  * relevance_score: درجة الملاءمة (1-100)

اختر 3-5 روابط داخلية ذات صلة قوية فقط. تأكد من أن نص الرابط (anchor text) طبيعي ومناسب.`;

      const result = await callGroqWithJSON(
        "أنت خبير في استراتيجيات الربط الداخلي لتحسين SEO.",
        prompt
      );
      return result;
    } catch (error) {
      console.error('Error suggesting internal links:', error);
      throw new Error('فشل اقتراح الروابط الداخلية');
    }
  }

  async generateMetaTags(content: string, keywords: string[], pageType: string): Promise<{
    title: string;
    description: string;
    og_title: string;
    og_description: string;
    twitter_title: string;
    twitter_description: string;
  }> {
    try {
      const prompt = `أنت مستشار تسويق رقمي خبير. قم بإنشاء Meta Tags احترافية تجذب النقرات وتتصدر النتائج.

نوع الصفحة: ${pageType}
المحتوى: ${content.substring(0, 700)}...
الكلمات المفتاحية: ${keywords.join(', ')}

المتطلبات الاحترافية:
1. Title: يجب أن يكون مغناطيسياً للنقرات (Click-Magnet) مع دمج الكلمة المفتاحية في البداية.
2. Description: يجب أن يتضمن ميزة تنافسية (مثلاً: ضمان 10 سنوات، توريد وتركيب سريع، خامات ألمانية).
3. نبرة فخمة وموثوقة تعكس ريادة "ديار جدة العالمية".

قدم النتيجة بصيغة JSON:
- title: عنوان الصفحة (50-60 حرف) - مثال: "مظلات سيارات بجدة | ضمان 10 سنوات وتركيب احترافي"
- description: وصف الصفحة (150-160 حرف) - يجب أن ينتهي بدعوة للعمل (CTA) مثل "اتصل الآن" أو "احصل على عرض سعر".
- og_title: عنوان جذاب لوسائل التواصل الاجتماعي.
- og_description: وصف مشوق للمشاركة.
- twitter_title: عنوان تويتر.
- twitter_description: وصف تويتر.`;

      const result = await callGroqWithJSON(
        "أنت خبير في كتابة الإعلانات (Copywriter) وSEO متخصص في زيادة نسبة النقر (CTR).",
        prompt
      );
      return result;
    } catch (error) {
      console.error('Error generating meta tags:', error);
      throw new Error('فشل توليد meta tags');
    }
  }

  /**
   * ترجمة المشروع بالكامل إلى الإنجليزية بطريقة احترافية
   */
  async translateProject(projectData: {
    title: string;
    description: string;
    category: string;
    location: string;
    tags: string[];
    materials: string[];
    client?: string;
  }): Promise<any> {
    try {
      const prompt = `You are a Senior Architectural Translator and SEO Specialist. 
      Your task is to translate this project into High-End, Professional English for the International/Expat market in Saudi Arabia.

      PROJECT DATA (ARABIC):
      - Title: ${projectData.title}
      - Description: ${projectData.description}
      - Category: ${projectData.category}
      - Location: ${projectData.location}
      - Tags: ${projectData.tags.join(', ')}
      - Materials: ${projectData.materials.join(', ')}
      - Client: ${projectData.client || 'Private Client'}

      REQUIREMENTS:
      1. Output MUST be in VALID JSON.
      2. Title: Professional, descriptive, and SEO-friendly.
      3. Description: Expand the description into a professional architectural narrative (300+ words). Describe the design, the materials used, and the benefit to the client (heat reduction, aesthetic value, durability).
      4. Keywords: Translate tags into industry-standard English construction terms.
      5. Tone: Luxury, Professional, and Authoritative.
      6. SEO: Include an English Meta Title and Meta Description.

      JSON STRUCTURE:
      {
        "enMetadata": {
          "title": "English Project Title",
          "description": "Professional English description (300+ words)",
          "metaTitle": "SEO English Title (50-60 chars)",
          "metaDescription": "SEO English Description (150-160 chars)",
          "tags": ["English Tag 1", "English Tag 2"],
          "materials": ["English Material 1", "English Material 2"],
          "location": "English Location Name",
          "client": "English Client Name"
        }
      }`;

      const result = await callGroqWithJSON(
        "You are an expert bilingual architectural consultant specializing in luxury construction projects.",
        prompt
      );
      return result;
    } catch (error) {
      console.error('Error in translateProject:', error);
      return null;
    }
  }

  async clusterKeywords(keywords: string[]): Promise<{
    clusters: {
      cluster_name: string;
      keywords: string[];
      search_intent: string;
      priority_score: number;
      content_ideas: string[];
    }[];
  }> {
    try {
      const prompt = `أنت خبير في تجميع الكلمات المفتاحية (Keyword Clustering). قم بتحليل وتجميع الكلمات التالية:

الكلمات المفتاحية: ${keywords.join(', ')}

قم بتجميعها إلى مجموعات منطقية بصيغة JSON:
- clusters: قائمة بالمجموعات، كل مجموعة تحتوي على:
  * cluster_name: اسم المجموعة
  * keywords: الكلمات المفتاحية في هذه المجموعة
  * search_intent: نية البحث للمجموعة
  * priority_score: درجة الأولوية (1-100)
  * content_ideas: 3-5 أفكار محتوى لهذه المجموعة

جمّع الكلمات المتشابهة في المعنى والنية معاً.`;

      const result = await callGroqWithJSON(
        "أنت خبير في تجميع وتنظيم الكلمات المفتاحية لإنشاء استراتيجية محتوى فعالة.",
        prompt
      );
      return result;
    } catch (error) {
      console.error('Error clustering keywords:', error);
      throw new Error('فشل تجميع الكلمات المفتاحية');
    }
  }

  async generateImageAltText(title: string, content: string, imageUrl: string): Promise<string> {
    try {
      const prompt = `أنت خبير في كتابة نصوص بديلة للصور (Alt Text) محسّنة للـ SEO.

العنوان: ${title}
المحتوى: ${content.substring(0, 300)}
رابط الصورة: ${imageUrl}

اكتب نص بديل (Alt Text) محسّن للصورة يكون:
1. وصفي ودقيق (30-100 حرف)
2. يحتوي على كلمات مفتاحية ذات صلة
3. طبيعي وسلس للقراءة
4. يفيد محركات البحث والمستخدمين ذوي الاحتياجات الخاصة

قدم فقط نص الـ Alt Text بدون أي شرح إضافي.`;

      const altText = await callGroq(
        "أنت خبير في كتابة نصوص بديلة للصور محسّنة لمحركات البحث وإمكانية الوصول.",
        prompt
      );

      return altText.trim().replace(/^["']|["']$/g, '') || `صورة ${title}`;
    } catch (error) {
      console.error('Error generating image alt text:', error);
      return `صورة ${title}`;
    }
  }
}

export const seoAgent = new SEOAgent();
