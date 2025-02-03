import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ApplyButton() {
	return (
		<Button
			className=" hover:bg-white bg-brand-primary text-lg text-black font-semibold group font-mono"
			size="lg"
		>
			Apply Today
			<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
		</Button>
	)
}
