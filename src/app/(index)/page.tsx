import CallToAction from './call-to-action'
import Footer from './footer'
import Hero from './hero'
import Navbar from './nav'
import SuccessStory from './success-story'
import WhyRaaise from './why-raaise'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<main className="flex-1 w-full flex items-center justify-center flex-col">
				<div className="bg-hero-gradient bg-no-repeat bg-cover w-full flex flex-col items-center">
					<Navbar />
					<Hero />
				</div>
				<SuccessStory />
				<WhyRaaise />
				<CallToAction />
			</main>
			<Footer />
		</div>
	)
}
