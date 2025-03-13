import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about our journey, our values, and the people behind the cuisine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Restaurant interior with elegant table settings"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Beginning</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, our restaurant began with a simple vision: to create a dining experience that celebrates
              the rich tapestry of flavors from around the world while honoring local, sustainable ingredients.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small family-owned bistro has grown into one of the city's most beloved culinary
              destinations, known for our commitment to excellence and innovation.
            </p>
            <p className="text-muted-foreground">
              Through the years, we've remained true to our founding principles: sourcing the finest ingredients,
              supporting local producers, and creating memorable experiences for every guest who walks through our
              doors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground mb-4">
              At the heart of our culinary approach is a deep respect for ingredients and traditions. We believe that
              exceptional food begins with exceptional ingredients, which is why we partner with local farmers,
              fishermen, and artisans who share our commitment to quality and sustainability.
            </p>
            <p className="text-muted-foreground mb-4">
              Our menu evolves with the seasons, allowing us to showcase the best of what's available while reducing our
              environmental footprint. We honor traditional techniques while embracing innovation, creating dishes that
              are both familiar and surprising.
            </p>
            <p className="text-muted-foreground">
              Above all, we believe that dining is about more than just food—it's about connection, community, and
              creating moments of joy. Every detail of our restaurant, from the ambiance to the service, is designed
              with this philosophy in mind.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Chef preparing food in the kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Executive Chef portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Maria Rodriguez</h3>
              <p className="text-primary mb-2">Executive Chef</p>
              <p className="text-muted-foreground">
                With over 20 years of experience in renowned kitchens across the globe, Chef Maria brings a wealth of
                knowledge and passion to every dish she creates.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Sous Chef portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">James Chen</h3>
              <p className="text-primary mb-2">Sous Chef</p>
              <p className="text-muted-foreground">
                A culinary innovator with a flair for combining unexpected flavors, James oversees our daily operations
                and helps bring our menu to life with creativity and precision.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Pastry Chef portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sophie Laurent</h3>
              <p className="text-primary mb-2">Pastry Chef</p>
              <p className="text-muted-foreground">
                Trained in Paris, Sophie brings French technique and artistic vision to our dessert menu, creating sweet
                finales that are as beautiful as they are delicious.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to minimizing our environmental impact through sustainable sourcing, reducing waste, and
                supporting regenerative agriculture practices.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We believe in giving back to the community that supports us, through partnerships with local
                organizations, educational initiatives, and charitable events.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                From the ingredients we source to the service we provide, we strive for excellence in every aspect of
                the dining experience we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

