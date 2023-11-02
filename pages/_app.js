import Layout from '../components/layout'
import './../pages/styles.css'
import './../pages/ads.css'
import { useEffect } from 'react'
 
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
      if(window.audienzz) window.audienzz.refreshAds()
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}