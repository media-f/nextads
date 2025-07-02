import Columns from "../components/columns";
import { useEffect } from "react";
import Menu from "../components/menu";
import Script from "next/script";
import Adslot from "../components/adslot";

export default function Xandr() {
  useEffect(() => {
    if (window.pubonline) window.pubonline.loadAds();
    if(window.htag) window.htag.api('1').refreshAds()
  }, []);

  return (
    <>
      <section>
        <h1>La Liberté - Audienzz</h1>

        <Menu></Menu>

        <div>
          <Adslot prefix="adnz" name="wideboard_1" />
        </div>

        <Columns></Columns>

        <Columns>
          <Adslot prefix="adnz" name="rectangle_1" />
        </Columns>

        <Columns></Columns>

        <Adslot prefix="adnz" name="wideboard_2" />

        <Columns></Columns>

        <Columns></Columns>

        <Columns></Columns>

        <Adslot prefix="adnz" name="wideboard_3" />

        <Columns></Columns>
      </section>

      <aside>
        <Adslot prefix="adnz" name="halfpage_1" />
      </aside>

      <Script
          data-cmp-src="https://adnz.co/header.js?adTagId=279"
          strategy="lazyOnload"
          data-cmp-vendor="s1490"
          className="cmplazyload"
        />



    </>
  );
}
