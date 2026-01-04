"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Zap,
  Shield,
  Brain,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  HelpCircle,
  MapPin
} from "lucide-react"

export default function HappinessProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Happiness Program
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Learn the world&apos;s most powerful breathing technique - Sudarshan Kriya™ loved and practiced by 45 million people around the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#F6CB62]">
              <span className="text-[#E74902] font-semibold">Remove Stress</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#F6CB62]">
              <span className="text-[#E74902] font-semibold">Improve Relationships</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#F6CB62]">
              <span className="text-[#E74902] font-semibold">Boost Immunity</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="text-lg">2-3hrs/day in a 3-day & 6-day format</span>
          </div>
        </div>

        {/* Course Registration Cards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Register for Happiness Program in Greater Noida</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose from our available course batches and start your journey to happiness today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Registration Card 1 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-[#E74902] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Batch 1
                  </div>
                  <Sparkles className="w-6 h-6 text-[#F6CB62]" />
                </div>
                <CardTitle className="text-2xl text-[#E74902]">Happiness Program</CardTitle>
                <CardDescription className="text-base">
                  Greater Noida Chapter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Greater Noida, Uttar Pradesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Limited seats available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Certified instructors</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Join our transformative Happiness Program and learn Sudarshan Kriya™, the powerful breathing technique that has transformed millions of lives worldwide.
                </p>
                <Button 
                  asChild
                  className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white text-lg py-6"
                >
                  <a 
                    href="https://aolt.in/942826" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Registration Card 2 */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-[#E74902] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Batch 2
                  </div>
                  <Sparkles className="w-6 h-6 text-[#F6CB62]" />
                </div>
                <CardTitle className="text-2xl text-[#E74902]">Happiness Program</CardTitle>
                <CardDescription className="text-base">
                  Greater Noida Chapter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Greater Noida, Uttar Pradesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Limited seats available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#E74902]" />
                    <span className="text-gray-700">Certified instructors</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience the life-changing benefits of Sudarshan Kriya™ in our supportive community environment. Perfect for beginners and those seeking deeper transformation.
                </p>
                <Button 
                  asChild
                  className="w-full bg-[#E74902] hover:bg-[#FF0000] text-white text-lg py-6"
                >
                  <a 
                    href="https://aolt.in/942831" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Will I Get Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">What Will I Get From This Program?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the transformative benefits of the Happiness Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E74902] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Increased Peace of Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover effective techniques to calm the mind and bring more peace and joy to your daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F6CB62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">More Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Overcome fatigue and experience higher energy levels. Accomplish all that you set out to do for the day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ECA55A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Eliminate Stress and Anxiety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn research-backed ways to reduce stress, relieve anxiety & relax even amidst challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#E74902]">Mastery Over Your Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The program shares ancient secrets to deal with the ups and downs of modern life. Learn to live with more awareness and wisdom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-[#E74902] mb-4">About the Happiness Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                The Happiness Program is a comprehensive course that introduces you to <strong>Sudarshan Kriya™</strong>, 
                a powerful breathing technique developed by Gurudev Sri Sri Ravi Shankar. This unique rhythmic breathing 
                practice has been scientifically proven to reduce stress, improve mental clarity, and enhance overall well-being.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Over 45 million people worldwide have experienced the transformative benefits of this program. 
                Whether you&apos;re dealing with stress, anxiety, or simply seeking a deeper sense of peace and happiness, 
                the Happiness Program offers practical tools that you can use every day.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E74902] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Program Duration</h4>
                    <p className="text-gray-600">2-3 hours per day, available in both 3-day and 6-day formats to suit your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E74902] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What You&apos;ll Learn</h4>
                    <p className="text-gray-600">Sudarshan Kriya™, meditation techniques, yoga, and practical wisdom for daily life</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E74902] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certified Instructors</h4>
                    <p className="text-gray-600">Learn from experienced, certified Art of Living teachers in Greater Noida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E74902] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lifetime Support</h4>
                    <p className="text-gray-600">Join a global community and access follow-up sessions and advanced programs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Science Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">What Does Science Say About Sudarshan Kriya?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Over 100 independent studies globally published in peer review journals have demonstrated significant benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-[#E74902] mb-2">37%</div>
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#E74902] mr-2" />
                  <span className="text-lg font-semibold text-gray-900">Increase in Calm</span>
                </div>
                <p className="text-gray-600">In just 4 weeks of regular practice</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-[#E74902] mb-2">23%</div>
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#E74902] mr-2" />
                  <span className="text-lg font-semibold text-gray-900">Reduce Anxiety</span>
                </div>
                <p className="text-gray-600">Measurable reduction in 6 weeks</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-[#E74902] mb-2">25%</div>
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#E74902] mr-2" />
                  <span className="text-lg font-semibold text-gray-900">Social Connection</span>
                </div>
                <p className="text-gray-600">Increase in social connection in 4 weeks</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Common questions about the Happiness Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-lg text-[#E74902] flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Are there any side-effects to this technique?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  An undying smile is the only side-effect! 😊 The Sudarshan Kriya™ is practiced globally by millions of people 
                  every day with documented health benefits. It is absolutely safe to practice. If you have a medical history 
                  of asthma, high blood pressure, heart problems, or back pains, we will guide you differently during the session.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-lg text-[#E74902] flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Will this practice improve my health?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, of course! Regular practice of the Sudarshan Kriya™ is known to improve sleep, boost immunity, and lower 
                  stress and depression levels. Be sure to let your teacher know your ailments beforehand so they can give you 
                  the best and most customized experience!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-lg text-[#E74902] flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Why do you charge fees?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Reason one, to ensure you commit your time to the workshop. Reason two, apart from teaching you essential life 
                  skills, your donation funds many service projects in India. For instance, sending 1,00,000+ tribal children 
                  to school, reviving 75 rivers, empowering 4,75,000+ rural youth with livelihood skills, and lighting 700+ 
                  villages with solar lamps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
              <CardHeader>
                <CardTitle className="text-lg text-[#E74902] flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  I have no stress. Why should I still join?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If you&apos;re not stressed, great! You&apos;re living the best life. But consider this: Do you start saving money 
                  only when you&apos;re running out of it? Or start exercising only when you&apos;ve lost your health? No, right? 
                  So how about building those inner reserves of resilience and strength for times when you could need them?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold text-[#000000] mb-4">Ready to Begin Your Journey to Happiness?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of people in Greater Noida who have transformed their lives through the Happiness Program. 
                Register today and take the first step towards a stress-free, joyful life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-[#E74902] hover:bg-[#FF0000] text-white px-8 py-3"
                >
                  <a 
                    href="https://aolt.in/942826" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Register for Batch 1
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD] px-8 py-3"
                >
                  <a 
                    href="https://aolt.in/942831" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Register for Batch 2
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

