import Script from 'next/script'
import { useEffect } from 'react'
import Columns from '../components/columns'


export default function Agri() {

    useEffect(() => {
        setTimeout(() => {
            const { googletag } = window
            if(googletag.cmd) {
                console.log('displaying ads')
                googletag.cmd.push(() => {
                    googletag.display('AGRI_WIDEBOARD_1');
                    googletag.display('AGRI_WIDEBOARD_2');
                    googletag.display('AGRI_WIDEBOARD_3');
                    googletag.display('AGRI_HALFPAGE_1');
                    googletag.pubads().refresh();
                })
            }
     
        }, 1000)
    }, [])

  return <>

    <h1>Journal Agri</h1>
    
    <div id='AGRI_WIDEBOARD_1' className="adslot wideboard"></div>

    <Columns></Columns>
         
    <Columns></Columns>    
    
    <div id='AGRI_WIDEBOARD_2' className="adslot wideboard"></div>
    
    <Columns></Columns>    

    <div id='AGRI_WIDEBOARD_3' className="adslot wideboard"></div>
    

    <Columns></Columns>

    <div id='AGRI_HALFPAGE_1' className='adslot halfpage'></div>

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
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_3', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_3').addService(googletag.pubads());
            }
            else {
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[300,250]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[300,250], [320,460]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
                googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_3', [[300,250], [320,460]], 'AGRI_WIDEBOARD_3').addService(googletag.pubads());
            }
            googletag.defineSlot('/23038965275/AGRI_HALFPAGE_1', [[300, 250], [300, 600]], 'AGRI_HALFPAGE_1').addService(googletag.pubads());
            
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        })
        
    `}</Script>

        
      </>
}