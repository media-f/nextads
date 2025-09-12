import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import Columns from "../components/columns";
import Menu from "../components/menu";
import Adslot from "../components/adslot";

export default function Agri() {
  useEffect(() => {
  const prefix = "AGRI"; // or "LB" or "AGRI" on other site

  window.googletag = window.googletag || { cmd: [] };

  const makeId = (name) => {
    const slotName = prefix === "AGRI" ? name.toUpperCase() : name;
    return `${prefix}_${slotName}`;
  };
  const makePath = (name) => {
    const accountId = prefix === "AGRI" ? "23038965275" : "95737030";
    return `/${accountId}/${makeId(name)}`;
  };

  // 640px



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

  const isDesktop = window.innerWidth >= 994;
  const isMobile = window.innerWidth < 640;

  const wideboardSizes =
    isDesktop
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
    if (name === "wideboard_1" && isMobile) return [];
    if (name === "mobile_1") return isMobile ? mobileSizes : [];
    if (name === "halfpage_1") return isDesktop ? halfpageSizes : [];
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
        <Adslot prefix="AGRI" name="WIDEBOARD_1">
          <h3>AGRI_WIDEBOARD_1</h3>
        </Adslot>

        <h1>Journal Agri</h1>

        <Menu></Menu>


        <div className="imgplaceholder"></div>
        <h2>Page article</h2>
        <Link href="/agri"> retour home Agri</Link>
        <div className="flow">
          <p>
            Donec ut augue in lorem cursus aliquam. Sed semper, massa tristique
            lobortis ornare, neque nunc varius nulla, ac sagittis metus nunc
            quis neque. Aliquam luctus aliquam nibh vitae vehicula. Duis
            malesuada nisi a lacus pharetra, non tempor odio accumsan.
          </p>
          <p>
            Ut sagittis eros libero, eu lacinia nulla suscipit in. Donec
            elementum quam varius nibh aliquam maximus. Mauris posuere dictum
            augue, sit amet pellentesque dui posuere eu. Phasellus eget neque
            placerat, euismod nisi sit amet, maximus urna. Aenean dictum
            efficitur accumsan. Curabitur facilisis lacus vel lectus cursus, at
            auctor velit pharetra. Mauris placerat congue convallis. Nunc
            facilisis neque nibh, in aliquet justo rhoncus nec. Suspendisse nec
            metus sit amet turpis varius ornare. Phasellus sed lorem et odio
            interdum consequat quis a odio. Sed consequat odio eros, vitae
            scelerisque dolor tincidunt quis. Nullam dignissim sem eu tincidunt
            posuere. Praesent vitae bibendum risus. Maecenas faucibus tellus
            quis nunc iaculis, sed blandit tellus sollicitudin. Sed vitae tortor
            vel nisi pulvinar eleifend ut et neque. Aliquam vel ultricies est.
            Phasellus venenatis dolor nec orci vestibulum tempor. Vestibulum
            eget turpis facilisis, egestas est sit amet, venenatis enim. Aliquam
            pulvinar diam nisl, eu venenatis quam blandit id. Sed molestie,
            velit et finibus porttitor, quam quam vulputate augue, non pulvinar
            est dolor vel nibh. Mauris pharetra nibh sit amet viverra dignissim.
            Quisque quis tincidunt mauris. Phasellus et euismod sem, sed
            faucibus nulla. Fusce viverra elit vitae libero pellentesque
            aliquet.
          </p>
          <p>
            Etiam quis quam vel elit finibus porttitor. Integer erat magna,
            lacinia nec pellentesque dictum, condimentum volutpat felis.
            Praesent eget urna et velit efficitur pretium eget et augue. Fusce
            hendrerit ultricies tristique. Nunc ullamcorper massa sed magna
            condimentum placerat. Nullam porta a dui eu cursus. Integer accumsan
            pretium tristique. Pellentesque interdum efficitur turpis quis
            mattis. In et felis nec magna vehicula eleifend non nec purus. Morbi
            auctor leo eget varius venenatis. Nunc dui dolor, rhoncus non elit
            eu, cursus mattis arcu. Sed auctor justo eu purus lobortis, vitae
            venenatis metus euismod. Donec suscipit augue sit amet dui
            fermentum, vitae pulvinar eros interdum. Proin commodo ut magna
            vitae lacinia. Sed leo metus, rhoncus et enim at, lacinia dapibus
            magna. Nulla facilisis dui quam. Donec fermentum pharetra urna eu
            pellentesque. Vivamus feugiat consectetur feugiat. Nunc mollis nec
            dui eget condimentum. Curabitur a mi mollis, hendrerit libero vel,
            viverra purus. Fusce dictum sollicitudin ex, et pulvinar dolor.
            Nullam rhoncus ipsum tortor, vel rhoncus massa tincidunt at. Cras
            pulvinar metus nisi, eget lobortis libero maximus vel. Maecenas
            pulvinar nisl nec semper eleifend. Aliquam in pretium metus. Etiam
            id risus porta dolor imperdiet congue. Sed neque elit, mattis quis
            eros vel, vehicula fermentum libero. Proin laoreet et mauris quis
            ullamcorper. Aenean vulputate, purus et luctus sagittis, nibh turpis
            ullamcorper nulla, eget gravida felis lorem sit amet dolor. Nunc
            feugiat sem lorem, sit amet accumsan purus ultricies quis.
            Suspendisse magna erat, dictum et lectus et, consectetur consectetur
            libero.
          </p>
        </div>

        <Link href="/agri"> retour home Agri</Link>

        <Adslot prefix="AGRI" name="WIDEBOARD_2">
          <h3>AGRI_WIDEBOARD_2</h3>
        </Adslot>
        <Columns>
        <Adslot prefix="AGRI" name="RECTANGLE_1">
          <h3>AGRI_RECTANGLE_1</h3>
        </Adslot>
        </Columns>
        <Columns></Columns>
      </section>
      <aside>
        <Adslot prefix="AGRI" name="HALFPAGE_1">
          <h3>AGRI_HALFPAGE_1</h3>
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
