import { type NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { generateArabicSlug } from '@/lib/arabic-slug';
import { randomUUID } from 'crypto';
import { normalizeCategoryName } from '@/lib/categoryNormalizer';
import { checkAdminAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const admin = await checkAdminAuth();
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'غير مصرح - يرجى تسجيل الدخول' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    // التحقق من صحة البيانات
    const requiredFields = ['title', 'description', 'category', 'location'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, message: `حقل ${field} مطلوب` },
          { status: 400 }
        );
      }
    }

    // التحقق من صحة الفئة وتحويلها تلقائياً
    const categoryValidation = normalizeCategoryName(data.category);
    if (!categoryValidation.isValid || !categoryValidation.normalizedCategory) {
      return NextResponse.json(
        { 
          success: false, 
          message: `الفئة "${data.category}" غير صالحة. الرجاء اختيار فئة من القائمة المتاحة.` 
        },
        { status: 400 }
      );
    }

    const normalizedCategory = categoryValidation.normalizedCategory;
    
    if (categoryValidation.wasTransformed) {
      console.log(`✅ تم تحويل الفئة: "${data.category}" → "${normalizedCategory}"`);
    }

    // إنشاء slug فريد للمشروع باستخدام الأحرف العربية
    const baseSlug = generateArabicSlug(data.title, normalizedCategory);
    let slug = baseSlug;
    let counter = 1;
    
    while (await prisma.projects.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // 🚀 مصنع المحتوى التلقائي للمشاريع (Project Auto-Factory)
    let arabicContent = data.description;
    let arabicMetaDesc = data.metaDescription;
    let arabicKeywords = data.keywords;
    let englishTranslation = null;
    let generatedFaqs: any[] = [];
    let mediaAltTexts: string[] = [];

    // إذا كان الوصف قصير جداً (أقل من 200 حرف) أو تم طلب التوليد التلقائي
    if (data.description.length < 200 || data.autoGenerate) {
      console.log('🚀 بدء مصنع المحتوى التلقائي للمشروع...');
      try {
        const GROQ_API_KEY = process.env.GROQ_API_KEY;
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: `أنت "أبو فهد"، مهندس سعودي خبير ومستشار SEO في "ديار جدة العالمية".
مهمتك توليد دراسة حالة (Case Study) شاملة لمشروع بناءً على بيانات أولية بسيطة.
القواعد الصارمة:
1. المخرجات يجب أن تكون JSON فقط.
2. 'description': مقال عربي شامل (500+ كلمة) بصيغة HTML (<h2>, <h3>, <ul>, <li>, <strong>, <a>). استخدم روابط داخلية طبيعية لخدماتنا (مثال: <a href="/services/mazallat">مظلات</a>، <a href="/portfolio">معرض أعمالنا</a>). تحدث بأسلوب خبير يوضح الخامات (PVC، حديد مجلفن، لكسان) والتحديات التي تم حلها.
3. 'descriptionEn': ترجمة إنجليزية احترافية وشاملة (500+ كلمة HTML).
4. 'faqs': قم بإنشاء 3 أسئلة شائعة مخصصة لهذا المشروع بالتحديد (عربي وإنجليزي).
5. 'altTexts': مصفوفة نصوص بديلة (Alt Text) مفصلة باللغة العربية للصور المرفقة، محسنة للـ SEO (كل نص 5-10 كلمات يصف الصورة ويحتوي الكلمة المفتاحية).
6. 'metaDescription': وصف عربي للبحث (150 حرف). و 'metaDescriptionEn' للإنجليزي.
7. 'keywords' و 'keywordsEn': كلمات مفتاحية (مفصولة بفاصلة).

صيغة JSON المطلوبة:
{
  "title": "عنوان SEO عربي جذاب",
  "titleEn": "English SEO Title",
  "description": "محتوى HTML عربي",
  "descriptionEn": "English HTML content",
  "metaDescription": "الوصف العربي",
  "metaDescriptionEn": "English description",
  "keywords": "كلمات، عربية، مفتاحية",
  "keywordsEn": "english, keywords",
  "altTexts": ["نص بديل للصورة 1", "نص بديل للصورة 2"],
  "faqs": [
    { "question": "سؤال عربي 1", "answer": "جواب عربي 1", "questionEn": "English Q1", "answerEn": "English A1" }
  ]
}`
              },
              {
                role: 'user',
                content: `اسم المشروع: ${data.title}\nوصف مبدئي: ${data.description}\nالخدمة: ${normalizedCategory}\nالموقع: ${data.location}\nعدد الصور/الفيديوهات: ${data.mediaItems?.length || 0}`
              }
            ],
            temperature: 0.7,
            response_format: { type: "json_object" }
          })
        });

        if (response.ok) {
          const aiData = await response.json();
          const contentData = JSON.parse(aiData.choices[0].message.content);
          
          arabicContent = contentData.description || data.description;
          arabicMetaDesc = contentData.metaDescription || data.metaDescription;
          arabicKeywords = contentData.keywords || data.keywords;
          
          englishTranslation = {
            title: contentData.titleEn || data.title,
            description: contentData.descriptionEn || '',
            metaTitle: contentData.titleEn || '',
            metaDescription: contentData.metaDescriptionEn || '',
            keywords: contentData.keywordsEn || ''
          };
          
          generatedFaqs = contentData.faqs || [];
          mediaAltTexts = contentData.altTexts || [];
          
          data.title = contentData.title || data.title;
          
          console.log('✅ تم توليد محتوى المشروع بالكامل (نصوص، SEO، صور، أسئلة شائعة)');
        }
      } catch (e) {
        console.error('⚠️ فشل في مصنع المحتوى الشامل للمشروع:', e);
      }
    } else {
      // الترجمة التقليدية إذا كان الوصف طويلاً بالفعل
      try {
        const { translateProjectToEnglish } = await import('@/lib/ai-translator');
        englishTranslation = await translateProjectToEnglish({
          title: data.title,
          description: data.description,
          category: normalizedCategory,
          location: data.location,
          tags: data.tags || [],
          materials: data.materials || []
        }, data.mediaItems?.filter((m: any) => m.type === 'IMAGE').length || 0,
           data.mediaItems?.filter((m: any) => m.type === 'VIDEO').length || 0);
      } catch (e) {
        console.error('⚠️ فشل في ترجمة المشروع:', e);
      }
    }

    // إنشاء المشروع
    const project = await prisma.projects.create({
      data: {
        id: randomUUID(),
        title: data.title,
        description: arabicContent,
        category: normalizedCategory,
        location: data.location,
        completionDate: data.completionDate ? new Date(data.completionDate) : new Date(),
        client: data.client || null,
        featured: data.featured || false,
        projectDuration: data.projectDuration || null,
        projectCost: data.projectCost || null,
        slug: slug,
        metaTitle: data.metaTitle || `${data.title} في ${data.location} | ديار جدة العالمية`,
        metaDescription: arabicMetaDesc || `${arabicContent.substring(0, 150)}...`,
        keywords: arabicKeywords || `${data.category}, ${data.location}, جدة, ديار جدة العالمية`,
        status: 'PUBLISHED',
        publishedAt: new Date(),
        updatedAt: new Date(),
        aiAnalysis: englishTranslation ? JSON.stringify({ englishVersion: englishTranslation }) : null,
        suggestedKeywords: englishTranslation ? JSON.stringify(englishTranslation) : null
      },
      include: {
        media_items: true,
        project_tags: true,
        project_materials: true
      }
    });

    // إضافة الوسائط إذا كانت متوفرة مع Alt Text الذكي
    if (data.mediaItems && data.mediaItems.length > 0) {
      await prisma.media_items.createMany({
        data: data.mediaItems.map((item: any, index: number) => ({
          id: randomUUID(),
          projectId: project.id,
          type: item.type || 'IMAGE',
          src: item.src,
          title: item.title || project.title,
          description: item.description || project.description,
          order: index,
          alt: item.alt || mediaAltTexts[index] || `${project.title} - صورة ${index + 1}`,
          createdAt: new Date()
        }))
      });
    }

    // حفظ الأسئلة الشائعة المرتبطة بالمشروع
    if (generatedFaqs.length > 0) {
      try {
        await Promise.all(generatedFaqs.map(async (faq: any, index: number) => {
          await prisma.faqs.create({
            data: {
              question: faq.question,
              answer: faq.answer,
              questionEn: faq.questionEn || faq.question,
              answerEn: faq.answerEn || faq.answer,
              category: normalizedCategory,
              slug: `faq-project-${slug}-${index}-${Date.now().toString().slice(-4)}`,
              status: 'PUBLISHED'
            }
          });
        }));
        console.log(`✅ تم حفظ ${generatedFaqs.length} أسئلة شائعة مرتبطة بالمشروع`);
      } catch (e) {
        console.error('⚠️ خطأ في حفظ أسئلة المشروع الشائعة:', e);
      }
    }

    // إضافة العلامات إذا كانت متوفرة
    if (data.tags && data.tags.length > 0) {
      await prisma.project_tags.createMany({
        data: data.tags.map((tag: string) => ({
          id: randomUUID(),
          projectId: project.id,
          name: tag,
          createdAt: new Date()
        }))
      });
    }

    // إضافة المواد إذا كانت متوفرة
    if (data.materials && data.materials.length > 0) {
      await prisma.project_materials.createMany({
        data: data.materials.map((material: string) => ({
          id: randomUUID(),
          projectId: project.id,
          name: material,
          createdAt: new Date()
        }))
      });
    }

    // جلب المشروع مع جميع البيانات المحدثة
    const fullProject = await prisma.projects.findUnique({
      where: { id: project.id },
      include: {
        media_items: {
          orderBy: { order: 'asc' }
        },
        project_tags: true,
        project_materials: true
      }
    });

    // تحديث الـ cache للصفحات الديناميكية
    try {
      revalidatePath('/portfolio');
      revalidatePath(`/portfolio/${slug}`);
      console.log('✅ تم تحديث cache الصفحات');
    } catch (cacheError) {
      console.error('⚠️ خطأ في تحديث الـ cache:', cacheError);
    }

    // تحديث خريطة الموقع تلقائياً
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'}/api/sitemap/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (sitemapError) {
      console.error('خطأ في تحديث خريطة الموقع:', sitemapError);
    }

    // إشعار محركات البحث بالتحديث
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'}/api/webhook/content-updated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-signature': `sha256=${process.env.WEBHOOK_SECRET || 'default-webhook-secret'}`
        },
        body: JSON.stringify({
          type: 'project',
          action: 'created',
          id: project.id,
          url: `/portfolio/${project.id}`,
          timestamp: new Date().toISOString()
        })
      });
    } catch (notificationError) {
      console.error('خطأ في إشعار محركات البحث:', notificationError);
    }

    // ✅ إرسال البيانات إلى n8n لنشرها في وسائل التواصل الاجتماعي
    if (process.env.N8N_WEBHOOK_URL) {
      try {
        const n8nData = {
          title: project.title,
          description: project.description,
          category: project.category,
          location: project.location,
          projectLink: `https://deyarsu.com/portfolio/${project.slug}`,
          media: fullProject?.media_items?.map(item => ({
            url: item.src
          })) || [],
          // ✅ إضافة بيانات إضافية للتأكد من وصول كل شيء
          client: project.client,
          completionDate: project.completionDate,
          tags: fullProject?.project_tags?.map(t => t.name) || [],
          materials: fullProject?.project_materials?.map(m => m.name) || []
        };

        fetch(process.env.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(n8nData)
        }).catch(err => console.error('❌ خطأ في إرسال البيانات إلى n8n:', err));
        
        console.log('🚀 تم إرسال بيانات المشروع إلى n8n للنش الاجتماعي (الرابط الجديد)');
      } catch (n8nError) {
        console.error('⚠️ خطأ في تجهيز بيانات n8n:', n8nError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'تم إنشاء المشروع بنجاح',
      project: {
        id: project.id,
        slug: slug,
        title: project.title,
        url: `/portfolio/${slug}`,
        mediaItems: fullProject?.media_items || [],
        tags: fullProject?.project_tags || [],
        materials: fullProject?.project_materials || []
      }
    });

  } catch (error) {
    console.error('خطأ في إنشاء المشروع:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في إنشاء المشروع' },
      { status: 500 }
    );
  }
}
