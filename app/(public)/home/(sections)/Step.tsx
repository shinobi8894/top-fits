'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { STEP_DATA } from '@/constants/step'
import StatCard from '../(components)/StatCard'

export default function StepSection() {
    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.step-card')

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'power2.out' }
        })

        // Start with all progress bars empty
        gsap.set(cards, { width: '0px', opacity:0 })

        // Animate each card's progress in sequence
        cards.forEach((card, index) => {
            tl.to(card, { width: '100%', duration: 3, opacity:1, delay: index > 0 ? 1 : 0 })
        })

        // After the last card, reset all to 0% instantly
        tl.to(cards, { width: '0%', opacity:0, duration: 0 })
    }, [])

    return (
        <div className="p-20">
            <div className="w-full max-w-[1920px] grid grid-cols-4 stats-grid">
                {STEP_DATA.map((card, index) => (
                    <StatCard key={index} {...card} />
                ))}
            </div>
        </div>
    )
}
