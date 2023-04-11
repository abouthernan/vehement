import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper'
import styles from './swiperHero.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

import cybersecurityImg from '../../../assets/img/services/cybersecurity.webp'
import designImg from '../../../assets/img/services/design.webp'
import marketingImg from '../../../assets/img/services/marketing.webp'
import developImg from '../../../assets/img/services/develop.webp'
import seoImg from '../../../assets/img/services/seo.webp'

const swiperHero = {
  cyber_security: {
    url: './services/cybersecurity',
    img: cybersecurityImg,
    description: 'Ethical Hacking / Forensic Informatics / WPT / Hardering\n\nAppliances / BCP / DRP / Risk Management Security / SGSI /\n\nMonitoring'
  },
  design: {
    url: './services/design',
    img: designImg,
    description: 'UX / UI / Web / Branding / Brand Book / Packing'
  },
  marketing: {
    url: './services/marketing',
    img: marketingImg,
    description: 'Digital Strategy / Content / Social Media / Paid Social\n\nCampaigns / SEM / Email & SMS / Whatsapp'
  },
  develop: {
    url: './services/develop',
    img: developImg,
    description: 'Web / E-commerce / Apps'
  },
  seo: {
    url: './services/seo',
    img: seoImg,
    description: 'Optimization / Keyword Research'
  }
}

export function SwiperHero() {
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
        {Object.entries(swiperHero).map(([key, value]) => (
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
