import { Roboto_Flex } from 'next/font/google'
import './globals.css'
import { getTheme } from './lib/getTheme';

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Ragbot',
  description: 'Powered by DataStax and Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}