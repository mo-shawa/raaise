import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300',
	{
		variants: {
			variant: {
				default:
					'bg-black text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90',
				destructive:
					'bg-red-500 text-white shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-white dark:hover:bg-red-900/90',
				outline:
					'border border-black/20 bg-white shadow-sm hover:bg-black/10 hover:text-black dark:border-black/80 dark:bg-neutral-950 dark:hover:bg-black/80 dark:hover:text-white',
				secondary:
					'bg-black/10 text-black shadow-sm hover:bg-black/10 dark:bg-black/80 dark:text-white dark:hover:bg-black/60',
				ghost:
					'hover:bg-black/10 hover:text-black dark:hover:bg-black/80 dark:hover:text-white',
				link: 'text-black underline-offset-4 hover:underline dark:text-white',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
