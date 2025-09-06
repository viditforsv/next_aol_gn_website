import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <Image
                  src="/aol_logo.svg"
                  alt="Art of Living Logo"
                  width={120}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-6">
                Art of Living
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#E74902] mb-4">
                Great Noida Chapter
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Join us in spreading happiness, peace, and wisdom through ancient techniques 
                and modern practices for holistic well-being.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button size="lg" className="bg-[#E74902] hover:bg-[#FF0000] text-white">
                  Join Our Community
                </Button>
                <Button variant="outline" size="lg" className="border-[#E74902] text-[#E74902] hover:bg-[#E74902] hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Gurudev's Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F6CB62] to-[#ECA55A] rounded-3xl blur-sm opacity-30"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <Image
                    src="/Gurudev-Sri-Sri-Ravi-Shankar.jpg"
                    alt="Gurudev Sri Sri Ravi Shankar"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover w-full h-auto max-w-sm"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#E74902] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Gurudev Sri Sri Ravi Shankar
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FFF0CD] py-16">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover transformative programs designed to enhance your physical, mental, and spiritual well-being.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#E74902]">Meditation & Yoga</CardTitle>
              <CardDescription>
                Learn ancient techniques for inner peace and physical wellness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Regular sessions to help you find balance and tranquility in daily life.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#E74902]">Breathing Techniques</CardTitle>
              <CardDescription>
                Master the art of conscious breathing for better health
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Powerful breathing exercises that boost immunity and reduce stress.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#E74902]">Community Service</CardTitle>
              <CardDescription>
                Make a positive impact in society through seva
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join hands with like-minded individuals to serve the community.
              </p>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#E74902] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to begin your journey towards a more fulfilling life? 
            Contact us to learn about upcoming programs and events.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#E74902] bg-transparent">
              Upcoming Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
