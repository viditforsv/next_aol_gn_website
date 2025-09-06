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
  MapPin,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">Our Team</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated volunteers and teachers who make the Art of Living Great Noida Chapter 
            a vibrant community of peace, wisdom, and service.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our experienced teachers and coordinators guide our community with wisdom and compassion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-[#E74902] to-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Rajesh Kumar</CardTitle>
                <CardDescription className="text-lg font-medium">Chapter Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  With over 10 years of experience in spiritual practices, Rajesh leads our community 
                  with dedication and wisdom. He has been instrumental in organizing numerous programs 
                  and spreading the message of peace.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">rajesh@aol-greatnoida.org</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-[#F6CB62] to-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-16 h-16 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Priya Sharma</CardTitle>
                <CardDescription className="text-lg font-medium">Meditation Teacher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Priya is a certified meditation instructor who has been teaching ancient techniques 
                  for inner peace. Her gentle approach and deep understanding of spiritual practices 
                  have touched many lives in our community.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">+91 98765 43211</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">priya@aol-greatnoida.org</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-[#ECA55A] to-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-16 h-16 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Amit Singh</CardTitle>
                <CardDescription className="text-lg font-medium">Yoga Instructor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Amit brings traditional yoga practices to our community with modern understanding. 
                  His expertise in both physical postures and spiritual aspects of yoga makes him 
                  a beloved teacher among our members.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">+91 98765 43212</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-[#E74902]" />
                    <span className="text-sm text-gray-600">amit@aol-greatnoida.org</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Volunteer Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our dedicated volunteers who make everything possible through their selfless service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-lg text-[#E74902]">Suresh Patel</CardTitle>
                <CardDescription>Event Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Organizes community events and ensures smooth execution of all programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-black" />
                </div>
                <CardTitle className="text-lg text-[#E74902]">Meera Joshi</CardTitle>
                <CardDescription>Community Outreach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Connects with new members and spreads awareness about our programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-10 h-10 text-black" />
                </div>
                <CardTitle className="text-lg text-[#E74902]">Vikram Gupta</CardTitle>
                <CardDescription>Tech Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Manages our digital presence and helps with online programs and registrations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-lg text-[#E74902]">Anita Reddy</CardTitle>
                <CardDescription>Member Care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Provides support to new members and ensures everyone feels welcome in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl font-bold text-[#000000] mb-4">Join Our Team</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for passionate individuals who want to contribute to our mission 
                of spreading peace and happiness. Join us in making a difference!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-[#E74902] mb-2">Volunteer</h3>
                  <p className="text-gray-600 text-sm">Help organize events and support our community</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-[#E74902] mb-2">Teach</h3>
                  <p className="text-gray-600 text-sm">Share your knowledge and guide others on their journey</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#E74902] mb-2">Serve</h3>
                  <p className="text-gray-600 text-sm">Contribute to community service and social initiatives</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#E74902] hover:bg-[#FF0000] text-white px-8 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Volunteer
                </Button>
                <Button variant="outline" size="lg" className="border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD] px-8 py-3">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-[#E74902] mb-6">Get in Touch with Our Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-semibold text-[#E74902] mb-2">Phone</h4>
                  <p className="text-gray-600">+91 81307 11689</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-semibold text-[#E74902] mb-2">Email</h4>
                  <p className="text-gray-600">viditvia@gmail.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#E74902] mb-2">Location</h4>
                  <p className="text-gray-600">Great Noida, UP</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
