import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Restaurant interior with elegant table settings"
        fill
        priority
        className="object-cover brightness-[0.6]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Exquisite Dining Experience</h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8">
          Savor the finest cuisine crafted with passion and served in an elegant atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-lg">
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg bg-black/30 text-white border-white hover:bg-black/50"
          >
            <Link href="/reservation">Book a Table</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

