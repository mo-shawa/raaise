import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ApplyButton from './apply-button'

function CallToAction() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br bg-black  text-darkGray flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-between gap-8 text-center">
					<div className="space-y-4">
						<h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-6xl text-white ">
							Take the{' '}
							<span className="bg-brand-primary px-3 rounded text-lime-900">
								Leap
							</span>{' '}
							with{' '}
							<img
								src="/logo/colored-white.png"
								alt="Raaise Logo"
								className="inline-block h-10 -mt-1 w-auto"
							/>
						</h2>
						<p className="mx-auto max-w-[700px] md:text-xl">
							If you're ready to elevate your business or become part of a
							growth-driven partnership, Raaise is here to help you rise.
						</p>
					</div>
					<div className="space-y-2">
						<p className="mx-auto max-w-[700px] md:text-xl">
							Your success story starts here. Will you make it happen?
						</p>
					</div>

					<ApplyButton />
				</div>
			</div>
		</section>
	)
}

export default CallToAction
