'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { useParams } from 'next/navigation';

interface ContentVersion {
  projectsCount: number;
  articlesCount: number;
  faqsCount: number;
  lastChecked: number;
}

const STORAGE_KEY = 'aldeyar_content_version';
const CHECK_INTERVAL = 60000; // Check every minute

export default function NewContentNotification() {
  const params = useParams();
  const locale = params?.locale as string || 'ar';
  const isEn = locale === 'en';

  const [showNotification, setShowNotification] = useState(false);
  const [latestVersion, setLatestVersion] = useState<ContentVersion | null>(null);
  const isCheckingRef = useRef(false);
  const isMountedRef = useRef(true);

  const t = {
    title: isEn ? 'New Content Available!' : 'محتوى جديد متوفر!',
    description: isEn 
      ? 'New projects or articles have been added. Refresh the page to get the latest content.' 
      : 'تمت إضافة مشاريع أو مقالات جديدة. قم بتحديث الصفحة للحصول على آخر المحتويات.',
    refreshBtn: isEn ? 'Refresh Now' : 'تحديث الآن',
    laterBtn: isEn ? 'Later' : 'لاحقاً'
  };

  const getStoredVersion = useCallback((): ContentVersion | null => {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, []);

  const saveVersion = useCallback((version: ContentVersion) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(version));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const checkForUpdates = useCallback(async () => {
    if (isCheckingRef.current) return;
    isCheckingRef.current = true;

    try {
      const response = await fetch('/api/content-version', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (!response.ok) {
        isCheckingRef.current = false;
        return;
      }

      const currentVersion = await response.json();
      
      if (!isMountedRef.current) {
        isCheckingRef.current = false;
        return;
      }

      const storedVersion = getStoredVersion();

      if (!storedVersion) {
        saveVersion({
          ...currentVersion,
          lastChecked: Date.now()
        });
        isCheckingRef.current = false;
        return;
      }

      const hasNewContent = 
        currentVersion.projectsCount > (storedVersion.projectsCount || 0) ||
        currentVersion.articlesCount > (storedVersion.articlesCount || 0) ||
        currentVersion.faqsCount > (storedVersion.faqsCount || 0);

      const hasLessContent = 
        currentVersion.projectsCount < (storedVersion.projectsCount || 0) ||
        currentVersion.articlesCount < (storedVersion.articlesCount || 0) ||
        currentVersion.faqsCount < (storedVersion.faqsCount || 0);

      if (hasNewContent && isMountedRef.current) {
        setLatestVersion(currentVersion);
        setShowNotification(true);
      } else if (hasLessContent && isMountedRef.current) {
        // إذا تم حذف محتوى، نقوم بتحديث النسخة المحفوظة بصمت حتى تعمل التنبيهات مستقبلاً
        saveVersion({
          ...currentVersion,
          lastChecked: Date.now()
        });
      }

    } catch (error) {
      console.error('Error checking for updates:', error);
    } finally {
      isCheckingRef.current = false;
    }
  }, [getStoredVersion, saveVersion]);

  const handleRefresh = useCallback(() => {
    if (latestVersion) {
      saveVersion({
        ...latestVersion,
        lastChecked: Date.now()
      });
    }
    setShowNotification(false);
    window.location.reload();
  }, [latestVersion, saveVersion]);

  const handleDismiss = useCallback(() => {
    if (latestVersion) {
      saveVersion({
        ...latestVersion,
        lastChecked: Date.now()
      });
    }
    setShowNotification(false);
  }, [latestVersion, saveVersion]);

  useEffect(() => {
    isMountedRef.current = true;

    // Initial check after 3 seconds
    const timer = setTimeout(() => {
      checkForUpdates();
    }, 3000);

    // Periodic check every minute
    const interval = setInterval(() => {
      checkForUpdates();
    }, CHECK_INTERVAL);

    // Check when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkForUpdates();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timer);
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkForUpdates]);

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-2xl p-4 border border-white/20">
        <div className={`flex items-start gap-3 ${isEn ? 'text-left flex-row' : 'text-right'}`}>
          <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm mb-1">{t.title}</h4>
            <p className="text-xs text-white/90 leading-relaxed">
              {t.description}
            </p>
            <div className={`flex gap-2 mt-3 ${isEn ? 'flex-row' : ''}`}>
              <button
                onClick={handleRefresh}
                className="flex items-center gap-1.5 bg-white text-primary px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-white/90 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {t.refreshBtn}
              </button>
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white text-xs px-2 py-1.5 transition-colors"
              >
                {t.laterBtn}
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
