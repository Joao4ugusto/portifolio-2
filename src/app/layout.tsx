import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'João Augusto',
  description: 'Meu portfólio pessoal para mostrar meus projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-color-black text-white">{children}</body>
    </html>
  )
}
