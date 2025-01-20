import Columns from "../components/columns";
import { useEffect } from "react";
import Script from "next/script";
import Menu from "../components/menu";
import Content from "../components/content";

export default function Native() {
  useEffect(() => {
    // native :
    if (window.pubonline) window.pubonline.loadAds();

    // google admanager :

    setTimeout(() => {
      const { googletag } = window;
      if (googletag.cmd) {
        console.log("displaying ads");
        googletag.cmd.push(() => {
          googletag.display("lg_halfpage_1");
          googletag.display("lg_rectangle_1");
          googletag.pubads().refresh();
        });
      }
    }, 1000);
  }, []);

  return (
    <>
      <section>
        <h1>Native</h1>

        <Menu />

        <Columns />


        <iframe height="300" width= "400" src="https://www.tiktok.com/player/v1/7377663484575616257?&music_info=1&description=1" allow="fullscreen" title="test"></iframe>

        <h3>1 item</h3>
        <div data-placement="llhome2024" data-items="1"></div>

        <Columns />

        <Columns />
        <h3>2-3 items</h3>
        <div data-placement="llhome2024" data-items="3"></div>

        <Columns>
          <div className="adslot rectangle" id="lg_rectangle_1"></div>
        </Columns>

        <Columns />

        <h3>2-3 items</h3>
        <div data-placement="llhome2024" data-items="3"></div>

        <h3>2-3 items</h3>
        <div data-placement="llhome2024" data-items="3"></div>
      </section>

      <aside>
        <div className="adslot halfpage" id="lg_halfpage_1"></div>
      </aside>
    </>
  );
}
