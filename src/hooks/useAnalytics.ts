import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface AnalyticsData {
  sessionId: string;
  userId: string;
  pageViews: number;
  timeOnSite: number;
  bounceRate: number;
  conversionEvents: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    // Measure page load time
    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, pageLoadTime }));
      }
    };

    // Measure Core Web Vitals
    const measureCoreWebVitals = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, firstInputDelay: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    };

    if (typeof window !== 'undefined' && 'performance' in window) {
      measurePageLoad();
      measureCoreWebVitals();
    }
  }, []);

  return metrics;
};

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<Partial<AnalyticsData>>({
    sessionId: '',
    userId: '',
    pageViews: 0,
    timeOnSite: 0,
    bounceRate: 0,
    conversionEvents: 0
  });

  useEffect(() => {
    // Generate session ID
    const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    // Get or create user ID
    let userId = localStorage.getItem('dekor2000_user_id');
    if (!userId) {
      userId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      localStorage.setItem('dekor2000_user_id', userId);
    }

    // Track page view
    const pageViews = parseInt(sessionStorage.getItem('page_views') || '0') + 1;
    sessionStorage.setItem('page_views', pageViews.toString());

    // Track time on site
    const startTime = Date.now();
    
    const updateAnalytics = () => {
      const timeOnSite = Math.floor((Date.now() - startTime) / 1000);
      setAnalytics({
        sessionId,
        userId,
        pageViews,
        timeOnSite,
        bounceRate: pageViews === 1 ? 100 : 0,
        conversionEvents: parseInt(localStorage.getItem('conversion_events') || '0')
      });
    };

    const interval = setInterval(updateAnalytics, 10000); // Update every 10 seconds
    updateAnalytics(); // Initial update

    return () => clearInterval(interval);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    const event = {
      name: eventName,
      properties: properties || {},
      timestamp: new Date().toISOString(),
      sessionId: analytics.sessionId,
      userId: analytics.userId
    };

    // Store event in localStorage
    const events = JSON.parse(localStorage.getItem('dekor2000_events') || '[]');
    events.push(event);
    localStorage.setItem('dekor2000_events', JSON.stringify(events));

    // Track conversion events
    if (eventName === 'quote_requested' || eventName === 'contact_submitted') {
      const conversionEvents = (analytics.conversionEvents || 0) + 1;
      localStorage.setItem('conversion_events', conversionEvents.toString());
      setAnalytics(prev => ({ ...prev, conversionEvents }));
    }

    console.log('Event tracked:', event);
  };

  const getEvents = () => {
    return JSON.parse(localStorage.getItem('dekor2000_events') || '[]');
  };

  return { analytics, trackEvent, getEvents };
};

export const useScrollTracking = () => {
  useEffect(() => {
    let maxScroll = 0;
    
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scrolls
        if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
          const event = new CustomEvent('scroll-milestone', {
            detail: { percent: maxScroll }
          });
          window.dispatchEvent(event);
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);
};

export const useClickTracking = () => {
  useEffect(() => {
    const trackClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        const buttonText = button?.textContent?.trim();
        
        const clickEvent = new CustomEvent('button-click', {
          detail: { 
            text: buttonText,
            element: button?.className,
            timestamp: new Date().toISOString()
          }
        });
        window.dispatchEvent(clickEvent);
      }

      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        const href = (link as HTMLAnchorElement)?.href;
        
        const linkEvent = new CustomEvent('link-click', {
          detail: { 
            href,
            text: link?.textContent?.trim(),
            timestamp: new Date().toISOString()
          }
        });
        window.dispatchEvent(linkEvent);
      }
    };

    document.addEventListener('click', trackClicks);
    return () => document.removeEventListener('click', trackClicks);
  }, []);
};
