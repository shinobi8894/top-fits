'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import AvatarGroup from './AvatarGroup'
import gsap from 'gsap'

export default function HeroData() {
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarTextRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const elements = [
        avatarTextRef.current,
        headingRef.current,
        paragraphRef.current
      ]

      // Start hidden
      gsap.set(elements, { opacity: 0, y: 30 })

      // Smooth staggered intro
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15, // 150ms between each
        delay: 0.35 // short pause after page load
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      {/* Avatar + text */}
      <div ref={avatarTextRef} className="flex flex-row items-center gap-4 mb-4">
        <AvatarGroup />
        <div className="font-sf-impact flex flex-row items-center gap-2 text-sm">
          <p className="text-gray font-semibold">
            Join 250+ Satisfied Customers.
            <span className="text-primary"> Read more</span>
          </p>
          <ArrowRight className="text-primary w-4" />
        </div>
      </div>

      {/* Heading */}
      <h1
        ref={headingRef}
        className="uppercase font-oswald text-6xl font-bold max-w-[720px] text-center leading-20 mb-4"
      >
        The fastest way to source top-selling{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] relative inline-block">
          jackets
        </span>
      </h1>

      {/* Paragraph */}
      <p
        ref={paragraphRef}
        className="text-gray font-sf-impact max-w-[610px] text-center text-2xl mb-8"
      >
        TopFits helps eCommerce businesses discover, source, and scale with high-converting fashion products
      </p>
    </div>
  )
}
