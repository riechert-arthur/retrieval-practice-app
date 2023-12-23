import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: '3L Learning App',
  description: 'An app to practice desirable difficulties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-mono'>
        <div className='p-5'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
