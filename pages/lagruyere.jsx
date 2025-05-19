import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";

export default function LG() {
  useEffect(() => {
    const prefix = "LG"; // Change to "LB" for La Broye

    window.googletag = window.googletag || { cmd: [] };

    const makeId = (name) => `${prefix}_${name}`;
    const makePath = (name) => `/95737030/${makeId(name)}`;

    const adUnits = [
      { name: 'wideboard_1' },
      { name: 'wideboard_2' },
      { name: 'wideboard_3' },
      { name: 'wideboard_4' },
      { name: 'rectangle_1' },
      { name: 'rectangle_2' },
    ];

    const halfPage = { name: 'halfpage_1' };

    const width = window.innerWidth;
    const wideboardSizes = width > 994
      ? [[994, 250], [994, 500], [994, 118]]
      : [[300, 250], [320, 460]];

    const rectangleSizes = [[300, 250], [320, 460]];
    const halfPageSizes = [[300, 600]];

    const destroySlots = () => {
      if (window.googletag?.destroySlots) {
        window.googletag.destroySlots();
        console.log(`[GPT] Destroyed ad slots for ${prefix}`);
      }
    };

    window.googletag.cmd.push(() => {
      destroySlots();

      const pubads = googletag.pubads();

      adUnits.forEach(({ name }) => {
        const id = makeId(name);
        const path = makePath(name);
        const sizes = name.startsWith('rectangle') ? rectangleSizes : wideboardSizes;
        googletag.defineSlot(path, sizes, id)?.addService(pubads);
      });

      googletag.defineSlot(makePath(halfPage.name), halfPageSizes, makeId(halfPage.name))
        ?.addService(pubads);

      pubads.disableInitialLoad();
      googletag.enableServices();

      setTimeout(() => {
        console.log(`[GPT] Displaying ads for prefix ${prefix}`);
        [...adUnits, halfPage].forEach(({ name }) => googletag.display(makeId(name)));
        pubads.refresh();
      }, 100);
    });

    return () => {
      destroySlots();
    };
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
