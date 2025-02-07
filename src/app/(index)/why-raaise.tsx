import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpCircle, BarChart3, Building2 } from 'lucide-react'

interface FeatureCard {
	title: string
	description: string
	topIcon: React.ReactNode
	hoverIcon?: React.ReactNode
}

const featureCards: FeatureCard[] = [
	{
		title: 'Expert Guidance',
		description:
			'From technology upgrades to digital scaling, our team works side by side with you to ensure success.',
		topIcon: (
			<Building2 className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0 group-hover:opacity-0 transition-opacity relative z-10" />
		),
		hoverIcon: (
			<Building2 className="h-full w-auto absolute top-0 right-0 translate-x-[100%] group-hover:translate-x-0 transition-transform z-0 ease-in-out text-white opacity-0 group-hover:opacity-100" />
		),
	},
	{
		title: 'Shared Success',
		description:
			'We win when you win. Our partnership models are designed for mutual growth.',
		topIcon: (
			<ArrowUpCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
		),
	},
	{
		title: 'Proven Impact',
		description:
			"We don't promise results—we deliver them. Our track record speaks for itself.",
		topIcon: (
			<BarChart3 className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
		),
	},
]

function WhyRaaise() {
	return (
		<section
			id="why-raaise"
			className="w-full py-12 md:py-24 lg:py-32 bg-white max-w-7xl"
		>
			<div className="container px-4 md:px-6 flex flex-col items-center">
				<h2 className="text-3xl font-semibold tracking-tighter text-center mb-4">
					Why Partner with Raaise?
				</h2>
				<p className="text-lg max-w-md text-gray-600 text-center mb-8">
					If you&apos;re an entrepreneur or a business owner ready to take the
					next leap, we want to hear from you. Here&apos;s what sets Raaise
					apart:
				</p>
				<div className="grid gap-6 md:grid-cols-3 md:gap-8">
					{featureCards.map((card, index) => (
						<Card
							key={index}
							className="hover:bg-brand-light transition-colors group relative bg-white overflow-hidden"
						>
							{card.hoverIcon}
							<CardContent className="p-6 flex flex-col space-y-2 relative z-10">
								{card.topIcon}
								<h3 className="text-xl font-semibold">{card.title}</h3>
								<p className="text-zinc-600 dark:text-gray-400 ">
									{card.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyRaaise
