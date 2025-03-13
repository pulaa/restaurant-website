import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The most exquisite dining experience I've had in years. Every dish was a masterpiece.",
    author: "Emily Johnson",
    title: "Food Critic",
  },
  {
    id: 2,
    quote: "The attention to detail in both food and service is unmatched. A true culinary gem.",
    author: "Michael Chen",
    title: "Regular Customer",
  },
  {
    id: 3,
    quote: "From the ambiance to the last bite of dessert, everything was perfect. Will definitely return.",
    author: "Sophia Rodriguez",
    title: "First-time Visitor",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Don't just take our word for it. Here's what our valued guests have to say about their dining experience
            with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <Quote className="h-10 w-10 mb-4 opacity-50" />
              <p className="mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm opacity-75">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

