'use client'

import { useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import gsap from 'gsap'

const avatarData = [
  { src: 'https://github.com/shadcn.png', top: '20%', left: '18%', width: 100, height: 100, opacity: 0.5 },
  { src: 'https://github.com/leerob.png', top: '45%', left: '5%', width: 70, height: 70, opacity: 0.5 },
  { src: 'https://github.com/evilrabbit.png', top: '70%', left: '15%', width: 150, height: 150, opacity: 1 },
  { src: 'https://github.com/shadcn.png', top: '25%', right: '18%', width: 100, height: 100, opacity: 0.5 },
  { src: 'https://github.com/leerob.png', top: '50%', right: '5%', width: 70, height: 70, opacity: 1 },
  { src: 'https://github.com/evilrabbit.png', top: '75%', right: '17%', width: 150, height: 150, opacity: 0.5 },
]

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
      {avatarData.map((avatar, index) => (
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
          <div className="bg-primary w-full h-full absolute rounded-full opacity-50"/>
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
