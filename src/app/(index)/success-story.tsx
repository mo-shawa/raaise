import Image from 'next/image'

function SuccessStory() {
	return (
		<section
			id="success-story"
			className="w-full max-w-7xl py-12 md:py-16 bg-slate-50 md:-mt-[4rem] rounded"
		>
			<div className=" px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
					From Struggles to Success: The Raaise Way
				</h2>
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<Image
						alt="Success story illustration"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
						height="310"
						src="/placeholder.svg"
						width="550"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<p className="text-zinc-600 dark:text-gray-400">
							In 2023, we identified a struggling distribution company on the
							verge of collapse. Despite years of effort, its traditional
							operations could no longer keep up with evolving market demands.
							Where others saw a lost cause, we saw opportunity.
						</p>
						<p className="text-zinc-600 dark:text-gray-400">
							We overhauled its core operations, rebuilt partnerships,
							leveraging technology to digitize the supply chain, optimize
							inventory management, and expand its digital presence.
						</p>
						<p className="text-zinc-600 dark:text-gray-400">
							The result? A 100% increase in market reach and 50% improvement in
							cash flow within 12 months. Today, that same company stands as a
							sustainable business, a testament to the power of Raaise&apos;s
							hands-on approach.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SuccessStory
