import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPreview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Chef preparing food in the kitchen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2010, our restaurant began with a simple vision: to create a dining experience that celebrates
              the rich tapestry of flavors from around the world while honoring local, sustainable ingredients.
            </p>
            <p className="text-muted-foreground mb-6">
              Our chef, with over 20 years of culinary expertise, crafts each dish with precision and passion, ensuring
              every plate tells a story and every bite creates a memory.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

