"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Users,
  Heart,
  Calendar
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with the Art of Living Great Noida Chapter. We&apos;re here to help you 
            begin your journey towards inner peace and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-[#E74902] flex items-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E74902] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#E74902] mb-1">Phone</h3>
                    <p className="text-gray-700 mb-1">+91 81307 11689</p>
                    <p className="text-sm text-gray-600">Available 9 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F6CB62] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#E74902] mb-1">Email</h3>
                    <p className="text-gray-700 mb-1">info@aolgreatnoida.org</p>
                    <p className="text-sm text-gray-600">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ECA55A] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#E74902] mb-1">Address</h3>
                    <p className="text-gray-700 mb-1">Great Noida, Uttar Pradesh</p>
                    <p className="text-sm text-gray-600">India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#E74902] mb-1">Office Hours</h3>
                    <p className="text-gray-700 mb-1">Monday - Saturday</p>
                    <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl text-[#E74902]">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button variant="outline" className="w-full border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Session
                </Button>
                <Button variant="outline" className="w-full border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-[#E74902]">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="meditation">Meditation</option>
                      <option value="yoga">Yoga</option>
                      <option value="breathing">Breathing Techniques</option>
                      <option value="community">Community Service</option>
                      <option value="events">Events & Programs</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74902] focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white py-3 text-lg font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#E74902] mb-4">Why Choose Art of Living?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="font-semibold text-[#E74902] mb-2">Compassionate Guidance</h4>
                    <p className="text-gray-600">Our experienced teachers provide personalized support for your spiritual journey.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="font-semibold text-[#E74902] mb-2">Supportive Community</h4>
                    <p className="text-gray-600">Join a welcoming community of like-minded individuals on the path to inner peace.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#E74902] mb-2">Flexible Programs</h4>
                    <p className="text-gray-600">Choose from various programs that fit your schedule and spiritual needs.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
