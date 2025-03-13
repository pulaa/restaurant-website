import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Menu data structure
const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: 1,
        name: "Burrata Salad",
        description: "Fresh burrata cheese with heirloom tomatoes, basil, and balsamic reduction",
        price: "$16",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian"],
      },
      {
        id: 2,
        name: "Tuna Tartare",
        description: "Fresh tuna with avocado, cucumber, and citrus soy dressing",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Gluten-Free"],
      },
      {
        id: 3,
        name: "Wild Mushroom Soup",
        description: "Creamy soup with assorted wild mushrooms and truffle oil",
        price: "$14",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian", "Gluten-Free"],
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        id: 4,
        name: "Filet Mignon",
        description: "8oz grass-fed beef with garlic mashed potatoes and seasonal vegetables",
        price: "$42",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Gluten-Free"],
      },
      {
        id: 5,
        name: "Herb-Crusted Salmon",
        description: "Wild-caught salmon with herb crust, quinoa pilaf, and lemon butter sauce",
        price: "$36",
        image: "/placeholder.svg?height=300&width=400",
        dietary: [],
      },
      {
        id: 6,
        name: "Wild Mushroom Risotto",
        description: "Arborio rice with assorted wild mushrooms, parmesan, and truffle oil",
        price: "$28",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian", "Gluten-Free"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: 7,
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream",
        price: "$14",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian"],
      },
      {
        id: 8,
        name: "Crème Brûlée",
        description: "Classic vanilla bean crème brûlée with caramelized sugar crust",
        price: "$12",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian", "Gluten-Free"],
      },
      {
        id: 9,
        name: "Seasonal Fruit Tart",
        description: "Buttery pastry crust with seasonal fruits and pastry cream",
        price: "$13",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["Vegetarian"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: 10,
        name: "Signature Cocktails",
        description: "Ask your server about our seasonal craft cocktails",
        price: "$14-18",
        image: "/placeholder.svg?height=300&width=400",
        dietary: [],
      },
      {
        id: 11,
        name: "Wine Selection",
        description: "Extensive wine list featuring local and international selections",
        price: "Varies",
        image: "/placeholder.svg?height=300&width=400",
        dietary: [],
      },
      {
        id: 12,
        name: "Craft Beer",
        description: "Local and imported craft beers",
        price: "$8-12",
        image: "/placeholder.svg?height=300&width=400",
        dietary: [],
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring seasonal ingredients and chef's specialties
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden bg-card">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-lg font-medium">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {item.dietary.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {item.dietary.map((diet) => (
                            <span key={diet} className="px-2 py-1 bg-muted text-xs rounded-full">
                              {diet}
                            </span>
                          ))}
                        </div>
                      )}

                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/order?item=${item.id}`}>Order Now</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

