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

        <Menu></Menu>      

        <Columns></Columns>


        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bayashi.tiktok/video/7417752854972140807" data-video-id="7417752854972140807" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@bayashi.tiktok" href="https://www.tiktok.com/@bayashi.tiktok?refer=embed">@bayashi.tiktok</a> @TOP水上OUTDOOR <a title="tiktokfood" target="_blank" href="https://www.tiktok.com/tag/tiktokfood?refer=embed">#tiktokfood</a> <a title="asmr" target="_blank" href="https://www.tiktok.com/tag/asmr?refer=embed">#asmr</a> <a target="_blank" title="♬ オリジナル楽曲  - バヤシ🥑Bayashi" href="https://www.tiktok.com/music/オリジナル楽曲-バヤシ🥑Bayashi-7417752891715914513?refer=embed">♬ オリジナル楽曲  - バヤシ🥑Bayashi</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>


        <Content></Content>

        <h3>1 item</h3>
        <div data-placement="qbU0VKDGyS" data-items="1"></div>

        <Columns></Columns>

        <Columns></Columns>
        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        <Columns>
          <div className="adslot rectangle" id="lg_rectangle_1"></div>
        </Columns>

        <Columns></Columns>

        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        
      </section>

      <aside>
        <div className="adslot halfpage" id="lg_halfpage_1"></div>
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
    </>
  );
}
