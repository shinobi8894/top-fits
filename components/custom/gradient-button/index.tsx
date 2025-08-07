import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"

interface GradientButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  size?: "square" | "auto"
  onClick?: () => void
}

// Class variants
const gradientVariants = {
  primary: "bg-gradient-to-b from-[#FF7925] to-[#FFD460]",
  secondary: "bg-gradient-to-b from-[#252525] to-[#424242]",
}

const sizeVariants = {
  square: "h-button w-[50px]",
  auto: "h-button",
}

// forwardRef component
const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, variant = "primary", size = "square", onClick }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "cursor-pointer font-sf-impact p-0 rounded-[12px]",
          gradientVariants[variant],
          sizeVariants[size],
          variant === "primary" && "text-black",
          className
        )}
        onClick={onClick}
      >
        {children}
      </Button>
    )
  }
)

GradientButton.displayName = "GradientButton"

export default GradientButton
