import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";

export default function LG() {
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
            googletag.defineSlot('/95737030/LG_wideboard_1', [[994, 250], [994, 500], [994, 118]], 'LG_wideboard_1').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_2', [[994, 250], [994, 500], [994, 118]], 'LG_wideboard_2').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_3', [[994, 250], [994, 500], [994, 118]], 'LG_wideboard_3').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_4', [[994, 250], [994, 500], [994, 118]], 'LG_wideboard_4').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_halfpage_1', [[300, 250], [300, 600]], 'LG_halfpage_1').addService(googletag.pubads());
        }
        else {
            googletag.defineSlot('/95737030/LG_wideboard_1', [[300,250]], 'LG_wideboard_1').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_2', [[300,250], [320,460]], 'LG_wideboard_2').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_3', [[300,250], [320,460]], 'LG_wideboard_3').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_wideboard_4', [[300,250], [320,460]], 'LG_wideboard_4').addService(googletag.pubads());
        }

        googletag.defineSlot('/95737030/LG_rectangle_1', [[300,250], [250,250]], 'LG_rectangle_1').addService(googletag.pubads());
        googletag.defineSlot('/95737030/LG_rectangle_2', [[300,250], [250,250]], 'LG_rectangle_2').addService(googletag.pubads());
        
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();
        
        //wait 100ms before displaying ads
        setTimeout(function(){
          console.log("displaying ads");
          googletag.display("LG_wideboard_1");
          googletag.display("LG_wideboard_2");
          googletag.display("LG_wideboard_3");
          googletag.display("LG_wideboard_4");
          googletag.display("LG_halfpage_1");
          googletag.display("LG_rectangle_1");
          googletag.display("LG_rectangle_2");
          googletag.pubads().refresh();
        }, 100);
        
        
          
        
    });

  }, []);

  return (
    <>
      <section>
        <h3>LG_wideboard_1</h3>
        <div
          id="LG_wideboard_1"
          className="adslot adslot__LG wideboard"
        ></div>


        <Menu></Menu>  

        <h1>La Gruyère</h1>
        
        <Columns>
          <h3>LG_rectangle_1</h3>
          <div id="LG_rectangle_1" className="adslot adslot__LG rectangle"></div>
        </Columns>
        <Columns></Columns>

        <h3>LG_wideboard_2</h3>
        <div
          id="LG_wideboard_2"
          className="adslot adslot__LG wideboard"
        ></div>
        <Columns></Columns>

        <h3>LG_wideboard_3</h3>
        <div
          id="LG_wideboard_3"
          className="adslot adslot__LG wideboard"
        ></div>

        <Columns>
        <h3>LG_rectangle_2</h3>
          <div id="LG_rectangle_2" className="adslot adslot__LG rectangle"></div>
        </Columns>
        <Columns></Columns>

        <h3>LG_wideboard_4</h3>
        <div
          id="LG_wideboard_4"
          className="adslot adslot__LG wideboard"
        ></div>

        <Columns></Columns>

      </section>
      <aside>
        <h3>LG_halfpage_1</h3>
        <div
          id="LG_halfpage_1"
          className="adslot adslot__LG halfpage"
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
