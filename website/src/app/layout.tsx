import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import DocsShell from '@/components/DocsShell'
import '@/vendor/tailsass-ui.css'
import '@/styles/globals.scss'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Tailsass UI',
  description: 'Semantic UI components built on Tailsass utilities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body style={{ fontFamily: 'var(--font-dm-sans), Segoe UI, sans-serif' }}>
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  )
}
