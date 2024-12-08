import { Card, CardContent } from '@/components/ui/card'

function WhyRaaise() {
	return (
		<section
			id="why-raaise"
			className="w-full py-12 md:py-24 lg:py-32 bg-white max-w-7xl"
		>
			<div className="container px-4 md:px-6 flex flex-col items-center">
				<h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
					Why Partner with Raaise?
				</h2>
				<p className="text-lg max-w-md text-gray-600 text-center mb-8">
					If you're an entrepreneur or a business owner ready to take the next
					leap, we want to hear from you. Here's what sets Raaise apart:
				</p>
				<div className="grid gap-6 md:grid-cols-3 md:gap-8">
					<Card>
						<CardContent className="p-6 flex flex-col space-y-2">
							<h3 className="text-xl font-bold">Expert Guidance</h3>
							<p className="text-zinc-600 dark:text-gray-400">
								From technology upgrades to digital scaling, our team works side
								by side with you to ensure success.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6 flex flex-col space-y-2">
							<h3 className="text-xl font-bold">Shared Success</h3>
							<p className="text-zinc-600 dark:text-gray-400">
								We win when you win. Our partnership models are designed for
								mutual growth.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6 flex flex-col space-y-2">
							<h3 className="text-xl font-bold">Proven Impact</h3>
							<p className="text-zinc-600 dark:text-gray-400">
								We don't promise results—we deliver them. Our track record
								speaks for itself.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default WhyRaaise
