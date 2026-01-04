import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Happiness Program in Greater Noida | Art of Living | Sudarshan Kriya",
  description: "Join the Happiness Program in Greater Noida and learn Sudarshan Kriya™ - the world's most powerful breathing technique. Remove stress, improve relationships, and boost immunity. Register now for 3-day or 6-day format programs.",
  keywords: [
    "Happiness Program Greater Noida",
    "Sudarshan Kriya Greater Noida",
    "Art of Living Greater Noida",
    "Happiness Program Noida",
    "Sudarshan Kriya Noida",
    "meditation Greater Noida",
    "stress relief Greater Noida",
    "breathing techniques Greater Noida",
    "Art of Living programs",
    "meditation classes Greater Noida",
    "yoga Greater Noida",
    "wellness programs Greater Noida"
  ],
  openGraph: {
    title: "Happiness Program in Greater Noida | Art of Living",
    description: "Learn Sudarshan Kriya™ in Greater Noida. Transform your life with the world's most powerful breathing technique. Register now!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happiness Program in Greater Noida | Art of Living",
    description: "Learn Sudarshan Kriya™ in Greater Noida. Transform your life with the world's most powerful breathing technique.",
  },
  alternates: {
    canonical: "/programs/happiness-program",
  },
}

export default function HappinessProgramLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

