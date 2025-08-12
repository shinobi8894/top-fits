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
        stagger: 0.15,
        delay: 0.35
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center relative z-20 px-4">
      {/* Avatar + text */}
      <div
        ref={avatarTextRef}
        className="flex flex-col items-center gap-4 mb-4 md:flex-row"
      >
        <AvatarGroup />
        <div
          className="
            font-sf-impact flex flex-row items-center gap-2
            text-[clamp(0.75rem,1.5vw,0.875rem)] /* 12px → 14px */
          "
        >
          <p className="text-gray font-semibold text-center">
            Join 250+ Satisfied Customers.
            <span className="text-primary"> Read more</span>
          </p>
          <ArrowRight className="text-primary w-4" />
        </div>
      </div>

      {/* Heading */}
      <h1
        ref={headingRef}
        className="
          uppercase font-oswald font-bold max-w-[720px] text-center
          text-[clamp(1.75rem,4vw,3.75rem)] /* 28px → 60px */
          leading-[1.2] mb-4
        "
      >
        The fastest way to source top-selling{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] relative inline-block">
          jackets
        </span>
      </h1>

      {/* Paragraph */}
      <p
        ref={paragraphRef}
        className="
          text-gray font-sf-impact max-w-[610px] text-center
          text-[clamp(1rem,2vw,1.5rem)] /* 16px → 24px */
          mb-8
        "
      >
        TopFits helps eCommerce businesses discover, source, and scale with
        high-converting fashion products
      </p>
    </div>
  )
}
