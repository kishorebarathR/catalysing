import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
