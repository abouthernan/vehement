import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper'
import styles from './swiperHero.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

export interface SwiperHeroProps {
  data: Root
}

export interface Root {
  cybersecurity: Data
  design: Data
  marketing: Data
  develop: Data
  seo: Data
}

export interface Data {
  url: string
  img: string
  description: string
}

export function SwiperHero({ data }: SwiperHeroProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        allowTouchMove
        mousewheel={{
          thresholdDelta: 40
        }}
        direction='vertical'
        pagination={{
          type: 'progressbar',
          el: '.swiper-pagination',
        }}
        grabCursor
        modules={[Pagination, Mousewheel]}
        className={styles.swiperHero}
        onPaginationUpdate={e => {
          const counterBar = document.querySelector('.counter-bar-dinamic')
          if (counterBar === null) return
          counterBar.textContent = `0${e.realIndex + 1}`
          e.activeIndex == 6 ? counterBar.textContent = '01' : null
        }}
      >
        {Object.entries(data).map(([key, value]) => (
          <SwiperSlide
            key={key}
          >
            <a className={styles.swiper__content} href={value.url}>
              <img
                loading="lazy"
                className={styles.swiper__img}
                src={value.img}
                alt={`puede ser una imagen de ${key.split('_').join(' ')}`}
              />
              <article className={styles.swiper__info}>
                <h2 className={styles.swiper__title}>
                    {key.includes('_')
                      ? key.split('_').join(' ')
                      : key
                    }
                </h2>
                <p className={styles.swiper__description}>{value.description}</p>
              </article>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="swiper-pagination" />

      <div className="counter-bar-content">
        <span className="counter-bar counter-bar-dinamic">01</span>
        <span className="counter-bar">05</span>
      </div>
    </>
  )
}
