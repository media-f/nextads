import Columns from '../components/columns'
import { useEffect } from 'react'
import Script from 'next/script'

export default function Native() {

    useEffect(() => {
        // native :
        if(window.pubonline) window.pubonline.loadAds()

        // google admanager :
        
        setTimeout(() => {
          const { googletag } = window
          if(googletag.cmd) {
              googletag.cmd.push(() => {
                googletag.display('lg_halfpage_1');
                googletag.display('lg_rectangle_1');
                googletag.pubads().refresh();
              })
          }
   
      }, 1000)
    
      

      })

    return <>

    <h1>Native</h1>
    
    <Columns></Columns>

    <div data-placement="qbU0VKDGyS" data-items="3"></div>

    <Columns></Columns>

    <Columns></Columns><div data-placement="qbU0VKDGyS" data-items="1"></div>

    <Columns><div className='adslot rectangle' id="lg_rectangle_1"></div></Columns>

    <Columns></Columns>

    <div data-placement="qbU0VKDGyS" data-items="3"></div>

    <div className='adslot halfpage' id="lg_halfpage"></div>

    <Script
        id="admanager-script"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
    />
    <Script id="define-slots" strategy="lazyOnload">{`
        window.googletag = window.googletag || {cmd: []};
        
        googletag.cmd.push(function() {
            let width = window.innerWidth;
            if (width > 994) {
                googletag.defineSlot('/95737030/LG_wideboard_1', [[994, 250], [994, 500], [994, 118]], 'lg_wideboard_1').addService(googletag.pubads());
                googletag.defineSlot('/95737030/LG_wideboard_2', [[994, 250], [994, 500], [994, 118]], 'lg_wideboard_2').addService(googletag.pubads());
            }
            else {
                googletag.defineSlot('/95737030/LG_wideboard_1', [[300,250]], 'lg_wideboard_1').addService(googletag.pubads());
                googletag.defineSlot('/95737030/LG_wideboard_2', [[300,250], [320,460]], 'lg_wideboard_2').addService(googletag.pubads());
            }
            googletag.defineSlot('/95737030/LG_halfpage_1', [[300, 250], [300, 600]], 'lg_halfpage_1').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_rectangle_1', [[320, 460], [300, 250]], 'lg_rectangle_1').addService(googletag.pubads());
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        })
        
    `}</Script>
       
    </>
}