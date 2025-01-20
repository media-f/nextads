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

        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@bayashi.tiktok/video/7377663484575616257" data-video-id="7377663484575616257" style={{ maxWidth: "605px", minWidth: "325px" }}>
          <section>
            <a target="_blank" rel="noopener noreferrer" title="@bayashi.tiktok" href="https://www.tiktok.com/@bayashi.tiktok?refer=embed">@bayashi.tiktok</a>
            <a title="tiktokfood" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/tiktokfood?refer=embed">#tiktokfood</a>
            <a title="asmr" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/asmr?refer=embed">#asmr</a>
            <a target="_blank" rel="noopener noreferrer" title="♬ オリジナル楽曲  - バヤシ🥑Bayashi" href="https://www.tiktok.com/music/オリジナル楽曲-バヤシ🥑Bayashi-7377663521633749776?refer=embed">♬ オリジナル楽曲  - バヤシ🥑Bayashi</a>
          </section>
        </blockquote>
        <Script async src="https://www.tiktok.com/embed.js"></Script>

        <h3>1 item</h3>
        <div data-placement="qbU0VKDGyS" data-items="1"></div>

        <Columns />

        <Columns />
        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        <Columns>
          <div className="adslot rectangle" id="lg_rectangle_1"></div>
        </Columns>

        <Columns />

        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        <h3>2-3 items</h3>
        <div data-placement="qbU0VKDGyS" data-items="3"></div>
      </section>

      <aside>
        <div className="adslot halfpage" id="lg_halfpage_1"></div>
      </aside>
    </>
  );
}
