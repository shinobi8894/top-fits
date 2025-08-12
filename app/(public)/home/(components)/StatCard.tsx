'use client'

import { ReactNode, useEffect, useState } from 'react'
import GradientButton from '@/components/custom/gradient-button'

interface RoundedConfig {
  tl?: boolean
  bl?: boolean
  tr?: boolean
  br?: boolean
}

export interface StatCardProps {
  svg: ReactNode
  number: string
  suffix?: string
  description: string
  index?: number
  totalCards?: number
}

export default function StatCard({
  svg,
  number,
  suffix = '',
  description,
  index = 0,
  totalCards = 1
}: StatCardProps) {
  const [rounded, setRounded] = useState<RoundedConfig>({})

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth
      // adjust breakpoints to match your Tailwind config if you want
      let cols = 4
      if (w < 768) cols = 1 // mobile
      else if (w < 1536) cols = 2 // tablet
      else cols = 4 // desktop

      // helpful derived values
      const rows = Math.ceil(totalCards / cols)
      const row = Math.floor(index / cols)
      const col = index % cols
      const isFirstRow = row === 0
      const isLastRow = row === rows - 1
      const isFirstCol = col === 0
      // treat a cell in an incomplete last row as "last col" if it's the last card
      const isLastCol = col === cols - 1 || index === totalCards - 1

      let newRounded: RoundedConfig = {}

      if (cols === 4) {
        // Desktop (single row): round left side of first card and right side of last card
        newRounded = {
          tl: index === 0,
          bl: index === 0,
          tr: index === totalCards - 1,
          br: index === totalCards - 1
        }
      } else if (cols === 2) {
        // Tablet (2 cols): only single corner per outer card:
        // top-left -> tl, top-right -> tr, bottom-left -> bl, bottom-right -> br
        if (isFirstRow && isFirstCol) newRounded = { tl: true }
        else if (isFirstRow && isLastCol) newRounded = { tr: true }
        else if (isLastRow && isFirstCol) newRounded = { bl: true }
        else if (isLastRow && isLastCol) newRounded = { br: true }
        else newRounded = {} // interior cells: no rounding
      } else {
        // Mobile (single column): round top corners of first and bottom corners of last
        newRounded = {
          tl: index === 0,
          tr: index === 0,
          bl: index === totalCards - 1,
          br: index === totalCards - 1
        }
      }

      setRounded(newRounded)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [index, totalCards])

  return (
    <div
      className={`bg-gradient-to-b from-[#101010] via-[#202020] to-[#070707]
        border border-[#383838] flex flex-col items-center
        ${rounded.tl ? 'rounded-tl-[32px]' : ''}
        ${rounded.tr ? 'rounded-tr-[32px]' : ''}
        ${rounded.bl ? 'rounded-bl-[32px]' : ''}
        ${rounded.br ? 'rounded-br-[32px]' : ''}`}
    >
      <div className="p-8">
        <GradientButton className="inner-shadow w-[180px] !h-[180px] rounded-[48px]">
          {svg}
        </GradientButton>
      </div>

      <div className="w-full h-[6px] bg-secondary-foreground relative overflow-hidden">
        <div
          className="step-card absolute left-0 top-0 h-full bg-secondary"
          style={{ width: '0px' }}
        />
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
