import '@picocss/pico'
import Menu from './menu'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'


export default function Layout({ children }) {
    return (
      <>
        <GoogleTagManager gtmId="GTM-NX3V39QK" />
        
        <main className="container">
          {children}
        </main>

       

        
        <Script
          data-cmp-src="https://native.pubonline.ch/nativeads.js"
          strategy="lazyOnload"
          onLoad={() =>
              window.pubonline.loadAds()
          }
        />
       
      </>
    )
  }