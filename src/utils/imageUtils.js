// Image optimization and lazy loading utilities

// Lazy loading for images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Responsive image loading
export const loadResponsiveImage = (imageElement, srcSet) => {
  if (!imageElement || !srcSet) return;

  const mediaQueries = [
    { width: 480, suffix: '-mobile' },
    { width: 768, suffix: '-tablet' },
    { width: 1024, suffix: '-desktop' },
    { width: 1200, suffix: '-large' }
  ];

  const currentWidth = window.innerWidth;
  let selectedSrc = srcSet.default || srcSet.desktop;

  for (const query of mediaQueries) {
    if (currentWidth <= query.width) {
      selectedSrc = srcSet[query.suffix] || selectedSrc;
      break;
    }
  }

  imageElement.src = selectedSrc;
};

// Image optimization with WebP support
export const optimizeImage = (src, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For now, return the original src
  // In a real implementation, you might use a CDN or image optimization service
  return src;
};

// Preload critical images
export const preloadCriticalImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Generate responsive image srcset
export const generateSrcSet = (baseSrc, sizes = [480, 768, 1024, 1200]) => {
  return sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');
};

// Check if WebP is supported
export const isWebPSupported = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Get optimal image format
export const getOptimalFormat = () => {
  return isWebPSupported() ? 'webp' : 'jpeg';
};

// Image error handling
export const handleImageError = (img, fallbackSrc) => {
  img.onerror = () => {
    if (fallbackSrc && img.src !== fallbackSrc) {
      img.src = fallbackSrc;
    } else {
      img.style.display = 'none';
    }
  };
};

// Initialize image optimizations
export const initImageOptimizations = () => {
  // Add loading="lazy" to all images
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.classList.contains('critical')) {
      img.loading = 'lazy';
    }
  });

  // Initialize lazy loading
  lazyLoadImages();

  // Add error handling
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    handleImageError(img, '/images/placeholder.jpg');
  });
};

// Debounce function for resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Update images on window resize
export const handleResize = debounce(() => {
  const responsiveImages = document.querySelectorAll('[data-responsive]');
  responsiveImages.forEach(img => {
    const srcSet = JSON.parse(img.dataset.responsive);
    loadResponsiveImage(img, srcSet);
  });
}, 250);

// Initialize responsive image handling
export const initResponsiveImages = () => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call
}; 