'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

export default function GoodbyeSlider() {
    const items = [
        'Fraud',
        'Shortages',
        'Unreliable vendors',
        'Unverified quality',
        'Outdated styles',
        'Confusion',
        'Overpaying',
        'Fraud',
        'Shortages',
        'Unreliable vendors',
        'Unverified quality',
        'Outdated styles',
        'Confusion',
        'Overpaying',
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const middleOffset = Math.floor(7 / 2) // for 7 slides, middle is 3

    return (
        <section className="flex relative justify-center items-center bg-black py-20">
            <div className="text-white flex items-center text-7xl font-sf-impact">
                <span className="mr-2">Say goodbye to</span>
                <div className="h-[650px] overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        direction="vertical"
                        loop
                        slidesPerView={7}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                        allowTouchMove={false}
                    >
                        {items.map((item, i) => {
                            const isMiddle =
                                (i % items.length) ===
                                ((activeIndex + middleOffset) % items.length)

                            return (
                                <SwiperSlide
                                    key={i}
                                    className="!flex !flex-row !items-center"
                                >
                                    <div
                                        className={
                                            isMiddle
                                                ? 'bg-[linear-gradient(90deg,#F0B459_0%,#FFA86E_20%,#DABA89_36%,#FF7247_50%,#FFAF80_75%,#DABA89_100%)] bg-clip-text text-transparent text-7xl w-full text-left'
                                                : 'text-neutral-500 text-7xl w-full text-left'
                                        }
                                    >
                                        {item}
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="absolute top-0 h-[400px] w-full bg-gradient-to-b from-black to-black/0 z-20" />
            <div className="absolute bottom-0 h-[400px] w-full bg-gradient-to-t from-black to-black/0 z-20" />
            <div className="absolute -right-[35%] w-[780px] bottom-0 top-0 bg-gradient-to-l from-primary to-black/0 z-20" />
            <div className="absolute -left-[35%] w-[780px] bottom-0 top-0 bg-gradient-to-r from-primary to-black/0 z-20" />
            <Image src={'/assets/imgs/goodbye.png'} alt='goodbye' width={1920} height={640} className='absolute z-30' />
        </section>
    )
}
