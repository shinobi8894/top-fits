'use client'

import { useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import gsap from 'gsap'
import { AVATAR_DATA } from '@/constants/avatar'

export default function FloatingAvatarGroup() {
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    avatarRefs.current.forEach((el, index) => {
      if (!el) return

      const floatAmount = 30 + Math.random() * 10
      const duration = 2 + Math.random() * 1.5

      // Individual animation loop per avatar
      gsap.to(el, {
        y: `-=${floatAmount}`,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      })

      // Optional subtle x-axis oscillation
      gsap.to(el, {
        x: '+=10',
        duration: duration * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3,
      })
    })
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {AVATAR_DATA.map((avatar, index) => (
        <div
          key={index}
          ref={(el: any) => (avatarRefs.current[index] = el)}
          className="absolute flex justify-center items-center"
          style={{
            top: avatar.top,
            left: avatar.left,
            right: avatar.right,
            width: avatar.width,
            height: avatar.height,
            opacity: avatar.opacity
          }}
        >
          <div className="bg-primary w-full h-full absolute rounded-full opacity-50" />
          <Avatar style={{
            width: (avatar.width - 20),
            height: avatar.height - 20
          }}>
            <AvatarImage src={avatar.src} alt="user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  )
}
