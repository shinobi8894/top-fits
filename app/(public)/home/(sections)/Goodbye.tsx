'use client'

import { useState, useEffect } from 'react'
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
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024)
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const slidesPerView = 7
    const middleOffset = Math.floor(slidesPerView / 2)

    return (
        <section className="flex relative justify-center items-center bg-black py-20 px-4">
            <div className="text-white flex lg:items-center items-start font-sf-impact flex-col lg:flex-row">
                <h3 className="mr-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Say goodbye to
                </h3>
                <div className="h-[650px] overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        direction="vertical"
                        loop
                        slidesPerView={slidesPerView}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                        allowTouchMove={false}
                    >
                        {items.map((item, i) => {
                            const targetIndex = isDesktop
                                ? (activeIndex + middleOffset) % items.length // desktop: middle
                                : activeIndex % items.length // mobile: first

                            const isHighlighted = (i % items.length) === targetIndex

                            return (
                                <SwiperSlide
                                    key={i}
                                    className="!flex !flex-row !items-center"
                                >
                                    <div
                                        className={`w-full text-left 
                                            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                                            ${isHighlighted
                                                ? 'bg-[linear-gradient(90deg,#F0B459_0%,#FFA86E_20%,#DABA89_36%,#FF7247_50%,#FFAF80_75%,#DABA89_100%)] bg-clip-text text-transparent'
                                                : 'text-neutral-500'
                                            }`}
                                    >
                                        {item}
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

            {/* Top fade */}
            <div className="absolute top-0 sm:block hidden h-[400px] w-full bg-gradient-to-b from-black to-black/0 z-20" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 h-[400px] w-full bg-gradient-to-t from-black to-black/0 z-20" />
            {/* Right fade */}
            <div className="absolute -right-[600px] w-[780px] bottom-0 top-0 bg-gradient-to-l from-primary to-black/0 z-20" />
            {/* Left fade */}
            <div className="absolute -left-[600px] w-[780px] bottom-0 top-0 bg-gradient-to-r from-primary to-black/0 z-20" />

            {/* Background Image */}
            <Image
                src={'/assets/imgs/goodbye.png'}
                alt="goodbye"
                width={1920}
                height={640}
                className="absolute z-30"
            />
        </section>
    )
}
