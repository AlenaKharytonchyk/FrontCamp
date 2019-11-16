let lazyImageObserver;
if ('IntersectionObserver' in window) {
  lazyImageObserver = new IntersectionObserver(((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy');
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  }));
} else {
  lazyImageObserver = {
    observe: (element) => { const image = element; image.src = element.dataset.src; },
  };
}

const LazyImageService = (function () {
  return {
    initObserver: (domElements) => domElements
      && domElements.forEach((element) => lazyImageObserver.observe(element)),
  };
}());

export default LazyImageService;
