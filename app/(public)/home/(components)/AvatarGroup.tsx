'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { forwardRef } from 'react'

const avatars = [
  { src: 'https://github.com/shadcn.png', alt: '@shadcn', fallback: 'CN' },
  { src: 'https://github.com/leerob.png', alt: '@leerob', fallback: 'LR' },
  { src: 'https://github.com/evilrabbit.png', alt: '@evilrabbit', fallback: 'ER' },
  { src: 'https://github.com/shadcn.png', alt: '@shadcn', fallback: 'CN' },
  { src: 'https://github.com/leerob.png', alt: '@leerob', fallback: 'LR' },
]

// Forward ref to allow control from HeroSection
const AvatarGroup = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      {avatars.map((avatar, i) => (
        <Avatar key={i}>
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
})

AvatarGroup.displayName = 'AvatarGroup'
export default AvatarGroup
