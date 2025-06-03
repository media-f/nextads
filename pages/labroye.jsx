import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";
import Adslot from "../components/adslot";

export default function LG() {
  useEffect(() => {
    const prefix = "LB"; // or "LG" on other site

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
        const path = makePath(name);
        // Define slot regardless of element existence - it will be used when element is ready
        googletag.defineSlot(path, getSizes(name, sizes), id)?.addService(pubads);
      });

      pubads.disableInitialLoad();
      googletag.enableServices();

      // Improved approach: use Intersection Observer and DOM ready checks
      const displayAdsWhenReady = () => {
        const availableAds = [];
        const pendingAds = [];

        // Check which ads are already available
        adUnits.forEach(({ name }) => {
          const id = makeId(name);
          const element = document.getElementById(id);
          if (element) {
            availableAds.push(name);
          } else {
            pendingAds.push(name);
          }
        });

        // Display immediately available ads
        if (availableAds.length > 0) {
          availableAds.forEach((name) => {
            const id = makeId(name);
            googletag.display(id);
          });
        }

        // If all ads are ready, refresh and exit
        if (pendingAds.length === 0) {
          pubads.refresh();
          return;
        }

        // Wait for remaining ads with MutationObserver
        let observer;
        let timeoutId;
        let displayedCount = availableAds.length;

        const checkAndDisplay = () => {
          pendingAds.forEach((name, index) => {
            const id = makeId(name);
            const element = document.getElementById(id);
            if (element) {
              googletag.display(id);
              displayedCount++;
              pendingAds.splice(index, 1);
            }
          });

          // If all ads are now displayed, clean up and refresh
          if (pendingAds.length === 0) {
            if (observer) observer.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
            pubads.refresh();
          }
        };

        observer = new MutationObserver((mutations) => {
          let shouldCheck = false;
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && 
                    node.id && 
                    node.id.startsWith(prefix + '_')) {
                  shouldCheck = true;
                }
              });
            }
          });

          if (shouldCheck) {
            checkAndDisplay();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Fallback: force display after reasonable timeout
        timeoutId = setTimeout(() => {
          if (observer) observer.disconnect();
          
          // Display any remaining ads that are now available
          pendingAds.forEach((name) => {
            const id = makeId(name);
            const element = document.getElementById(id);
            if (element) {
              googletag.display(id);
            }
          });
          
          pubads.refresh();
        }, 3000); // Reduced timeout to 3 seconds
      };

      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        // Additional check with a small delay to ensure React has finished rendering
        setTimeout(displayAdsWhenReady, 10);
      });
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
