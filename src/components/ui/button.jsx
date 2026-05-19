import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white border border-white/20 hover:bg-white/10 shadow-sm",
        ghost:
          "hover:bg-white/10 hover:text-white text-neutral-300",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/10",
        glow:
          "relative overflow-hidden bg-black text-white border border-transparent shadow-[0_0_8px_rgba(255,255,255,0.25)] hover:shadow-[0_0_18px_rgba(255,255,255,0.6)] transition-shadow duration-300 before:absolute before:inset-[-1000%] before:animate-[spin_2.5s_linear_infinite] before:bg-[conic-gradient(from_90deg_at_50%_50%,#f8fafc_0%,#ffffff_25%,#e2e8f0_50%,#ffffff_75%,#f8fafc_100%)] before:z-[-1] after:absolute after:inset-[1px] after:rounded-full after:bg-black after:z-[-1]",
        glass:
          "liquid-glass text-white hover:bg-white/12 active:bg-white/18 transition-all duration-200",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-11 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
