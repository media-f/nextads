import Columns from '../components/columns'
import Script from 'next/script'
import { useEffect } from 'react'
import Menu from "../components/menu";

export default function Home() {

    useEffect(() => {
        if(window.pubonline) window.pubonline.loadAds()
        if(window.htag) window.htag.api('1').refreshAds()
        setTimeout(() => {
            const { googletag } = window
            googletag.cmd.push(() => {
                googletag.display('lg_wideboard_1');
                googletag.pubads().refresh();
            })
         
            }, 300)
      })

    return <>

    <section>
        <h1>Home</h1>

        <Menu></Menu>

        <div className="adslot wideboard" id="adnz_wideboard_1"></div>

        <Columns></Columns>

        <div data-placement="qbU0VKDGyS" data-items="3"></div>
            
        <Columns></Columns>

        <Columns><div data-placement="qbU0VKDGyS" data-items="1"></div></Columns>
        
        <Columns></Columns>
        
        <div id='lg_wideboard_1' className="adslot wideboard"></div>

        <Columns></Columns>

        <Columns><div className="adslot rectangle" id="adnz_rectangle_1"></div></Columns>

    </section>


    <aside>
        <div className='adslot halfpage' id="adnz_halfpage_1"></div>
    </aside>
   
   
    
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

    <Script
          src="https://adnz.co/header.js?adTagId=279"
          strategy="lazyOnload"
        />
    
    </>
}