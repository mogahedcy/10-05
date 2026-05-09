'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// Removed Shadcn Select import
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function HomeQuoteForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // محاكاة إرسال البيانات (يمكن ربطه بـ API لاحقاً)
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Right Side: Information */}
          <div className="lg:w-5/12 bg-primary p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/90 opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {isRTL ? 'احصل على تسعيرة فورية' : 'Get an Instant Quote'}
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  {isRTL 
                    ? 'خبراؤنا جاهزون لتقديم أفضل الحلول بأسعار تنافسية. املأ النموذج وسيتواصل معك المهندس المختص خلال 30 دقيقة.' 
                    : 'Our experts are ready to provide the best solutions at competitive prices. Fill out the form and an engineer will contact you within 30 minutes.'}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{isRTL ? 'استشارة مجانية بالكامل' : 'Completely Free Consultation'}</h4>
                      <p className="text-white/70 text-sm mt-1">{isRTL ? 'لا توجد أي رسوم مخفية' : 'No hidden fees at all'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{isRTL ? 'زيارة ورفع المقاسات مجاناً' : 'Free Visit & Measurements'}</h4>
                      <p className="text-white/70 text-sm mt-1">{isRTL ? 'نصلك في جميع أحياء جدة' : 'We reach all Jeddah districts'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Form */}
          <div className="lg:w-7/12 p-10 lg:p-14 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('fullName')}</label>
                  <Input 
                    required 
                    placeholder={t('fullNamePlaceholder')} 
                    className="bg-gray-50 border-gray-200 h-12 focus:ring-accent" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('phone')}</label>
                  <Input 
                    required 
                    type="tel" 
                    placeholder={t('phonePlaceholder')} 
                    className="bg-gray-50 border-gray-200 h-12 text-left focus:ring-accent" dir="ltr" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('serviceType')}</label>
                  <select 
                    required 
                    className="flex h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>{t('selectService')}</option>
                    {Object.keys(t.raw('serviceOptions')).map((key) => (
                      <option key={key} value={key}>
                        {t(`serviceOptions.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">{t('addressArea')}</label>
                  <Input 
                    required 
                    placeholder={t('addressPlaceholder')} 
                    className="bg-gray-50 border-gray-200 h-12 focus:ring-accent" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('projectDetails')}</label>
                <Textarea 
                  required 
                  placeholder={t('projectDetailsPlaceholder')} 
                  className="bg-gray-50 border-gray-200 min-h-[120px] resize-none focus:ring-accent" 
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="font-semibold">{t('success')}</p>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                disabled={status === 'loading'}
                className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 text-accent-foreground"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {t('send')} <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
