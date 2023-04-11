import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import styles from './swiperPartners.module.css'
import 'swiper/css'
import 'swiper/css/pagination'

export interface SwiperPartnersProps {
  data: Data 
}

export interface Data {
  name: string
  url: string
  img: string
  slug: string
}

export function SwiperPartners({ data }: SwiperPartnersProps) {
  return (
    <>
      <Swiper
        direction='horizontal'
        spaceBetween={4}
        loop
        pagination={{
          type: 'bullets',
          clickable: true,
          el: '.swiper-pagination-partners'
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        allowTouchMove
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        grabCursor
        modules={[Pagination, Autoplay]}
        className={styles.swiperPartners}
      >
        {Object.entries(data).map(([key, value]) => (
          <SwiperSlide
            key={key}
          >
           <a
              href={value.url}
              target="_blank"
              className={styles.partners__slide}
            >
              <img
                loading="lazy"
                className={styles.partners__img}
                src={value.img}
                width={120}
                height={120}
                alt={`puede ser una imagen del logo de ${value.name}`}
              />
            </a> 
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="swiper-pagination-partners" />
    </>
  )
}
