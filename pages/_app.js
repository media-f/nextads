import Layout from '../components/layout'
import './../pages/styles.css'
import './../pages/ads.css'
import { useEffect } from 'react'
 
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
      
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}