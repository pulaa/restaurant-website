"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservations" },
  { href: "/order", label: "Order Online" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="font-serif text-xl font-bold">FINE DINING</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-7 pt-16">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 hidden md:flex">
          <span className="font-serif text-xl font-bold">FINE DINING</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-6">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild variant="default" size="sm" className="hidden md:flex">
            <Link href="/reservation">Book a Table</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

