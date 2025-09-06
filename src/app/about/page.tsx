"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Users, 
  Globe, 
  BookOpen,
  Lightbulb,
  Shield,
  Star,
  Award,
  Calendar,
  MapPin
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the Art of Living Great Noida Chapter - a community dedicated to 
            spreading happiness, peace, and wisdom through ancient techniques and modern practices.
          </p>
        </div>

        {/* Gurudev Section */}
        <div className="mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl text-[#E74902] mb-4">Our Inspiration</CardTitle>
                  <CardDescription className="text-lg">
                    Gurudev Sri Sri Ravi Shankar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Gurudev Sri Sri Ravi Shankar is a humanitarian leader, spiritual teacher, and ambassador of peace. 
                    His vision of a stress-free, violence-free society has inspired millions worldwide to embrace 
                    ancient wisdom for modern living.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-[#E74902]" />
                      <span className="text-gray-700">Founded Art of Living Foundation in 1981</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-[#E74902]" />
                      <span className="text-gray-700">Reached over 180 countries worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-[#E74902]" />
                      <span className="text-gray-700">Touched millions of lives globally</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="relative">
                <Image
                  src="/Gurudev-Sri-Sri-Ravi-Shankar.jpg"
                  alt="Gurudev Sri Sri Ravi Shankar"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">&ldquo;When you are happy, you can serve the world better.&rdquo;</p>
                  <p className="text-xs mt-1 opacity-75">- Gurudev Sri Sri Ravi Shankar</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-[#E74902] flex items-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  Our Mission
                </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To create a stress-free, violence-free society by empowering individuals with 
                ancient techniques for inner peace, happiness, and spiritual growth. We believe 
                that when individuals are happy and peaceful, they naturally contribute to 
                creating a better world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#E74902] flex items-center">
                <Star className="w-6 h-6 mr-3" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                A world where every individual experiences inner peace, happiness, and fulfillment. 
                We envision communities where people live in harmony with themselves, others, and 
                nature, creating a ripple effect of positive change across the globe.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">What We Offer</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive programs designed to enhance your physical, mental, and spiritual well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn ancient meditation techniques for inner peace, stress relief, and spiritual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Yoga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Physical and spiritual wellness through traditional yoga practices and postures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Breathing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master powerful breathing techniques that boost immunity and reduce stress.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join community service initiatives and connect with like-minded individuals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-[#E74902] mb-4">Compassion</h3>
                <p className="text-gray-600">
                  We approach every individual with love, understanding, and unconditional acceptance, 
                  creating a safe space for personal growth and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-[#E74902] mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of honesty, authenticity, and ethical conduct 
                  in all our teachings and interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#E74902] mb-4">Service</h3>
                <p className="text-gray-600">
                  We are committed to serving humanity and contributing to the greater good, 
                  making a positive impact in our communities and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold text-[#000000] mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join our community and discover the transformative power of ancient wisdom 
                for modern living. Your journey to inner peace starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#E74902] hover:bg-[#FF0000] text-white px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Our Programs
                </Button>
                <Button variant="outline" size="lg" className="border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD] px-8 py-3">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
