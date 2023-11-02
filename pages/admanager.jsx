import Script from 'next/script'
import { useEffect } from 'react'
import Columns from '../components/columns'


export default function AdManager() {

    useEffect(() => {
        setTimeout(() => {
            const { googletag } = window
            if(googletag.cmd) {
                googletag.cmd.push(() => {
                    googletag.pubads().refresh();
                })
            }
     
        }, 300)
    })

  return <>

    <h1>Google Admanager</h1>
    
    <div id='lg_wideboard_1' className="adslot wideboard"></div>

    <Columns></Columns>

    <Columns><div id='lg_rectangle_1' className="adslot rectangle"></div></Columns>
            
    <Columns></Columns>    
    
    <div id='lg_wideboard_2' className="adslot wideboard"></div>

    <Columns></Columns>

    <div id='lg_halfpage_1' className='adslot halfpage'></div>

    <div></div>

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
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        })
        
    `}</Script>

        
      </>
}