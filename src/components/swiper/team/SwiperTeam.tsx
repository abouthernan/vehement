import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper'
import linkedinIcon from '../../../assets/img/icon-linkedin.svg'
import styles from './swiperTeam.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export interface SwiperTeamProps {
  data: Data 
}

export interface Data {
  name: string
  rol: string
  linkedin: string
  slug: string
  img?: string
}

export function SwiperTeam({ data }: SwiperTeamProps) {
  return (
    <>
      <Swiper
        direction='horizontal'
        effect='coverflow'
        grabCursor
        centeredSlides
        loop
        autoplay={{
          delay: 1700,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{
          el: '.swiper-pagination-team',
          type: 'bullets',
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
          300: {
            slidesPerView: 'auto'
          },
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          }
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className={styles.swiperTeam}
      >
        {Object.entries(data).map(([key, value]) => (
          <SwiperSlide
            key={key}
            className="slider__team"
          >
           <div className={styles.slider__contentImg}>
              <img
                loading="lazy"
                className={styles.slider__img}
                src={value.img}
                alt={`puede ser una foto de ${value.name}`}
              />
            </div>

            <div className={styles.slider__content}>
              <h3 className={styles.slider__name}>{value.name}</h3>
              <p className={styles.slider__rol}>{value.rol}</p>
              <a
                href={value.linkedin}
                className={styles.slider__social}
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={linkedinIcon}
                  alt="puede ser un icono del logo de linkedin"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}

        <div className="team-slider__controls">
          <div className="swiper-pagination-team" />
        </div>

      </Swiper>
    </>
  )
}
