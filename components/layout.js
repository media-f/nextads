import '@picocss/pico'
import Menu from './menu'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'


export default function Layout({ children }) {
    return (
      <>
        <GoogleTagManager gtmId="GTM-WXNS2L4C" />
        
        <main className="container">
          {children}
        </main>

        <Script
          src="https://adnz.co/header.js?adTagId=279"
          strategy="lazyOnload"
          onLoad={() =>
              window.audienzz.refreshAds()
          }
        />
        <Script
          src="https://native.pubonline.ch/nativeads.js"
          strategy="lazyOnload"
          onLoad={() =>
              window.pubonline.loadAds()
          }
        />
       
      </>
    )
  }