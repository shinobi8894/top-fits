'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import GradientButton from '@/components/custom/gradient-button'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
    const [ctaSrc, setCtaSrc] = useState('/assets/imgs/cta.png')
    const [rightGraphicSrc, setRightGraphicSrc] = useState('/assets/imgs/right-graphic.png')
    const [leftGraphicSrc, setLeftGraphicSrc] = useState('/assets/imgs/left-graphic.png')
    const fallbackImg = '/assets/imgs/fallback.png'

    const sectionRef = useRef(null)
    const leftContentRef = useRef(null)
    const mainImageRef = useRef(null)
    const rightGraphicRef = useRef(null)
    const leftGraphicRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftContentRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            gsap.from(mainImageRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            gsap.from(rightGraphicRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            gsap.from(leftGraphicRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-20 px-4 relative flex justify-center bg-gradient-to-r from-black to-[#11100E]"
        >
            <div className="relative z-10 flex flex-row w-full justify-between max-w-[1920px] bg-primary rounded-[45px] overflow-hidden items-end gap-20 px-5 xl:px-20">
                {/* Left content */}
                <div ref={leftContentRef} className="z-20 max-w-[550px] py-20">
                    <span className="font-sf-impact">.GG/TOPFITS</span>
                    <h2 className="font-sf-impact text-4xl font-semibold mb-3">
                        Sourcing made simple, strategic, and successful.
                    </h2>
                    <p className="font-sf-impact mb-8">
                        From product discovery to supplier connections, we streamline every step of the sourcing
                        process, ensuring your business is always stocked with winning items
                    </p>
                    <div className="flex flex-col gap-3 max-w-[370px]">
                        <GradientButton className="w-full !h-button rounded-full inner-shadow font-sf-impact font-semibold">
                            <span>Register on TopFits</span>
                            <ArrowRight className="-rotate-45" />
                        </GradientButton>
                        <Button className="border border-primary w-full border-primary bg-black rounded-full font-sf-impact cursor-pointer h-button">
                            <span>Join Discord</span>
                            <ArrowRight className="-rotate-45" />
                        </Button>
                    </div>
                </div>

                {/* Main Image */}
                <div className="pt-20 z-20 xl:block hidden" ref={mainImageRef}>
                    <Image
                        src={ctaSrc}
                        alt="cta"
                        width={870}
                        height={465}
                        onError={() => setCtaSrc(fallbackImg)}
                    />
                </div>

                {/* Decorative graphics */}
                <Image
                    ref={rightGraphicRef}
                    src={rightGraphicSrc}
                    alt="graphic"
                    width={370}
                    height={370}
                    className="absolute right-0 bottom-0"
                    onError={() => setRightGraphicSrc(fallbackImg)}
                />
                <Image
                    ref={leftGraphicRef}
                    src={leftGraphicSrc}
                    alt="graphic"
                    width={370}
                    height={370}
                    className="absolute left-0 top-0"
                    onError={() => setLeftGraphicSrc(fallbackImg)}
                />

                {/* Overlay */}
                <div className="absolute left-0 right-0 top-0 z-10 bg-black opacity-40 w-full bottom-0" />
            </div>
        </section>
    )
}
