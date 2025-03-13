"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react"

// Combined menu data from all categories
const allMenuItems = [
  // Starters
  {
    id: 1,
    name: "Burrata Salad",
    description: "Fresh burrata cheese with heirloom tomatoes, basil, and balsamic reduction",
    price: 16,
    category: "Starters",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian"],
  },
  {
    id: 2,
    name: "Tuna Tartare",
    description: "Fresh tuna with avocado, cucumber, and citrus soy dressing",
    price: 18,
    category: "Starters",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: 3,
    name: "Wild Mushroom Soup",
    description: "Creamy soup with assorted wild mushrooms and truffle oil",
    price: 14,
    category: "Starters",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  // Main Courses
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz grass-fed beef with garlic mashed potatoes and seasonal vegetables",
    price: 42,
    category: "Mains",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Gluten-Free"],
  },
  {
    id: 5,
    name: "Herb-Crusted Salmon",
    description: "Wild-caught salmon with herb crust, quinoa pilaf, and lemon butter sauce",
    price: 36,
    category: "Mains",
    image: "/placeholder.svg?height=300&width=400",
    dietary: [],
  },
  {
    id: 6,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice with assorted wild mushrooms, parmesan, and truffle oil",
    price: 28,
    category: "Mains",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  // Desserts
  {
    id: 7,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 14,
    category: "Desserts",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian"],
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Classic vanilla bean crème brûlée with caramelized sugar crust",
    price: 12,
    category: "Desserts",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: 9,
    name: "Seasonal Fruit Tart",
    description: "Buttery pastry crust with seasonal fruits and pastry cream",
    price: 13,
    category: "Desserts",
    image: "/placeholder.svg?height=300&width=400",
    dietary: ["Vegetarian"],
  },
  // Drinks
  {
    id: 10,
    name: "Signature Cocktail",
    description: "Our seasonal craft cocktail",
    price: 16,
    category: "Drinks",
    image: "/placeholder.svg?height=300&width=400",
    dietary: [],
  },
  {
    id: 11,
    name: "House Red Wine",
    description: "Glass of our house red wine",
    price: 12,
    category: "Drinks",
    image: "/placeholder.svg?height=300&width=400",
    dietary: [],
  },
  {
    id: 12,
    name: "Craft Beer",
    description: "Local craft beer on tap",
    price: 10,
    category: "Drinks",
    image: "/placeholder.svg?height=300&width=400",
    dietary: [],
  },
]

// Group menu items by category
const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
]

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  specialInstructions?: string
}

export default function OrderPage() {
  const searchParams = useSearchParams()
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    orderType: "pickup", // or 'delivery'
  })

  // Initialize with the item from URL if present
  useEffect(() => {
    const itemId = searchParams.get("item")
    if (itemId) {
      const item = allMenuItems.find((item) => item.id === Number.parseInt(itemId))
      if (item && !cart.some((cartItem) => cartItem.id === item.id)) {
        setCart([{ id: item.id, name: item.name, price: item.price, quantity: 1 }])
      }
    }
  }, [searchParams])

  const addToCart = (item: (typeof allMenuItems)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { id: item.id, name: item.name, price: item.price, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const updateSpecialInstructions = (id: number, instructions: string) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, specialInstructions: instructions } : item)),
    )
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleOrderTypeChange = (value: string) => {
    setCustomerInfo((prev) => ({ ...prev, orderType: value }))
  }

  const placeOrder = () => {
    // In a real app, you would submit the order to your API here
    console.log("Order placed:", { cart, customerInfo, total: calculateTotal() })
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Thank you for your order. We've sent a confirmation email with all the details.
        </p>
        <Button
          onClick={() => {
            setOrderPlaced(false)
            setCart([])
          }}
        >
          Place Another Order
        </Button>
      </div>
    )
  }

  return (
    <main className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Online Ordering</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Order your favorite dishes for pickup or delivery</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {allMenuItems
                      .filter(
                        (item) =>
                          item.category.toLowerCase() === category.name.toLowerCase() ||
                          (category.id === "mains" && item.category === "Mains"),
                      )
                      .map((item) => (
                        <Card key={item.id}>
                          <div className="relative h-48">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-center">
                              <CardTitle>{item.name}</CardTitle>
                              <span className="font-medium">${item.price}</span>
                            </div>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button onClick={() => addToCart(item)} className="w-full">
                              Add to Order
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Your Order
                </CardTitle>
                <CardDescription>
                  {cart.length === 0
                    ? "Your cart is empty"
                    : `${cart.reduce((total, item) => total + item.quantity, 0)} items in your cart`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length > 0 ? (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.name}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                            <MinusCircle className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                            <PlusCircle className="h-4 w-4" />
                          </Button>
                        </div>
                        <Textarea
                          placeholder="Special instructions..."
                          value={item.specialInstructions || ""}
                          onChange={(e) => updateSpecialInstructions(item.id, e.target.value)}
                          className="text-sm"
                        />
                      </div>
                    ))}

                    <div className="flex justify-between font-bold text-lg pt-2">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>

                    <div className="pt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="orderType">Order Type</Label>
                        <Select value={customerInfo.orderType} onValueChange={handleOrderTypeChange}>
                          <SelectTrigger id="orderType">
                            <SelectValue placeholder="Select order type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pickup">Pickup</SelectItem>
                            <SelectItem value="delivery">Delivery</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                        />
                      </div>

                      {customerInfo.orderType === "delivery" && (
                        <div className="space-y-2">
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            placeholder="123 Main St, City, State, Zip"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p>Add items from the menu to start your order</p>
                  </div>
                )}
              </CardContent>
              {cart.length > 0 && (
                <CardFooter>
                  <Button
                    onClick={placeOrder}
                    className="w-full"
                    disabled={
                      !customerInfo.name ||
                      !customerInfo.phone ||
                      !customerInfo.email ||
                      (customerInfo.orderType === "delivery" && !customerInfo.address)
                    }
                  >
                    Place Order
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

