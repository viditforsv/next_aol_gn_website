import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, IndianRupee, Users } from "lucide-react"
import { donations } from "./donations-data"

export const metadata: Metadata = {
  title: "Rudra Pooja 2026 – Donations | Art of Living Great Noida",
  description:
    "Gratitude to all the donors supporting Rudra Pooja 2026 at Art of Living Great Noida.",
}

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)

export default function RudraPoojaDonationsPage() {
  const sorted = [...donations].sort((a, b) => b.amount - a.amount)
  const total = donations.reduce((sum, d) => sum + d.amount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CD] to-[#F6CB62]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
            Rudra Pooja 2026 – Donations
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            With heartfelt gratitude, we acknowledge the generous contributions
            of our community members towards Rudra Pooja 2026.
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-6 pb-6 text-center">
              <IndianRupee className="w-8 h-8 text-[#E74902] mx-auto mb-2" />
              <div className="text-3xl font-bold text-[#000000]">{formatINR(total)}</div>
              <div className="text-gray-600 mt-1">Total Contributions</div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62]">
            <CardContent className="pt-6 pb-6 text-center">
              <Users className="w-8 h-8 text-[#E74902] mx-auto mb-2" />
              <div className="text-3xl font-bold text-[#000000]">{donations.length}</div>
              <div className="text-gray-600 mt-1">Generous Donors</div>
            </CardContent>
          </Card>
        </div>

        {/* Donor list */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#F6CB62] max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-[#E74902] flex items-center">
              <Heart className="w-5 h-5 mr-3" />
              Our Donors
            </CardTitle>
            <CardDescription>
              We thank every donor for their generosity and support
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sorted.length === 0 ? (
              <p className="text-gray-600 text-center py-8">
                The donor list will be updated soon.
              </p>
            ) : (
              <ul className="divide-y divide-[#FFF0CD]">
                {sorted.map((donation, index) => (
                  <li
                    key={`${donation.name}-${index}`}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-gray-800">{donation.name}</span>
                    <span className="font-semibold text-[#E74902]">
                      {formatINR(donation.amount)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-[#F6CB62] text-[#E74902] hover:bg-[#FFF0CD]"
          >
            <Link href="/events/rudra-pooja-2026">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rudra Pooja 2026
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
