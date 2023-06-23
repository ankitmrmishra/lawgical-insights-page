import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/pages/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LAWGICAL INSIGHTS',
  description: 'Creating awareness..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" scrollbar-hide" >
<Navbar/>
{children}
      
     
      </body>
    </html>
  )
}
