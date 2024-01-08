import Script from "next/script";
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/Menu";

export default function AdManager() {
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

        //wait 100ms before displaying ads
        setTimeout(function(){
          console.log("displaying ads");
          googletag.display("lg_wideboard_1");
          googletag.display("lg_wideboard_2");
          googletag.display("lg_halfpage_1");
          googletag.display("lg_rectangle_1");
          googletag.pubads().refresh();
        });

    });

  }, []);

  return (
    <>
      <section>
        <h1>Google Admanager</h1>

        <Menu></Menu>

        <div id="lg_wideboard_1" className="adslot wideboard"></div>

        <Columns></Columns>

        <Columns>
          <div id="lg_rectangle_1" className="adslot rectangle"></div>
        </Columns>

        <Columns></Columns>

        <div id="lg_wideboard_2" className="adslot wideboard"></div>

        <Columns></Columns>
      </section>

      <aside>
        <div id="lg_halfpage_1" className="adslot halfpage"></div>
      </aside>

      <Script
        id="admanager-script"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
      />
    </>
  );
}
