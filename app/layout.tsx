import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lakshmi Jhansi Kadali | MCA Student | AI & Full Stack Developer',
  description: 'Portfolio of Lakshmi Jhansi Kadali, an MCA student specializing in Artificial Intelligence and Full Stack Development. Passionate about building intelligent, scalable solutions.',
  keywords: ['Lakshmi Jhansi Kadali', 'MCA student', 'AI developer', 'Full Stack Developer', 'portfolio', 'JavaScript', 'MongoDB', 'Whisper AI'],
  authors: [{ name: 'Lakshmi Jhansi Kadali' }],
  creator: 'Lakshmi Jhansi Kadali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lakshmi-jhansi.vercel.app',
    title: 'Lakshmi Jhansi Kadali | AI & Full Stack Developer',
    description: 'Portfolio of Lakshmi Jhansi Kadali — MCA student, AI enthusiast, and Full Stack Developer.',
    siteName: 'Lakshmi Jhansi Kadali Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lakshmi Jhansi Kadali Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshmi Jhansi Kadali | AI & Full Stack Developer',
    description: 'Portfolio of Lakshmi Jhansi Kadali — MCA student, AI enthusiast, and Full Stack Developer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lakshmi Jhansi Kadali',
  jobTitle: 'MCA Student | AI & Full Stack Developer',
  description: 'MCA student specializing in Artificial Intelligence and Full Stack Development with CGPA 9.0',
  sameAs: [
    'https://www.linkedin.com/in/jhansi-lakshmi-5b0a5032b/',
    'https://github.com/lakshmi-jhansi',
    'https://leetcode.com/u/KadaliLakshmiJhansi/',
  ],
  knowsAbout: ['JavaScript', 'HTML', 'CSS', 'SQL', 'MongoDB', 'Python', 'AI', 'Machine Learning'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Master of Computer Applications Program',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0F] text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
