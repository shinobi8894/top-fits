'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import GradientButton from '@/components/custom/gradient-button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'

const TOTAL_SLIDES = 9

export default function AnimatedSwiper() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState(5)
    const swiperRef = useRef<any>(null)

    useEffect(() => {
        const updateVisibleSlides = () => {
            const width = window.innerWidth
            setVisibleSlides(width < 1440 ? 3 : 5)
        }

        updateVisibleSlides()
        window.addEventListener('resize', updateVisibleSlides)
        return () => window.removeEventListener('resize', updateVisibleSlides)
    }, [])

    // Determine if a slide is centered (middle of visible set)
    const isCentered = (index: number) => {
        const middle = Math.floor(visibleSlides / 2)
        const offset = (index - activeIndex + TOTAL_SLIDES) % TOTAL_SLIDES
        return offset === middle
    }

    // Determine if a slide is at edge (leftmost or rightmost)
    const isDimmed = (index: number) => {
        const offset = (index - activeIndex + TOTAL_SLIDES) % TOTAL_SLIDES
        return offset === 0 || offset === visibleSlides - 1
    }

    return (
        <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={visibleSlides}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: { slidesPerView: 3 },
                1440: { slidesPerView: 5 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onInit={(swiper) => setActiveIndex(swiper.realIndex)}
            className='mb-20'
        >
            {[...Array(TOTAL_SLIDES)].map((_, index) => {
                const dimmed = isDimmed(index)
                const centered = isCentered(index)

                return (
                    <SwiperSlide key={index}>
                        <div className={`py-10 ${centered ? 'px-3' : ''}`}>
                            <div
                                className={`bg-gradient-to-b from-[#1D1D1D] to-[#161616] rounded-[32px] p-7 transition-all duration-300 ease-in-out 
                  ${centered ? 'scale-110' : 'scale-100'}
                  ${dimmed ? 'opacity-50' : 'opacity-100'}`}
                            >
                                <div className="bg-gradient-to-b flex flex-col items-center from-[#3D3D3D] to-[#161616] rounded-[32px] p-7 inner-shadow-2">
                                    <div className='w-[180px] h-[220px] mb-5'>
                                        <Image
                                            src={`/assets/imgs/item-${index + 1}.png`}
                                            alt="item"
                                            width={200}
                                            height={270}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <h3 className="font-sf-impact font-bold mb-4">
                                        Ken Carson X Chain
                                    </h3>
                                    <GradientButton className="w-full font-sf-impact font-semibold mb-2">
                                        <span>🛒 Purchase for $1.00</span>
                                    </GradientButton>
                                    <Button
                                        className="w-full cursor-pointer bg-[#1E1E1E] h-button border border-[#323232] rounded-[12px] font-sf-impact inner-shadow-2"
                                    >
                                        <span>View details</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
