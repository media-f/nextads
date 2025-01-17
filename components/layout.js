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
            id="consentmanager-script" 
            data-cmp-ab="1" 
            src="https://cdn.consentmanager.net/delivery/autoblocking/12a1afa951066.js" 
            data-cmp-host="b.delivery.consentmanager.net"
            data-cmp-cdn="cdn.consentmanager.net" 
            data-cmp-codesrc="0"
        />

        <Script
          data-cmp-src="https://adnz.co/header.js?adTagId=279"
          className="cmplazyload"
          data-cmp-vendor="783" 
          strategy="lazyOnload"
          onLoad={() =>
              window.audienzz.refreshAds()
          }
        />
        <Script
          data-cmp-src="https://native.pubonline.ch/nativeads.js"
          className="cmplazyload"
          data-cmp-vendor="c53197"
          strategy="lazyOnload"
          onLoad={() =>
              window.pubonline.loadAds()
          }
        />
       
      </>
    )
  }