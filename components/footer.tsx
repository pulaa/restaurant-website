import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">FINE DINING</h3>
            <p className="text-muted-foreground">
              Exquisite cuisine in an elegant atmosphere. Join us for an unforgettable dining experience.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-muted-foreground hover:text-primary transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-muted-foreground hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">123 Culinary Avenue</p>
              <p className="mb-2">Gourmet District</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Phone: (212) 555-1234</p>
              <p>Email: info@restaurant.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 9:00 PM</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fine Dining Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

