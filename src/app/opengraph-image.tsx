import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Art of Living - Great Noida Chapter'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFF0CD 0%, #F6CB62 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(231, 73, 2, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(246, 203, 98, 0.2) 0%, transparent 50%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#E74902',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                fontSize: '40px',
                color: 'white',
              }}
            >
              🧘
            </div>
            <div>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '8px',
                }}
              >
                Art of Living
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#E74902',
                }}
              >
                Great Noida Chapter
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#374151',
              maxWidth: '800px',
              lineHeight: '1.4',
              marginBottom: '40px',
            }}
          >
            Join us for meditation, yoga, breathing techniques, and community service programs
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              fontSize: '18px',
              color: '#6B7280',
            }}
          >
            <span>🧘 Meditation</span>
            <span>🧘‍♀️ Yoga</span>
            <span>🫁 Breathing</span>
            <span>❤️ Service</span>
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #E74902 0%, #F6CB62 50%, #ECA55A 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
