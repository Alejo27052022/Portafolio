import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Stalin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={'bg-gradient-to-b from-gray-950 to-emerald-950'} >
        {children}
      </body>
    </html>
  )
}
