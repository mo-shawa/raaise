import Link from 'next/link'

function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-white/50 shadow-sm backdrop-blur-sm w-full">
			<div className="px-4 lg:px-6 py-4 flex items-center mx-auto w-full max-w-7xl">
				<Link className="flex items-center justify-center h-full" href="#">
					<span className="sr-only">Raaise</span>
					<img
						className="aspect-auto w-32"
						src="/logo/logo-colored.png"
						alt="Raaise"
					/>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#about"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#success-story"
					>
						Success Story
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#why-raaise"
					>
						Why Raaise
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
