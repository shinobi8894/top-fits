'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import AvatarGroup from './AvatarGroup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroData() {
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarTextRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const avatarGroupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.set([avatarTextRef.current, headingRef.current, paragraphRef.current, avatarGroupRef.current?.children], {
        opacity: 0,
        y: 30,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { duration: 0.8, ease: 'power2.out' },
      })

      tl.to(avatarTextRef.current, { opacity: 1, y: 0 }, "<+0.1")
      tl.to(headingRef.current, { opacity: 1, y: 0 }, "<+0.1")
      tl.to(paragraphRef.current, { opacity: 1, y: 0 }, "<+0.1")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center">
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

      <h1
        ref={headingRef}
        className="uppercase font-oswald text-6xl font-bold max-w-[720px] text-center leading-20 mb-4"
      >
        The fastest way to source top-selling <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] relative inline-block">jackets</span>
      </h1>

      <p
        ref={paragraphRef}
        className="text-gray font-sf-impact max-w-[610px] text-center text-2xl mb-8"
      >
        TopFits helps eCommerce businesses discover, source, and scale with high-converting fashion products
      </p>
    </div>
  )
}
