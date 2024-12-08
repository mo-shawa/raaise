import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function CallToAction() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-600 to-slate-400 text-white max-w-7xl">
			<div className=" px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Take the Leap with Raaise
						</h2>
						<p className="mx-auto max-w-[700px] md:text-xl">
							If you&apos;re ready to elevate your business or become part of a
							growth-driven partnership, Raaise is here to help you rise.
						</p>
					</div>
					<div className="space-y-2">
						<p className="mx-auto max-w-[700px] md:text-xl">
							Your success story starts here. Will you make it happen?
						</p>
					</div>
					<Button
						className="bg-white text-zinc-600 hover:bg-gray-100"
						size="lg"
					>
						Apply Today
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default CallToAction
