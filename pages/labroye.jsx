import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";
import Adslot from "../components/adslot";

export default function LG() {
  useEffect(() => {
    const prefix = "LB"; 

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
        
        <h1>La Broye</h1>
        <Menu></Menu>  
        <Adslot prefix="LB" name="wideboard_1" />

        
        <Columns>
          <Adslot prefix="LB" name="rectangle_1">
            <h3>LB_rectangle_1</h3>
          </Adslot>
        </Columns>
        <Columns></Columns>

        <Adslot prefix="LB" name="wideboard_2">
          <h3>LB_wideboard_2</h3>
        </Adslot>
        <Columns></Columns>

        <Adslot prefix="LB" name="wideboard_3">
          <h3>LB_wideboard_3</h3>
        </Adslot>

        <Columns>
        <Adslot prefix="LB" name="rectangle_2">
          <h3>LB_rectangle_2</h3>
        </Adslot>
        </Columns>
        <Columns></Columns>

        <Adslot prefix="LB" name="wideboard_4">
          <h3>LB_wideboard_4</h3>
        </Adslot>

        <Columns></Columns>

      </section>
      <aside>
        <Adslot prefix="LB" name="halfpage_1">
          <h3>LB_halfpage_1</h3>
        </Adslot>
      </aside>

      <Script
        id="admanager-script"
        src="https://pagead2.googlesyndication.com/tag/js/gpt.js"
        strategy="lazyOnload"
      />
      
    </>
  );
}
