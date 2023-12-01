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

gsap.fromTo(
  '#about',
  { opacity: 0.1 },
  {
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'top 10%',

      // end: 'top 30%',
      scrub: 3,
      toggleActions: 'restart none none none',

      // markers: true,
    },
  }
);

gsap.fromTo(
  '#acting',
  { scale: 0.9, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 5,
    scrollTrigger: {
      trigger: '#acting',
      start: 'top 100%',
      end: 'top 70%',
      scrub: 4,
      toggleActions: 'restart complete none none',

      // markers: true,
    },
  }
);

gsap.fromTo(
  '#articles',
  { scale: 0.8 },
  {
    scale: 1,
    duration: 5,
    scrollTrigger: {
      trigger: '#articles',
      start: 'top 100%',
      end: 'top 70%',
      scrub: 4,
      toggleActions: 'restart complete none none',

      // markers: true,
    },
  }
);

gsap.fromTo(
  '#form-field',
  { x: '-10%' },
  {
    x: '0%',
    duration: 5,
    scrollTrigger: {
      trigger: '#form-field',
      start: 'top 100%',
      end: 'top 70%',
      scrub: 4,
      toggleActions: 'restart complete none none',

      // markers: true,
    },
  }
);

/* gsap.fromTo(
  '#form-field',
  { y: 50 },
  {
    y: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '#form-field',
      start: 'top 90%',
      end: 'top 50%',
      scrub: 4,
      toggleActions: 'restart complete none none',

      // markers: true,
    },
  }
); */
