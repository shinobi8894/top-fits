'use client'

import { ReactNode } from 'react'
import GradientButton from '@/components/custom/gradient-button'

interface RoundedConfig {
  tl?: boolean
  bl?: boolean
  tr?: boolean
  br?: boolean
  noLeft?: boolean
  noRight?: boolean
}

export interface StatCardProps {
  svg: ReactNode
  number: string
  suffix?: string
  description: string
  rounded?: RoundedConfig
}

export default function StatCard({
  svg,
  number,
  suffix = '',
  description,
  rounded
}: StatCardProps) {
  return (
    <div
      className={`bg-gradient-to-b from-[#101010] via-[#202020] to-[#070707]
        border border-[#383838] flex flex-col items-center
        ${rounded?.tl ? 'rounded-tl-[32px]' : ''}
        ${rounded?.bl ? 'rounded-bl-[32px]' : ''}
        ${rounded?.tr ? 'rounded-tr-[32px]' : ''}
        ${rounded?.br ? 'rounded-br-[32px]' : ''}
        ${rounded?.noLeft ? 'border-l-0' : ''}
        ${rounded?.noRight ? 'border-r-0' : ''}`}
    >
      <div className="p-8">
        <GradientButton className="inner-shadow w-[180px] !h-[180px] rounded-[48px]">
          {svg}
        </GradientButton>
      </div>

      <div className="w-full h-[6px] bg-secondary-foreground relative overflow-hidden">
        <div className="step-card absolute left-0 top-0 h-full bg-secondary" style={{ width: '0px' }} />
      </div>

      <div className="p-8 flex flex-col items-center">
        <h3 className="font-sf-impact font-semibold text-5xl mb-2">
          {number}
          <span className="text-primary">{suffix}</span>
        </h3>
        <p className="font-sf-impact text-gray max-w-[350px] text-center text-2xl">
          {description}
        </p>
      </div>
    </div>
  )
}
