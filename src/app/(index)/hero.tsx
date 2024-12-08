'use client'
import { Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
function Sphere() {
	return (
		<Float>
			<mesh>
				<OrbitControls enableZoom={false} />
				<sphereGeometry args={[3, 10, 10]} />
				<meshBasicMaterial wireframe color={'black'} />
			</mesh>
		</Float>
	)
}

function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 max-w-7xl">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<div className="md:col-span-2">
						<h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-zinc-800">
							Unleashing Potential,
							<br />
							Transforming Futures
						</h1>
						<p className="max-w-[700px] text-zinc-600 md:text-xl dark:text-gray-400 mb-6">
							Welcome to Raaise, where bold ideas meet transformative execution.
							We don't just build businesses—we shape them into scalable,
							tech-enabled powerhouses.
						</p>
					</div>
					<Canvas>
						<Sphere />
					</Canvas>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
					<div>
						<p className="text-zinc-400 font-semibold mb-2">
							Our mission is simple:
						</p>
						<p className="text-zinc-600 md:text-lg dark:text-gray-400">
							To identify untapped potential, unlock hidden value, and scale for
							lasting impact.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
