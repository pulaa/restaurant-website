import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReservationCta() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Reserve Your Table</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join us for an unforgettable dining experience. Reserve your table now to avoid disappointment.
        </p>
        <Button asChild size="lg">
          <Link href="/reservation">Book a Table</Link>
        </Button>
      </div>
    </section>
  )
}

