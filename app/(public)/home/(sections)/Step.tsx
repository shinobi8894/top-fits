'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STEP_DATA } from '@/constants/step'
import StatCard from '../(components)/StatCard'

gsap.registerPlugin(ScrollTrigger)

export default function StepSection() {
    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.step-card')

        // Initial state for wrapper
        gsap.set('.stats-grid', { opacity: 0, y: 50 })

        // Animate wrapper on scroll
        gsap.to('.stats-grid', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 80%',
                onEnter: () => {
                    // Start progress bar loop only when wrapper is visible
                    const tl = gsap.timeline({
                        repeat: -1,
                        defaults: { ease: 'power2.out' }
                    })

                    // Progress bars initial state
                    gsap.set(cards, { width: '0%', opacity: 0 })

                    // Animate each card's progress in sequence
                    cards.forEach((card, index) => {
                        tl.to(card, {
                            width: '100%',
                            duration: 3,
                            opacity: 1,
                            delay: index > 0 ? 1 : 0
                        })
                    })

                    // Reset after last
                    tl.to(cards, { width: '0%', opacity: 0, duration: 0 })
                }
            }
        })
    }, [])

    return (
        <section className="p-20 bg-gradient-to-b from-[#000000] to-[#101010]">
            <div className="w-full max-w-[1920px] grid grid-cols-4 stats-grid">
                {STEP_DATA.map((card, index) => (
                    <StatCard key={index} {...card} />
                ))}
            </div>
        </section>
    )
}
