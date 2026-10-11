import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'], variable: '--font-inter' })
const display = Instrument_Serif({ subsets: ['latin'], variable: '--font-display', weight: '400' })

export const metadata: Metadata = {
  title: 'Field / Notes — Selected Work',
  description: 'A curated archive of identities, images, and spaces by Field / Notes.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ef',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
