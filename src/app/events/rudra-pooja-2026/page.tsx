import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Clock,
  ExternalLink,
  Flame,
  Heart,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  Ticket,
  Users,
} from "lucide-react"
import {
  poojaDetails,
  contributionTiers,
  peopleInvolved,
  yajmans,
  sankalpaTakers,
} from "./pooja-data"
import { donations } from "./donations/donations-data"
import { photos, videos } from "./gallery-data"

export const metadata: Metadata = {
  title: "Rudra Pooja 2026 | Art of Living Great Noida",
  description:
    "Shravan Masa Samoohik Rudra Puja on 22 August 2026 at Club Royal, Purvanchal Royal City, Greater Noida — details, contribution tiers, Yajmans, Sankalpa Takers, and donations.",
}

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)

function NameList({ names, emptyMessage }: { names: string[]; emptyMessage: string }) {
  if (names.length === 0) {
    return <p className="text-gray-600 text-center py-6">{emptyMessage}</p>
  }
  return (
    <ul className="divide-y divide-[#FFF0CD]">
      {names.map((name, index) => (
        <li key={`${name}-${index}`} className="py-3 text-gray-800">
          {name}
        </li>
      ))}
    </ul>
  )
}

export default function RudraPoojaPage() {
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-2">Rudra Pooja 2026</h1>
          <p className="text-lg font-medium text-[#E74902] mb-4">{poojaDetails.officialName}</p>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            A sacred Vedic ceremony invoking the blessings of Lord Shiva through
            the powerful chants of the Sri Rudram, performed in the holy month of Shravan.
          </p>
        </div>

        {/* About & Event details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-xl text-[#E74902] flex items-center">
                <Flame className="w-5 h-5 mr-3" />
                About the Pooja
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Shravan means to listen. This sacred month invites us to listen deeply
                to wisdom, to our elders, and to the voice within. The Rudra Puja
                (Rudrabhishek) is performed in the month of Shravan to facilitate our
                inward journey — adoring the Shiva tattva washes away negativity and
                bestows abundance.
              </p>
              <p>
                Sankalpas are offered for washing away one&apos;s afflictions, and for
                bringing peace, prosperity, and happiness, along with family togetherness.
              </p>
              <p>
                The pooja will be performed in accordance with the Vaidic tradition by a
                team of a Sanyasi and two learned Vedic pandits. Everyone is welcome —
                no prior experience is needed.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-xl text-[#E74902] flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#E74902] shrink-0" />
                  <span className="text-gray-700">{poojaDetails.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#E74902] shrink-0" />
                  <span className="text-gray-700">{poojaDetails.time}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E74902] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{poojaDetails.venue}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#E74902] shrink-0" />
                  <span className="text-gray-700">Open to all</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-[#E74902] hover:bg-[#FF0000] text-white">
                <a href={poojaDetails.officialPage} target="_blank" rel="noopener noreferrer">
                  Take Sankalpa
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sankalpa & Contribution tiers */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] max-w-5xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-[#E74902] flex items-center">
              <Ticket className="w-5 h-5 mr-3" />
              Sankalpa &amp; Contribution
            </CardTitle>
            <CardDescription>
              Choose a seva that suits you — each tier includes entry passes for the pooja
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-[#F6CB62] text-sm text-gray-600 uppercase">
                    <th className="py-3 pr-4 font-medium">Seva</th>
                    <th className="py-3 pr-4 font-medium">Contribution</th>
                    <th className="py-3 font-medium">Entry Passes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FFF0CD]">
                  {contributionTiers.map((tier) => (
                    <tr key={tier.title}>
                      <td className="py-3 pr-4 text-gray-800 font-medium">{tier.title}</td>
                      <td className="py-3 pr-4 font-semibold text-[#E74902]">
                        {formatINR(tier.amount)}
                      </td>
                      <td className="py-3 text-gray-700">{tier.entries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Yajmans & Sankalpa Takers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-xl text-[#E74902] flex items-center">
                <Flame className="w-5 h-5 mr-3" />
                Yajmans
              </CardTitle>
              <CardDescription>
                The hosts of the pooja, on whose behalf the ceremony is performed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NameList
                names={yajmans}
                emptyMessage="The list of Yajmans will be announced soon."
              />
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardHeader>
              <CardTitle className="text-xl text-[#E74902] flex items-center">
                <ScrollText className="w-5 h-5 mr-3" />
                Sankalpa Takers
              </CardTitle>
              <CardDescription>
                Devotees taking the sankalpa — the sacred intention — for this pooja
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NameList
                names={sankalpaTakers}
                emptyMessage="The list of Sankalpa Takers will be announced soon."
              />
            </CardContent>
          </Card>
        </div>

        {/* People Involved */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] max-w-5xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-[#E74902] flex items-center">
              <Users className="w-5 h-5 mr-3" />
              People Involved
            </CardTitle>
            <CardDescription>
              Reach out for registrations, sankalpas, or any questions about the pooja
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {peopleInvolved.map((person) => (
                <div
                  key={person.name}
                  className="rounded-lg border border-[#F6CB62] bg-[#FFF0CD]/50 p-4"
                >
                  <div className="font-semibold text-gray-900">{person.name}</div>
                  <div className="text-sm text-[#E74902] font-medium uppercase mb-3">
                    {person.role}
                  </div>
                  <div className="space-y-2 text-sm">
                    <a
                      href={`tel:+91${person.mobile}`}
                      className="flex items-center space-x-2 text-gray-700 hover:text-[#E74902]"
                    >
                      <Phone className="w-4 h-4 text-[#E74902]" />
                      <span>{person.mobile}</span>
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center space-x-2 text-gray-700 hover:text-[#E74902]"
                    >
                      <Mail className="w-4 h-4 text-[#E74902]" />
                      <span>{person.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] max-w-5xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-[#E74902] flex items-center">
              <Camera className="w-5 h-5 mr-3" />
              Gallery
            </CardTitle>
            <CardDescription>
              Moments of devotion — photos and videos from the pooja
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {photos.length === 0 && videos.length === 0 ? (
              <p className="text-gray-600 text-center py-6">
                Photos and videos will be added here soon.
              </p>
            ) : (
              <>
                {photos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {photos.map((photo) => (
                      <div
                        key={photo.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#F6CB62]"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {videos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {videos.map((video) => (
                      <div key={video.youtubeId ?? video.src}>
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-[#F6CB62] bg-black">
                          {video.youtubeId ? (
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          ) : (
                            <video
                              src={video.src}
                              controls
                              preload="metadata"
                              className="absolute inset-0 w-full h-full"
                            />
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{video.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Donations */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] max-w-5xl mx-auto mb-12">
          <CardContent className="pt-8 pb-8 text-center">
            <Heart className="w-8 h-8 text-[#E74902] mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-[#000000] mb-2">Donations</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              {donations.length} generous donors have contributed{" "}
              <span className="font-semibold text-[#E74902]">{formatINR(totalDonations)}</span>{" "}
              towards this pooja. View the full list of donors and their contributions.
            </p>
            <Button asChild className="bg-[#E74902] hover:bg-[#FF0000] text-white">
              <Link href="/events/rudra-pooja-2026/donations">
                View All Donations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]"
          >
            <Link href="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
