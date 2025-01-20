import '@picocss/pico'
import Menu from './menu'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'


export default function Layout({ children }) {
    return (
      <>
       <Script
            id="consentmanager-script" 
            data-cmp-ab="1" 
            src="https://cdn.consentmanager.net/delivery/autoblocking/2907bf3042f6f.js" 
            data-cmp-host="a.delivery.consentmanager.net"
            data-cmp-cdn="cdn.consentmanager.net" 
            data-cmp-codesrc="0"
        />

        <GoogleTagManager gtmId="GTM-NX3V39QK" />
        
        <main className="container">
          {children}
        </main>

       

        
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