import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/NavbarComponent/Navbar'
import Footer from './components/FooterComponent/Footer'
import Provider from './components/ThemeComponent/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy shop buddy',
  description: 'Ecommerce web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="container w-11/12 mx-auto py-8">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
