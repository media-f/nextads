import Script from "next/script";
import Link from 'next/link';
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";
import Adslot from "../components/adslot";

export default function LB() {
useEffect(() => {
  const prefix = "LB"; // or "LB" or "AGRI" on other site

  window.googletag = window.googletag || { cmd: [] };

  const makeId = (name) => {
    const slotName = prefix === "AGRI" ? name.toUpperCase() : name;
    return `${prefix}_${slotName}`;
  };
  const makePath = (name) => {
    const accountId = prefix === "AGRI" ? "23038965275" : "95737030";
    return `/${accountId}/${makeId(name)}`;
  };

  const adUnits = [
    { name: "mobile_1" },
    { name: "wideboard_1" },
    { name: "wideboard_2" },
    { name: "wideboard_3" },
    { name: "wideboard_4" },
    { name: "rectangle_1" },
    { name: "rectangle_2" },
    { name: "halfpage_1" },
  ];

  const width = window.innerWidth;
  const wideboardSizes =
    width >= 994
      ? [
          [994, 250],
          [994, 500],
          [994, 118],
        ]
      : [
          [300, 250],
          [320, 460],
        ];

  const rectangleSizes = [
    [300, 250],
    [320, 460],
  ];
  const mobileSizes = [
    [300, 250],
    [320, 460],
    [320, 100],
  ];
  const halfpageSizes = [[300, 600]];

  const getSizes = (name) => {
    if (name === "wideboard_1" && width < 994) return [];
  if (name === "mobile_1") return width < 994 ? mobileSizes : [];
    if (name === "halfpage_1") return halfpageSizes;
    return name.startsWith("rectangle") ? rectangleSizes : wideboardSizes;
  };

  const destroySlots = () => {
    if (window.googletag?.destroySlots) {
      window.googletag.destroySlots();
    }
  };

  window.googletag.cmd.push(() => {
    destroySlots();
    const pubads = window.googletag.pubads();

    // Define all slots first, skip if getSizes returns []
    adUnits.forEach(({ name }) => {
      const id = makeId(name);
      const path = makePath(name);
      const sizes = getSizes(name);
      if (!sizes || (Array.isArray(sizes) && sizes.length === 0)) return;
      window.googletag
        .defineSlot(path, sizes, id)
        ?.addService(pubads);
    });

    pubads.disableInitialLoad();
    window.googletag.enableServices();

    // Prepare available and pending ads
    const availableAds = [];
    const pendingAds = new Set();
    adUnits.forEach(({ name }) => {
      const sizes = getSizes(name);
      if (!sizes || (Array.isArray(sizes) && sizes.length === 0)) return;
      const id = makeId(name);
      const element = document.getElementById(id);
      if (element) {
        availableAds.push(name);
      } else {
        pendingAds.add(name);
      }
    });

    // Display immediately available ads
    availableAds.forEach((name) => {
      const id = makeId(name);
      window.googletag.display(id);
    });

    if (pendingAds.size === 0) {
      pubads.refresh();
      return;
    }

    // Helper to check and display pending ads
    const checkAndDisplay = () => {
      for (const name of Array.from(pendingAds)) {
        const id = makeId(name);
        const element = document.getElementById(id);
        if (element) {
          window.googletag.display(id);
          pendingAds.delete(name);
        }
      }
      if (pendingAds.size === 0) {
        if (observer) observer.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
        pubads.refresh();
      }
    };

    // Observe DOM for ad containers
    const observer = new MutationObserver((mutations) => {
      let shouldCheck = false;
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node.id &&
              node.id.startsWith(prefix + "_")
            ) {
              shouldCheck = true;
            }
          });
        }
      });
      if (shouldCheck) checkAndDisplay();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Fallback: force display after reasonable timeout
    const timeoutId = setTimeout(() => {
      if (observer) observer.disconnect();
      for (const name of Array.from(pendingAds)) {
        const id = makeId(name);
        const element = document.getElementById(id);
        if (element) {
          window.googletag.display(id);
          pendingAds.delete(name);
        }
      }
      pubads.refresh();
    }, 3000); // Reduced timeout to 3 seconds
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
          <Adslot prefix="LB" name="mobile_1"></Adslot>
        </Columns>
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
