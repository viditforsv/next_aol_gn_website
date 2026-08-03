// Gallery for Rudra Pooja 2026.
//
// PHOTOS: drop image files into  public/gallery/rudra-pooja-2026/
// then list them here as { src: "/gallery/rudra-pooja-2026/<filename>", alt: "caption" }.
//
// VIDEOS: either
//   - YouTube:    { youtubeId: "dQw4w9WgXcQ", title: "..." }   (the part after watch?v=)
//   - local file: { src: "/gallery/rudra-pooja-2026/<file>.mp4", title: "..." }

export interface GalleryPhoto {
  src: string
  alt: string
}

export interface GalleryVideo {
  title: string
  youtubeId?: string
  src?: string
}

export const photos: GalleryPhoto[] = [
  {
    src: "/gallery/rudra-pooja-2026/rudra-pooja-01.jpg",
    alt: "Pundits preparing the pooja stage decorated with marigold garlands and baskets of mangoes",
  },
  {
    src: "/gallery/rudra-pooja-2026/rudra-pooja-02.jpg",
    alt: "Pundits offering garlands at the altar with Gurudev's portrait",
  },
  {
    src: "/gallery/rudra-pooja-2026/rudra-pooja-03.jpg",
    alt: "Adorning the Shiva Linga with marigold and rose garlands during the pooja",
  },
]

export const videos: GalleryVideo[] = [
  // { youtubeId: "XXXXXXXXXXX", title: "Rudra Pooja highlights" },
  // { src: "/gallery/rudra-pooja-2026/highlights.mp4", title: "Rudra Pooja highlights" },
]
