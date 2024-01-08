import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import Columns from "../components/columns";

export default function Agri() {
  useEffect(() => {
    window.googletag = window.googletag || {cmd: []};
    
    // destroy GPT ads slots
    if (window.googletag && typeof window.googletag.destroySlots === "function") {
      window.googletag.destroySlots();
      console.log('destroy ad slots')
    }

    
    googletag.cmd.push(function() {
      //define ad slots present on the page
        let width = window.innerWidth;
        if (width > 994) {
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[994, 250], [994, 500], [994, 118]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_HALFPAGE_1', [[300, 250], [300, 600]], 'AGRI_HALFPAGE_1').addService(googletag.pubads());
        }
        else {
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_1', [[300,250]], 'AGRI_WIDEBOARD_1').addService(googletag.pubads());
            googletag.defineSlot('/23038965275/AGRI_WIDEBOARD_2', [[300,250], [320,460]], 'AGRI_WIDEBOARD_2').addService(googletag.pubads());
        }
        googletag.defineSlot('/23038965275/AGRI_RECTANGLE_1', [[300,250], [250,250]], 'AGRI_RECTANGLE_1').addService(googletag.pubads());
        
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();

        //wait 100ms before displaying ads
        setTimeout(function(){
          console.log("displaying ads");
          googletag.display("AGRI_WIDEBOARD_1");
          googletag.display("AGRI_WIDEBOARD_2");
          googletag.display("AGRI_HALFPAGE_1");
          googletag.display("AGRI_RECTANGLE_1");
          googletag.pubads().refresh();
        }, 100);
          
        


    });


  }, []);

  return (
    <>
      <section>
        <h3>AGRI_WIDEBOARD_1</h3>
        <div
          id="AGRI_WIDEBOARD_1"
          className="adslot adslot__agri wideboard"
        ></div>

        <h1>Journal Agri</h1>

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

        <h3>AGRI_WIDEBOARD_2</h3>
        <div
          id="AGRI_WIDEBOARD_2"
          className="adslot adslot__agri wideboard"
        ></div>
        <Columns>
        <h3>AGRI_RECTANGLE_1</h3>
          <div id="AGRI_RECTANGLE_1" className="adslot rectangle"></div>
        </Columns>
        <Columns></Columns>
      </section>
      <aside>
        <h3>AGRI_HALFPAGE_1</h3>
        <div
          id="AGRI_HALFPAGE_1"
          className="adslot adslot__agri halfpage"
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
