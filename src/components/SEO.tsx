import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Dekor 2000 - Premium Mermer İşçiliği ve Spa Tesisleri | İzmit Kocaeli',
  description = 'İzmit\'in lider mermer ve spa uzmanı Dekor 2000. 20+ yıllık deneyim, premium kalite. Mermer işçiliği, spa merkezleri, hamam sauna yapımı, havuz projeleri.',
  keywords = 'İzmit mermer, Kocaeli spa yapımı, hamam sauna inşaat, mermer işçiliği, spa merkezleri, havuz yapımı, lüks villa mermer',
  image = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop',
  url = 'https://www.dekor2000.com.tr'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
