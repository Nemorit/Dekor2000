import { useEffect } from 'react';
import AppRouter from './AppRouter';
import { useAnalytics, useScrollTracking, useClickTracking } from './hooks/useAnalytics';
import './App.css';

function App() {
  const { trackEvent } = useAnalytics();
  
  // Initialize tracking hooks
  useScrollTracking();
  useClickTracking();

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Track scroll milestones
    const handleScrollMilestone = (event: CustomEvent) => {
      trackEvent('scroll_milestone', { percent: event.detail.percent });
    };

    // Track button clicks
    const handleButtonClick = (event: CustomEvent) => {
      trackEvent('button_click', event.detail);
    };

    // Track link clicks
    const handleLinkClick = (event: CustomEvent) => {
      trackEvent('link_click', event.detail);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll-milestone', handleScrollMilestone as EventListener);
    window.addEventListener('button-click', handleButtonClick as EventListener);
    window.addEventListener('link-click', handleLinkClick as EventListener);
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll-milestone', handleScrollMilestone as EventListener);
      window.removeEventListener('button-click', handleButtonClick as EventListener);
      window.removeEventListener('link-click', handleLinkClick as EventListener);
    };
  }, [trackEvent]);

  return <AppRouter />;
}

export default App;
