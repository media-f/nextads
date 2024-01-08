import Columns from "../components/columns";
import { useEffect } from "react";
import Menu from "../components/menu";

export default function Xandr() {
  useEffect(() => {
    if (window.pubonline) window.pubonline.loadAds();
  }, []);

  return (
    <>
      <section>
        <h1>Xandr</h1>

        <Menu></Menu>

        <div>
          <div id="adnz_wideboard_1" className="adslot wideboard"></div>
        </div>

        <Columns></Columns>

        <Columns>
          <div className="adslot rectangle" id="adnz_rectangle_1"></div>
        </Columns>

        <Columns></Columns>

        <div className="adslot wideboard" id="adnz_wideboard_2"></div>

        <Columns></Columns>

        <Columns></Columns>

        <Columns></Columns>

        <div className="adslot wideboard" id="adnz_wideboard_3"></div>

        <Columns></Columns>
      </section>

      <aside>
        <div className="adslot halfpage" id="adnz_halfpage_1"></div>
      </aside>
    </>
  );
}
