'use strict';

const mainEl = document.querySelector('main');

gsap.registerPlugin(ScrollTrigger);

gsap.to('#second-nav', {
  duration: 4,
  scrollTrigger: {
    trigger: 'main',
    start: 'top 47',
    end: () => `+=${mainEl.offsetHeight}`,

    scrub: 2,
    pin: '#second-nav',
    pinSpacing: false,

    // markers: true,
  },
});
