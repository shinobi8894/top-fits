'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GUIDE_STEPS } from '@/constants/step'

gsap.registerPlugin(ScrollTrigger)

export default function GuideSteps() {

    useEffect(() => {
        // ---------------------
        // Progress bar loop
        // ---------------------
        const bars = gsap.utils.toArray<HTMLElement>('.step-progress')
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.out' } })

        gsap.set(bars, { width: '0%', opacity: 0 }) // initial state

        bars.forEach((bar, index) => {
            tl.to(bar, {
                width: '100%',
                opacity: 1,
                duration: 3,
                delay: index > 0 ? 1 : 0
            })
        })
        tl.to(bars, { width: '0%', opacity: 0, duration: 0 })

        // ---------------------
        // Title animation
        // ---------------------
        gsap.fromTo(
            '.guide-main-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.guide-main-title',
                    start: 'top 80%',
                },
            }
        )

        // ---------------------
        // Card animation
        // ---------------------
        gsap.fromTo(
            '.guide-card',
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.guide-card',
                    start: 'top 85%',
                },
            }
        )

        // ---------------------
        // Image animation
        // ---------------------
        gsap.fromTo(
            '.guide-img',
            { opacity: 0, y: 30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.guide-card',
                    start: 'top 85%',
                },
            }
        )

        // ---------------------
        // Content animation
        // ---------------------
        gsap.fromTo(
            ['.guide-title', '.guide-desc'],
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.guide-card',
                    start: 'top 85%',
                },
            }
        )
    }, [])



    return (
        <section className='p-20 flex flex-row justify-center relative overflow-hidden'>
            <div className="w-full h-[720px] absolute -top-[30%] [background-image:linear-gradient(to_bottom,#FFB443_0%,#996C28_50%,#996C2800_100%)] opacity-25" />

            <div className='w-full max-w-[1920px] flex flex-col items-center'>

                {/* Decorative title wrapper */}
                <div className='relative guide-main-title'>
                    <svg className='absolute -left-[20px] bottom-[60px] guide-svg' width="147" height="146" viewBox="0 0 147 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M145.912 131.427C145.912 131.427 111.401 144.393 63.001 144.628C14.6012 144.863 -57.2053 46.1121 85.2864 1.25326" stroke="#E7A84A" strokeWidth="2.59201" strokeDasharray="9.69 9.69" />
                    </svg>
                    <svg className='absolute right-[60px] -top-[20%] guide-svg' width="159" height="152" viewBox="0 0 159 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 56.3013C22.0044 57.9562 27.6176 47.2352 64.0133 13.5287C100.409 -20.1779 206.554 18.3812 130 150.976" stroke="#E7A84A" strokeWidth="2.65658" strokeDasharray="9.93 9.93" />
                    </svg>
                    <svg className='absolute bottom-[60px] right-[120px] guide-svg' width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.580618 24.7549C0.371538 25.5565 0.851877 26.3758 1.65349 26.5849L14.7165 29.9921C15.5181 30.2012 16.3374 29.7208 16.5465 28.9192C16.7556 28.1176 16.2752 27.2983 15.4736 27.0892L3.86207 24.0606L6.89066 12.4491C7.09974 11.6475 6.6194 10.8281 5.81779 10.6191C5.01618 10.41 4.19686 10.8903 3.98778 11.6919L0.580618 24.7549ZM2.03206 25.1335L2.79069 26.4275C4.10429 25.6574 5.37141 24.8567 6.59136 24.034L5.75272 22.7904L4.91408 21.5467C3.74434 22.3355 2.53054 23.1025 1.27343 23.8395L2.03206 25.1335ZM12.7348 17.4462L13.7146 18.582C16.1387 16.4908 18.2893 14.3759 20.1573 12.3521L19.055 11.3348L17.9528 10.3174C16.1561 12.2639 14.0867 14.2989 11.755 16.3105L12.7348 17.4462ZM24.6114 4.52293L25.8355 5.38999C26.8969 3.89161 27.7182 2.57686 28.285 1.53652L26.9679 0.818798L25.6508 0.101074C25.152 1.01629 24.3972 2.23043 23.3874 3.65588L24.6114 4.52293Z" fill="#E7A84A" />
                    </svg>

                    <h1 className="uppercase font-oswald text-6xl font-bold max-w-[550px] text-center leading-20 mb-20">
                        YOUR GUIDE TO NAVIGATING <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] relative inline-block">TOPFITS:</span>
                    </h1>
                </div>

                {/* Steps grid */}
                <div className='grid grid-cols-2 gap-20 xl:grid-cols-3'>
                    {GUIDE_STEPS.map((item, idx) => (
                        <div key={idx} className="guide-card relative group cursor-pointer bg-background overflow-hidden">
                            <div className="font-sf-impact flex flex-col items-center z-20 relative">
                                <Image src={item.img} alt={item.title} width={480} height={520} className='guide-img object-cover w-full h-full mb-14' />
                                {/* Animated progress bar at bottom */}
                                <div className="w-full h-[6px] bg-[#1F1F1F] relative overflow-hidden mb-10 rounded-full">
                                    <div className="step-progress absolute left-0 top-0 h-full bg-primary" style={{ width: '0%' }} />
                                </div>
                                <div className='flex flex-col items-start w-full'>
                                    <span className='text-gray text-md'>{item.step}</span>
                                    <h2 className="guide-title text-3xl font-bold mb-4">{item.title}</h2>
                                    <p className="guide-desc text-gray text-xl">{item.desc}</p>
                                </div>
                            </div>

                            {/* Hover glow bar at top */}
                            <div className="absolute flex flex-col justify-center items-center z-20 top-0 left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                                <div className="w-[100px] h-[3px] bg-primary rounded-br-full rounded-bl-full" />
                                <div className="w-[140px] h-[6px] bg-primary rounded-br-full rounded-bl-full opacity-60 blur-2xl shadow-[0_0_50px_30px_rgba(255,161,63,0.8)] mt-[-2px]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
