import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import MyContextProvider from '@/components/context'

export default function App({ Component, pageProps }) {

  return <MyContextProvider><Layout><Component {...pageProps} /></Layout>
  </MyContextProvider> 
}
