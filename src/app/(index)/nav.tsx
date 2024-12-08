import Link from 'next/link'

function Navbar() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center w-full max-w-7xl">
			<Link className="flex items-center justify-center" href="#">
				<span className="sr-only">Raaise</span>
				<span className="text-2xl font-bold text-zinc-600">Raaise</span>
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
		</header>
	)
}

export default Navbar
