import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";
import Adslot from "../components/adslot";

export default function LG() {
  useEffect(() => {
    const prefix = "LG"; // or "LB" on other site

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
      { name: 'halfpage_1', sizes: [[300, 600]] },
    ];

    const width = window.innerWidth;
    const wideboardSizes = width > 994
      ? [[994, 250], [994, 500], [994, 118]]
      : [[300, 250], [320, 460]];

    const rectangleSizes = [[300, 250], [320, 460]];

    const getSizes = (name, overrideSizes) => {
      if (overrideSizes) return overrideSizes;
      return name.startsWith('rectangle') ? rectangleSizes : wideboardSizes;
    };

    const destroySlots = () => {
      if (window.googletag?.destroySlots) {
        window.googletag.destroySlots();
      }
    };

    window.googletag.cmd.push(() => {
      destroySlots();

      const pubads = googletag.pubads();

      adUnits.forEach(({ name, sizes }) => {
        const id = makeId(name);
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const path = makePath(name);
        googletag.defineSlot(path, getSizes(name, sizes), id)?.addService(pubads);
      });

      pubads.disableInitialLoad();
      googletag.enableServices();

      setTimeout(() => {
        adUnits.forEach(({ name }) => {
          const id = makeId(name);
          const element = document.getElementById(id);
          if (element) {
            googletag.display(id);
          }
        });
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
        

        <h1>La Gruyère</h1>

        <Menu></Menu>  

        <Adslot prefix="LG" name="wideboard_1" />
        
        <Columns>
          <Adslot prefix="LG" name="rectangle_1">
            <h3>LG_rectangle_1</h3>
          </Adslot>
        </Columns>
        <Columns></Columns>

        <Adslot prefix="LG" name="wideboard_2">
          <h3>LG_wideboard_2</h3>
        </Adslot>
        <Columns></Columns>

        <Adslot prefix="LG" name="wideboard_3">
          <h3>LG_wideboard_3</h3>
        </Adslot>

        <Columns>
        <Adslot prefix="LG" name="rectangle_2">
          <h3>LG_rectangle_2</h3>
        </Adslot>
        </Columns>
        <Columns></Columns>

        <Adslot prefix="LG" name="wideboard_4">
          <h3>LG_wideboard_4</h3>
        </Adslot>

        <Columns></Columns>

      </section>
      <aside>
        <Adslot prefix="LG" name="halfpage_1">
          <h3>LG_halfpage_1</h3>
        </Adslot>
      </aside>

      <Script
        id="admanager-script"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
      />
      
    </>
  );
}
