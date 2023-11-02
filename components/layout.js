import '@picocss/pico'
import Menu from './menu'
import Script from 'next/script'

export default function Layout({ children }) {
    return (
      <>
        
        <main className="container">

          <Menu></Menu>  
              
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