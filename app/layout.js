import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  // title: 'Bitcoin Iconic Gifts & Investment',
  // title: 'Empower Your Gifting!',
  title: 'Empower Your Gifting with Bitcoin and AI',
  description: '🧡 Harness the power of Bitcoin and AI to buy innovative, memorable, and investment-worthy gifts for your loved ones.',
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
