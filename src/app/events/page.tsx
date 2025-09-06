"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Clock3,
  Globe
} from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">Events & Programs</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for transformative events, workshops, and programs designed to enhance 
            your spiritual journey and bring peace to your life.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don&apos;t miss these special opportunities to deepen your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#E74902]" />
                    <span className="text-sm font-medium text-[#E74902]">Dec 15, 2024</span>
                  </div>
                  <div className="bg-[#E74902] text-white px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                </div>
                <CardTitle className="text-xl text-[#E74902]">Weekly Meditation Circle</CardTitle>
                <CardDescription>
                  Join our weekly community meditation session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">6:00 PM - 7:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Art of Living Center, Great Noida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Open to all levels</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Experience the power of group meditation and connect with like-minded individuals 
                  in our peaceful community setting.
                </p>
                <Button className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Event 2 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#E74902]" />
                    <span className="text-sm font-medium text-[#E74902]">Dec 22, 2024</span>
                  </div>
                  <div className="bg-[#F6CB62] text-black px-2 py-1 rounded-full text-xs font-medium">
                    Special
                  </div>
                </div>
                <CardTitle className="text-xl text-[#E74902]">Yoga Workshop</CardTitle>
                <CardDescription>
                  Learn traditional yoga postures and breathing techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Art of Living Center, Great Noida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Beginner friendly</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Discover the ancient art of yoga with our experienced instructors. 
                  Perfect for beginners and those looking to deepen their practice.
                </p>
                <Button className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Event 3 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#E74902]" />
                    <span className="text-sm font-medium text-[#E74902]">Jan 5, 2025</span>
                  </div>
                  <div className="bg-[#ECA55A] text-black px-2 py-1 rounded-full text-xs font-medium">
                    Retreat
                  </div>
                </div>
                <CardTitle className="text-xl text-[#E74902]">New Year Retreat</CardTitle>
                <CardDescription>
                  Start the new year with inner peace and clarity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Full Day Program</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Art of Living Center, Great Noida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Limited seats</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Join us for a transformative day of meditation, yoga, and spiritual practices 
                  to set positive intentions for the new year.
                </p>
                <Button className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regular Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Regular Programs</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ongoing programs you can join anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl text-[#E74902] flex items-center">
                  <Heart className="w-5 h-5 mr-3" />
                  Daily Meditation
                </CardTitle>
                <CardDescription>
                  Start your day with peace and clarity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock3 className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Every day at 6:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Art of Living Center</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">All levels welcome</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Join our daily meditation sessions to cultivate inner peace and start your day 
                  with positive energy and clarity.
                </p>
                <Button variant="outline" className="w-full mt-4 border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  Join Today
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl text-[#E74902] flex items-center">
                  <Globe className="w-5 h-5 mr-3" />
                  Community Service
                </CardTitle>
                <CardDescription>
                  Make a difference in your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Every Sunday</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Various locations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">All ages welcome</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Participate in our community service initiatives and contribute to making 
                  a positive impact in society through seva (selfless service).
                </p>
                <Button variant="outline" className="w-full mt-4 border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  Join Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Past Events Highlights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Recent Highlights</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A glimpse into our recent successful events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl text-[#E74902] flex items-center">
                  <Star className="w-5 h-5 mr-3" />
                  Gurudev&apos;s Birthday Celebration
                </CardTitle>
                <CardDescription>
                  November 13, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">150+ participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Special meditation session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Community feast</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  We celebrated Gurudev&apos;s birthday with a special meditation session, 
                  community feast, and heartfelt sharing of his teachings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl text-[#E74902] flex items-center">
                  <Heart className="w-5 h-5 mr-3" />
                  Diwali Celebration
                </CardTitle>
                <CardDescription>
                  November 1, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">200+ attendees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Cultural performances</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Community bonding</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Our Diwali celebration brought the community together with cultural performances, 
                  traditional rituals, and joyful festivities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold text-[#000000] mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Don&apos;t miss out on our upcoming events and programs. Join our community 
                to receive regular updates and invitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#E74902] hover:bg-[#FF0000] text-white px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Subscribe to Updates
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
