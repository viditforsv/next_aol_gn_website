"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#FFF0CD] border-t border-[#F6CB62]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/aol_logo.svg"
                alt="Art of Living Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#E74902]">Art of Living</span>
                <span className="text-sm font-medium text-gray-600">Great Noida Chapter</span>
              </div>
            </Link>
            <p className="text-gray-700 mb-4 max-w-md">
              Join our community to learn ancient meditation techniques, yoga practices, 
              and breathing exercises for inner peace and spiritual growth.
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Great Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#E74902] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-700 hover:text-[#E74902] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-700 hover:text-[#E74902] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-[#E74902] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#E74902] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#F6CB62] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Art of Living Great Noida Chapter. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-[#E74902]" />
              <span>in India by</span>
              <a 
                href="https://obilio.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E74902] hover:text-[#FF0000] transition-colors ml-1 font-medium"
              >
                obilio.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}