import { $, $$ } from './helpers.js'

const burger = $('.burger')
const nav = $('.nav')
const logo = $('.logo')
const doc = $('html')
const counterSection = $('.counter')
const numCounter = $$('.counter__number')
const navItems = $$('.nav__url')

// declare functions

const openBurger = () => {
  burger.classList.toggle('open-burger')
  nav.classList.toggle('open-menu')
  logo.src = nav.classList.contains('open-menu') ? 'assets/img/logo-black.webp' : 'assets/img/logo-white.webp'
  doc.classList.toggle('scroll-off')
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.toggle('open-burger')
    nav.classList.toggle('open-menu')
    logo.src = nav.classList.contains('open-menu') ? 'assets/img/logo-black.webp' : 'assets/img/logo-white.webp'
    doc.classList.toggle('scroll-off')
  })
})

// Counter
const counterListener = (tickets) => {
  tickets.forEach( ticket => {
    if (ticket.isIntersecting) animCounter()
  })
}

const observer = new IntersectionObserver(counterListener, {
  root: null,
  rootMargin: '10px',
  threshold: 0.7
})

const animCounter = () => {
  const interval = 3500
  numCounter.forEach(item => {
    let startValue = 0
    let endValue = Number(item.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(() => {
      startValue += 1
      item.textContent = startValue
      if (startValue == endValue) clearInterval(counter)
      if (startValue == endValue) observer.disconnect()
    }, duration)

  })
}

// watch events

burger.addEventListener('click', openBurger)
observer.observe(counterSection)
