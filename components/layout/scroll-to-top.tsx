'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ArrowBigUpDash } from 'lucide-react'

type Props = {
	threshold?: number
	className?: string
}

export default function ScrollToTop({ threshold = 300, className = '' }: Props) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > threshold)
		}

		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [threshold])

	function handleClick() {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}

	return (
		<div
			aria-hidden={!visible}
			className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
				visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
			}`}
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							aria-label="Scroll to top"
							title="Scroll to top"
							onClick={handleClick}
							className={`h-11 w-11 rounded-full p-0 shadow-lg ring-1 ring-black/6 transition-transform duration-500 hover:scale-105 active:scale-95 ${className}`}
						>
							<ArrowBigUpDash className="h-5 w-5" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Top</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
