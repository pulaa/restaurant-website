import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredDishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with wild mushrooms and truffle oil",
    price: "$24",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée and bacon jam",
    price: "$32",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Braised Short Rib",
    description: "Slow-cooked short rib with root vegetables and red wine reduction",
    price: "$36",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FeaturedDishes() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Signature Dishes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our chef's most celebrated creations, crafted with seasonal ingredients and exceptional technique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-lg font-medium">{dish.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{dish.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

