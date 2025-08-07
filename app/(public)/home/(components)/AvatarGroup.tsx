'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { AVATARS } from '@/constants/avatar'
import { forwardRef } from 'react'
// Forward ref to allow control from HeroSection
const AvatarGroup = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
    >
      {AVATARS.map((avatar, i) => (
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
