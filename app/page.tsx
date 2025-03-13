import Hero from "@/components/hero"
import FeaturedDishes from "@/components/featured-dishes"
import Testimonials from "@/components/testimonials"
import AboutPreview from "@/components/about-preview"
import ReservationCta from "@/components/reservation-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <Testimonials />
      <ReservationCta />
    </main>
  )
}

