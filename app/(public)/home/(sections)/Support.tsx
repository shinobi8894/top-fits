'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import GradientButton from '@/components/custom/gradient-button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SupportSection() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const gradientRef = useRef<HTMLSpanElement>(null)
    const svgPathRef = useRef<SVGPathElement>(null)
    const descRef = useRef<HTMLParagraphElement>(null)
    const btnGroupRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
            }
        })

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        ).fromTo(
            gradientRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.4'
        ).fromTo(
            svgPathRef.current,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 1, ease: 'power2.out' },
            '-=0.5'
        ).fromTo(
            descRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.3'
        ).fromTo(
            btnGroupRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.3'
        ).fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
            '-=0.6'
        )
    }, [])

    return (
        <section className="w-full py-20 bg-gradient-to-b from-[#0C0C0C] to-[#010101] flex justify-center px-4 mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between max-w-[1920px] gap-10 w-full">
                {/* Left Content */}
                <div className="flex flex-col max-w-[670px] w-full relative">
                    <h1
                        ref={titleRef}
                        className="uppercase text-white font-oswald text-5xl text-[clamp(1.75rem,4vw,3.75rem)] /* 28px → 60px */
          leading-[1.2] font-bold mb-8"
                    >
                        Customer support, <br /> right when{' '}
                        <span
                            ref={gradientRef}
                            className="relative text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] inline-block"
                        >
                            you need it.
                            <span className="absolute -bottom-6 left-0 w-full">
                                <svg
                                    ref={svgPathRef?.current ? undefined : undefined} // keep your ref usage unchanged
                                    viewBox="0 0 312 28"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    <path
                                        ref={svgPathRef}
                                        d="M2.91577 3C3.12838 3 3.341 3 53.7868 3.07891C104.233 3.15783 204.905 3.31565 256.979 3.47587C309.053 3.63609 309.479 3.79391 308.794 4.11196C308.109 4.43 306.302 4.90348 273.958 7.90935C241.613 10.9152 178.786 16.4391 146.739 19.5215C114.692 22.6039 115.33 23.0774 140.96 23.558C166.589 24.0387 217.191 24.5122 269.327 25"
                                        stroke="#F2B65B"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>

                        </span>
                    </h1>

                    <p ref={descRef} className="text-gray mb-8 text-[clamp(1rem,2vw,1.5rem)] /* 16px → 24px */">
                        We provide dedicated customer support exactly when you need it most, ensuring every query, question, or concern is addressed promptly and thoroughly. Our team is committed to delivering clear, helpful solutions, so you’re never left waiting.
                    </p>

                    {/* Buttons */}
                    <div ref={btnGroupRef} className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
                        <Button className="!h-[60px] cursor-pointer flex-1 w-full sm:w-auto text-primary hover:!text-white bg-transparent border border-primary rounded-full font-sf-impact">
                            <span className="text-white font-semibold">View FAQ</span>
                            <ArrowRight />
                        </Button>
                        <GradientButton className="cursor-pointer w-full flex-1 sm:w-auto !h-[60px] rounded-full inner-shadow font-sf-impact font-semibold">
                            <span>Join on the Discord</span>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.05809 1.17179C4.14961 0.6611 5.31671 0.28995 6.53688 0.0786133C6.68673 0.349539 6.8618 0.71394 6.9825 1.00382C8.27958 0.808756 9.56472 0.808756 10.8379 1.00382C10.9586 0.71394 11.1377 0.349539 11.2889 0.0786133C12.5104 0.28995 13.6788 0.662464 14.7703 1.1745C16.9719 4.5014 17.5687 7.74567 17.2703 10.9439C15.8101 12.0343 14.395 12.6967 13.0037 13.1302C12.6602 12.6574 12.3539 12.1549 12.0899 11.6252C12.5926 11.4342 13.074 11.1985 13.5289 10.9249C13.4082 10.8355 13.2902 10.742 13.1761 10.6459C10.4016 11.9436 7.38701 11.9436 4.64562 10.6459C4.53023 10.742 4.41221 10.8355 4.29285 10.9249C4.74908 11.1999 5.23183 11.4356 5.73448 11.6266C5.47056 12.1549 5.16551 12.6588 4.82069 13.1315C3.42811 12.6981 2.01167 12.0357 0.551456 10.9439C0.201317 7.23634 1.14959 4.02186 3.05809 1.17179ZM11.712 8.977C12.5448 8.977 13.2279 8.19945 13.2279 7.25259C13.2279 6.30572 12.5594 5.52683 11.712 5.52683C10.8645 5.52683 10.1814 6.30436 10.196 7.25259C10.1947 8.19945 10.8645 8.977 11.712 8.977ZM6.10981 8.977C6.9427 8.977 7.62574 8.19945 7.62574 7.25259C7.62574 6.30572 6.95731 5.52683 6.10981 5.52683C5.26234 5.52683 4.57931 6.30436 4.59389 7.25259C4.59389 8.19945 5.26234 8.977 6.10981 8.977Z" fill="black" />
                            </svg>

                        </GradientButton>
                    </div>
                </div>

                {/* Right Image */}
                <div ref={imageRef} className="w-full max-w-[900px] h-auto">
                    <Image src="/assets/imgs/chat.png" alt="chat" width={900} height={710} />
                </div>
            </div>
        </section>
    )
}
