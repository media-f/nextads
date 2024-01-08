import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";

export default function Agri() {
  useEffect(() => {

    window.googletag = window.googletag || {cmd: []};

    // destroy GPT ads slots
    if (window.googletag && typeof window.googletag.destroySlots === "function") {
      window.googletag.destroySlots();
      console.log('destroy ad slots')
    }
        
    googletag.cmd.push(function() {
      //define ad slots present on the page
        let width = window.innerWidth;
        if (width > 994) {
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_3', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_3').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_4', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_4').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_HALFPAGE_1', [[300, 250], [300, 600]], 'AGRI_HALFPAGE_1').addService(googletag.pubads());
        }
        else {
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[300,250]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[300,250], [320,460]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_3', [[300,250], [320,460]], 'AGRI_WIDEBOARD_3').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_4', [[300,250], [320,460]], 'AGRI_WIDEBOARD_4').addService(googletag.pubads());
        }

        googletag.defineSlot('/23038965275/AGRI_RECTANGLE_1', [[300,250], [250,250]], 'AGRI_RECTANGLE_1').addService(googletag.pubads());
        googletag.defineSlot('/23038965275/AGRI_RECTANGLE_2', [[300,250], [250,250]], 'AGRI_RECTANGLE_2').addService(googletag.pubads());
        
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();
        
        //wait 100ms before displaying ads
        setTimeout(function(){
          console.log("displaying ads");
          googletag.display("AGRI_WIDEBOARD_1");
          googletag.display("AGRI_WIDEBOARD_2");
          googletag.display("AGRI_WIDEBOARD_3");
          googletag.display("AGRI_WIDEBOARD_4");
          googletag.display("AGRI_HALFPAGE_1");
          googletag.display("AGRI_RECTANGLE_1");
          googletag.display("AGRI_RECTANGLE_2");
          googletag.pubads().refresh();
        }, 100);
        
        
          
        
    });

  }, []);

  return (
    <>
      <section>
        <h3>AGRI_WIDEBOARD_1</h3>
        <div
          id="AGRI_WIDEBOARD_1"
          className="adslot adslot__agri wideboard"
        ></div>


        <Menu></Menu>  

        <h1>Journal Agri</h1>
        <Link href="/agri-page"> Page article Agri</Link>
        <Columns>
          <h3>AGRI_RECTANGLE_1</h3>
          <div id="AGRI_RECTANGLE_1" className="adslot adslot__agri rectangle"></div>
        </Columns>
        <Columns></Columns>

        <h3>AGRI_WIDEBOARD_2</h3>
        <div
          id="AGRI_WIDEBOARD_2"
          className="adslot adslot__agri wideboard"
        ></div>
        <Columns></Columns>

        <h3>AGRI_WIDEBOARD_3</h3>
        <div
          id="AGRI_WIDEBOARD_3"
          className="adslot adslot__agri wideboard"
        ></div>

        <Columns>
        <h3>AGRI_RECTANGLE_2</h3>
          <div id="AGRI_RECTANGLE_2" className="adslot adslot__agri rectangle"></div>
        </Columns>
        <Columns></Columns>

        <h3>AGRI_WIDEBOARD_4</h3>
        <div
          id="AGRI_WIDEBOARD_4"
          className="adslot adslot__agri wideboard"
        ></div>

        <Columns></Columns>

      </section>
      <aside>
        <h3>AGRI_HALFPAGE_1</h3>
        <div
          id="AGRI_HALFPAGE_1"
          className="adslot adslot__agri halfpage"
        ></div>
      </aside>

      <Script
        id="admanager-script"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
      />
      
    </>
  );
}
