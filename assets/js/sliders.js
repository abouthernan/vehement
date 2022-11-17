import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
import { $ } from './helpers.js'

const paginatorHero = $('.swiper-pagination')

// slider hero
const swiperHero = new Swiper(".mySwiper-hero", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: {
    thresholdDelta: 40,
  },
  loop: true,
  allowTouchMove: true,
  spaceBetween: 15,
  pagination: {
    el: paginatorHero,
    clickable: true,
    type: "progressbar",
  },
})

// update counter

const current = $('.counter-bar-dinamic')

swiperHero.on('paginationUpdate', function (e) {

  current.textContent = `0${e.activeIndex}`
  e.activeIndex == 6 ? current.textContent = '01' : null

})

// end slider hero

// slider partners
const swiperPartners = new Swiper(".swiperPartners", {
  direction: "horizontal",
  spaceBetween: 4,
  loop: true,
  pagination: {
    el: '.swiper-pagination-partners',
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  allowTouchMove: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 2000
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2000
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
      autoplay: {
        delay: 2000
      },
    }
  }
})

// Slider team

const teamNext = $('.swiper-button-next-team')
const teamPrev = $('.swiper-button-prev-team')
const teamPaginator = $('.swiper-pagination-team')

const swiperTeam = new Swiper(".team-slider", {
  direction: "horizontal",
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1700,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: teamPaginator,
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: teamNext,
    prevEl: teamPrev
  },
    breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 'auto'
    },
    480: {
      slidesPerView: 2
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3
    }
  }
})
