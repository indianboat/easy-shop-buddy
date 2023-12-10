import { Inter } from 'next/font/google'
import './globals.css';
import PrelineScript from './components/Preline/PrelineScript';
import NavbarComponent from './components/Navbar/Navbar';
import Provider from './components/ThemeProvider/Provider';
import FooterComponent from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Shop Buddy',
  description: 'E-commerce web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <PrelineScript />
          <NavbarComponent />
          {children}
          <FooterComponent />
        </Provider>
      </body>
    </html>
  )
}
