import './globals.css'
import type { Metadata } from 'next'
import {SmoothScrollContainer} from "@/components";

export const metadata: Metadata = {
  title: 'Test work',
  description: 'Test work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollContainer>
          {children}
        </SmoothScrollContainer>
      </body>
    </html>
  )
}
