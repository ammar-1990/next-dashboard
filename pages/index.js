import Head from 'next/head'

import { Inter } from 'next/font/google'
import DashBoard from '@/components/DashBoard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
  <DashBoard />
      </main>
    </>
  )
}
