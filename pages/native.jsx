import Columns from "../components/columns";
import { useEffect } from "react";
import Script from "next/script";
import Menu from "../components/menu";

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

        <Menu></Menu>

        <div
          style={{
            marginTop: "64px",
            marginBottom: "0px",
            boxSizing: "border-box",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(232, 232, 232)",
          }}
        >
          
          
          <div
            style={{
              gap: "0px",
              gridTemplateColumns: "repeat(3, 1fr)",
              marginLeft: "-12px",
              marginRight: "-12px",
              display: "grid",
              marginTop: "16px",
              boxSizing: "border-box",
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(232, 232, 232)",
            }}
          >
            <div
              style={{
                paddingBottom: "0px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRightWidth: "1px",
                borderBottomWidth: "0px",
                borderColor: "rgb(232, 232, 232)",
                borderStyle: "solid",
                boxSizing: "border-box",
                borderWidth: "0px 1px 0px 0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(232, 232, 232)",
                }}
              >
                <a
                  aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                  href="/divs/regions/les-elements-de-tramway-476144"
                  style={{
                    display: "block",
                    transitionProperty: "opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative",
                    color: "rgb(0, 0, 0)",
                    textDecoration: "none solid rgb(0, 0, 0)",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "3 / 2",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        verticalAlign: "middle",
                        width: "100%",
                        height: "214px",
                        display: "inline-block",
                        position: "relative",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="(min-width: 1536px) 336px, (min-width: 1024px) 22.2vw, (min-width: 640px) 33.3vw, 100vw"
                        srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                        src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                        style={{
                          position: "absolute",
                          height: "214px",
                          width: "100%",
                          inset: "0px",
                          color: "rgba(0, 0, 0, 0)",
                          transitionProperty: "opacity",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          objectFit: "cover",
                          maxWidth: "100%",
                          display: "block",
                          verticalAlign: "middle",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      />
                    </div>
                  </div>
                </a>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "8px",
                    margin: "0px 0px 8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgb(255, 213, 105)",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1rem",
                      height: "16px",
                      display: "flex",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: "0.5rem",
                        height: "24px",
                        display: "block",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <path
                        d="M5.68681 5.80541H7.5L7.02747 8H0.5L0.785713 6.7027H1.53297L2.6978 1.2973H1.95055L2.22527 0H6.26923L5.99451 1.2973H4.88461L3.71978 6.7027H5.5L5.68681 5.80541Z"
                        fill="currentColor"
                        style={{
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="/divs/regions"
                    style={{
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: "16px",
                      letterSpacing: "0.65px",
                      fontSize: "13px",
                      marginRight: "0px",
                      marginLeft: "4px",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Régions
                  </a>
                </p>
                <h3
                  style={{
                    fontFamily:
                      '"GT Ultra Median", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: "26px",
                    letterSpacing: "-0.46px",
                    margin: "0px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <a
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        color: "rgb(226, 27, 34)",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Fribourg.{" "}
                    </span>
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Les commerçants de Pérolles ont le moral en berne
                    </span>
                  </a>
                </h3>
                <div
                  style={{
                    display: "block",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontSize: "17px",
                      lineHeight: "24px",
                      letterSpacing: "-0.085px",
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      margin: "0px",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Affaires en baisse et enseignes fermées: le climat commercial est morose sur l’artère marchande. Les commerçants pointent les difficultés d’accès au
                  </p>
                  <a
                    aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      display: "none",
                      overflow: "hidden",
                      marginRight: "0px",
                      marginLeft: "8px",
                      flexShrink: 0,
                      width: "6.5rem",
                      height: "104px",
                      position: "relative",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "1 / 1",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <div
                        style={{
                          verticalAlign: "middle",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          position: "relative",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      >
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="104px"
                          srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=16&amp;fit=max 16w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=32&amp;fit=max 32w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=48&amp;fit=max 48w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=64&amp;fit=max 64w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=96&amp;fit=max 96w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=128&amp;fit=max 128w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                          src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "rgba(0, 0, 0, 0)",
                            transitionProperty: "opacity",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            objectFit: "cover",
                            maxWidth: "100%",
                            display: "block",
                            verticalAlign: "middle",
                            boxSizing: "border-box",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(232, 232, 232)",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingBottom: "0px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRightWidth: "1px",
                borderBottomWidth: "0px",
                borderColor: "rgb(232, 232, 232)",
                borderStyle: "solid",
                boxSizing: "border-box",
                borderWidth: "0px 1px 0px 0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(232, 232, 232)",
                }}
              >
                <a
                  aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                  href="/divs/regions/les-elements-de-tramway-476144"
                  style={{
                    display: "block",
                    transitionProperty: "opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative",
                    color: "rgb(0, 0, 0)",
                    textDecoration: "none solid rgb(0, 0, 0)",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "3 / 2",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        verticalAlign: "middle",
                        width: "100%",
                        height: "214px",
                        display: "inline-block",
                        position: "relative",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="(min-width: 1536px) 336px, (min-width: 1024px) 22.2vw, (min-width: 640px) 33.3vw, 100vw"
                        srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                        src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                        style={{
                          position: "absolute",
                          height: "214px",
                          width: "100%",
                          inset: "0px",
                          color: "rgba(0, 0, 0, 0)",
                          transitionProperty: "opacity",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          objectFit: "cover",
                          maxWidth: "100%",
                          display: "block",
                          verticalAlign: "middle",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      />
                    </div>
                  </div>
                </a>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "8px",
                    margin: "0px 0px 8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgb(255, 213, 105)",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1rem",
                      height: "16px",
                      display: "flex",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: "0.5rem",
                        height: "24px",
                        display: "block",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <path
                        d="M5.68681 5.80541H7.5L7.02747 8H0.5L0.785713 6.7027H1.53297L2.6978 1.2973H1.95055L2.22527 0H6.26923L5.99451 1.2973H4.88461L3.71978 6.7027H5.5L5.68681 5.80541Z"
                        fill="currentColor"
                        style={{
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="/divs/regions"
                    style={{
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: "16px",
                      letterSpacing: "0.65px",
                      fontSize: "13px",
                      marginRight: "0px",
                      marginLeft: "4px",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Régions
                  </a>
                </p>
                <h3
                  style={{
                    fontFamily:
                      '"GT Ultra Median", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: "26px",
                    letterSpacing: "-0.46px",
                    margin: "0px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <a
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        color: "rgb(226, 27, 34)",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Broye.{" "}
                    </span>
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      La pisciculture d’Estavayer-le-Lac sans opposition
                    </span>
                  </a>
                </h3>
                <div
                  style={{
                    display: "block",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontSize: "17px",
                      lineHeight: "24px",
                      letterSpacing: "-0.085px",
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      margin: "0px",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Mise à l’enquête fin 2023, la remise en état de la pisciculture à Estavayer-le-Lac n’a pas suscité d’opposition selon le vice-syndic Eric Rey. Certaines installations techniques seront remplacées et des bassins extérieurs créés.
                  </p>
                  <a
                    aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      display: "none",
                      overflow: "hidden",
                      marginRight: "0px",
                      marginLeft: "8px",
                      flexShrink: 0,
                      width: "6.5rem",
                      height: "104px",
                      position: "relative",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "1 / 1",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <div
                        style={{
                          verticalAlign: "middle",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          position: "relative",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      >
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="104px"
                          srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=16&amp;fit=max 16w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=32&amp;fit=max 32w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=48&amp;fit=max 48w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=64&amp;fit=max 64w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=96&amp;fit=max 96w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=128&amp;fit=max 128w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                          src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "rgba(0, 0, 0, 0)",
                            transitionProperty: "opacity",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            objectFit: "cover",
                            maxWidth: "100%",
                            display: "block",
                            verticalAlign: "middle",
                            boxSizing: "border-box",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(232, 232, 232)",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingBottom: "0px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderStyle: "none",
                borderColor: "rgb(232, 232, 232)",
                backgroundColor: "#e3e9f1",
                boxSizing: "border-box",
                borderWidth: "0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(232, 232, 232)",
                }}
              >
                <a
                  aria-label="Accéder à l'div <p>Titre</p>"
                  href="/divs/regions/titre-475939"
                  style={{
                    display: "block",
                    marginBottom: "16px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "3 / 2",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        backgroundColor: "rgb(219, 219, 219)",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "214.656px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(293.55deg, rgba(255, 255, 255, 0) 50.1%, rgb(255, 255, 255) 100%)",
                          opacity: "0.5",
                          width: "100%",
                          height: "214.656px",
                          position: "absolute",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      ></div>                     
                    </div>
                  </div>
                </a>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "8px",
                    margin: "0px 0px 8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  
                  <a
                    href="#"
                    style={{
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: "16px",
                      letterSpacing: "0.65px",
                      fontSize: "13px",
                      marginRight: "0px",
                      marginLeft: "0px",
                      padding: "3px",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    publicité
                  </a>
                </p>
                <h3
                  style={{
                    fontFamily:
                      '"GT Ultra Median", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: "26px",
                    letterSpacing: "-0.46px",
                    margin: "0px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <a
                    href="/divs/regions/titre-475939"
                    style={{
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Immobilier fribourgeois : 1411 biens à vendre et 720 à louer dans le canton
                    </span>
                  </a>
                </h3>
                <div
                  style={{
                    display: "block",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontSize: "17px",
                      lineHeight: "24px",
                      letterSpacing: "-0.085px",
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      margin: "0px",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    En savoir plus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            marginBottom: "0px",
            boxSizing: "border-box",
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(232, 232, 232)",
          }}
        >
          
          
          <div
            style={{
              gap: "0px",
              gridTemplateColumns: "repeat(3, 1fr)",
              marginLeft: "-12px",
              marginRight: "-12px",
              display: "grid",
              marginTop: "16px",
              boxSizing: "border-box",
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(232, 232, 232)",
            }}
          >
            <div
              style={{
                paddingBottom: "0px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRightWidth: "1px",
                borderBottomWidth: "0px",
                borderColor: "rgb(232, 232, 232)",
                borderStyle: "solid",
                boxSizing: "border-box",
                borderWidth: "0px 1px 0px 0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(232, 232, 232)",
                }}
              >
                <a
                  aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                  href="/divs/regions/les-elements-de-tramway-476144"
                  style={{
                    display: "block",
                    transitionProperty: "opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative",
                    color: "rgb(0, 0, 0)",
                    textDecoration: "none solid rgb(0, 0, 0)",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "3 / 2",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        verticalAlign: "middle",
                        width: "100%",
                        height: "214px",
                        display: "inline-block",
                        position: "relative",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="(min-width: 1536px) 336px, (min-width: 1024px) 22.2vw, (min-width: 640px) 33.3vw, 100vw"
                        srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                        src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                        style={{
                          position: "absolute",
                          height: "214px",
                          width: "100%",
                          inset: "0px",
                          color: "rgba(0, 0, 0, 0)",
                          transitionProperty: "opacity",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          objectFit: "cover",
                          maxWidth: "100%",
                          display: "block",
                          verticalAlign: "middle",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      />
                    </div>
                  </div>
                </a>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "8px",
                    margin: "0px 0px 8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgb(255, 213, 105)",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1rem",
                      height: "16px",
                      display: "flex",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: "0.5rem",
                        height: "24px",
                        display: "block",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <path
                        d="M5.68681 5.80541H7.5L7.02747 8H0.5L0.785713 6.7027H1.53297L2.6978 1.2973H1.95055L2.22527 0H6.26923L5.99451 1.2973H4.88461L3.71978 6.7027H5.5L5.68681 5.80541Z"
                        fill="currentColor"
                        style={{
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="/divs/regions"
                    style={{
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: "16px",
                      letterSpacing: "0.65px",
                      fontSize: "13px",
                      marginRight: "0px",
                      marginLeft: "4px",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Régions
                  </a>
                </p>
                <h3
                  style={{
                    fontFamily:
                      '"GT Ultra Median", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: "26px",
                    letterSpacing: "-0.46px",
                    margin: "0px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <a
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        color: "rgb(226, 27, 34)",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Fribourg.{" "}
                    </span>
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Les commerçants de Pérolles ont le moral en berne
                    </span>
                  </a>
                </h3>
                <div
                  style={{
                    display: "block",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontSize: "17px",
                      lineHeight: "24px",
                      letterSpacing: "-0.085px",
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      margin: "0px",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Affaires en baisse et enseignes fermées: le climat commercial est morose sur l’artère marchande. Les commerçants pointent les difficultés d’accès au
                  </p>
                  <a
                    aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      display: "none",
                      overflow: "hidden",
                      marginRight: "0px",
                      marginLeft: "8px",
                      flexShrink: 0,
                      width: "6.5rem",
                      height: "104px",
                      position: "relative",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "1 / 1",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <div
                        style={{
                          verticalAlign: "middle",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          position: "relative",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      >
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="104px"
                          srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=16&amp;fit=max 16w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=32&amp;fit=max 32w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=48&amp;fit=max 48w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=64&amp;fit=max 64w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=96&amp;fit=max 96w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=128&amp;fit=max 128w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                          src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "rgba(0, 0, 0, 0)",
                            transitionProperty: "opacity",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            objectFit: "cover",
                            maxWidth: "100%",
                            display: "block",
                            verticalAlign: "middle",
                            boxSizing: "border-box",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(232, 232, 232)",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingBottom: "0px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRightWidth: "1px",
                borderBottomWidth: "0px",
                borderColor: "rgb(232, 232, 232)",
                borderStyle: "solid",
                boxSizing: "border-box",
                borderWidth: "0px 1px 0px 0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(232, 232, 232)",
                }}
              >
                <a
                  aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                  href="/divs/regions/les-elements-de-tramway-476144"
                  style={{
                    display: "block",
                    transitionProperty: "opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative",
                    color: "rgb(0, 0, 0)",
                    textDecoration: "none solid rgb(0, 0, 0)",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "3 / 2",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        verticalAlign: "middle",
                        width: "100%",
                        height: "214px",
                        display: "inline-block",
                        position: "relative",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="(min-width: 1536px) 336px, (min-width: 1024px) 22.2vw, (min-width: 640px) 33.3vw, 100vw"
                        srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                        src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                        style={{
                          position: "absolute",
                          height: "214px",
                          width: "100%",
                          inset: "0px",
                          color: "rgba(0, 0, 0, 0)",
                          transitionProperty: "opacity",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          objectFit: "cover",
                          maxWidth: "100%",
                          display: "block",
                          verticalAlign: "middle",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      />
                    </div>
                  </div>
                </a>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "8px",
                    margin: "0px 0px 8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgb(255, 213, 105)",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1rem",
                      height: "16px",
                      display: "flex",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: "0.5rem",
                        height: "24px",
                        display: "block",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <path
                        d="M5.68681 5.80541H7.5L7.02747 8H0.5L0.785713 6.7027H1.53297L2.6978 1.2973H1.95055L2.22527 0H6.26923L5.99451 1.2973H4.88461L3.71978 6.7027H5.5L5.68681 5.80541Z"
                        fill="currentColor"
                        style={{
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="/divs/regions"
                    style={{
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: "16px",
                      letterSpacing: "0.65px",
                      fontSize: "13px",
                      marginRight: "0px",
                      marginLeft: "4px",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Régions
                  </a>
                </p>
                <h3
                  style={{
                    fontFamily:
                      '"GT Ultra Median", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: "26px",
                    letterSpacing: "-0.46px",
                    margin: "0px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <a
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        color: "rgb(226, 27, 34)",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      Broye.{" "}
                    </span>
                    <span
                      style={{
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      La pisciculture d’Estavayer-le-Lac sans opposition
                    </span>
                  </a>
                </h3>
                <div
                  style={{
                    display: "block",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(232, 232, 232)",
                  }}
                >
                  <p
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontSize: "17px",
                      lineHeight: "24px",
                      letterSpacing: "-0.085px",
                      fontFamily:
                        '"Forme Grotesque Pro", ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      margin: "0px",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    Mise à l’enquête fin 2023, la remise en état de la pisciculture à Estavayer-le-Lac n’a pas suscité d’opposition selon le vice-syndic Eric Rey. Certaines installations techniques seront remplacées et des bassins extérieurs créés.
                  </p>
                  <a
                    aria-label="Accéder à l'div <p>Les éléments de tramway</p>"
                    href="/divs/regions/les-elements-de-tramway-476144"
                    style={{
                      display: "none",
                      overflow: "hidden",
                      marginRight: "0px",
                      marginLeft: "8px",
                      flexShrink: 0,
                      width: "6.5rem",
                      height: "104px",
                      position: "relative",
                      color: "rgb(0, 0, 0)",
                      textDecoration: "none solid rgb(0, 0, 0)",
                      boxSizing: "border-box",
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(232, 232, 232)",
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "1 / 1",
                        boxSizing: "border-box",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(232, 232, 232)",
                      }}
                    >
                      <div
                        style={{
                          verticalAlign: "middle",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          position: "relative",
                          boxSizing: "border-box",
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(232, 232, 232)",
                        }}
                      >
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="104px"
                          srcSet="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=16&amp;fit=max 16w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=32&amp;fit=max 32w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=48&amp;fit=max 48w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=64&amp;fit=max 64w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=96&amp;fit=max 96w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=128&amp;fit=max 128w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=256&amp;fit=max 256w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=384&amp;fit=max 384w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=640&amp;fit=max 640w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=750&amp;fit=max 750w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=828&amp;fit=max 828w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1080&amp;fit=max 1080w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1200&amp;fit=max 1200w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=1920&amp;fit=max 1920w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=2048&amp;fit=max 2048w, https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max 3840w"
                          src="https://dev-media-st-paul-tramway.imgix.net/dev/LL/2023/12/592867505_highres_4e52da9962.jpg?auto=format%2Ccompress&amp;w=3840&amp;fit=max"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "rgba(0, 0, 0, 0)",
                            transitionProperty: "opacity",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            objectFit: "cover",
                            maxWidth: "100%",
                            display: "block",
                            verticalAlign: "middle",
                            boxSizing: "border-box",
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(232, 232, 232)",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div data-placement="g5g7csql" data-items="1"></div>
            </div>
          </div>
        </div>

        <Columns></Columns>

        <div data-placement="qbU0VKDGyS" data-items="3"></div>

        <Columns></Columns>

        <Columns></Columns>
        <div data-placement="qbU0VKDGyS" data-items="1"></div>

        <Columns>
          <div className="adslot rectangle" id="lg_rectangle_1"></div>
        </Columns>

        <Columns></Columns>

        <div data-placement="qbU0VKDGyS" data-items="3"></div>
      </section>

      <aside>
        <div className="adslot halfpage" id="lg_halfpage_1"></div>
      </aside>

      <Script
        id="admanager-script"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
      />
      <Script id="define-slots" strategy="lazyOnload">{`
        window.googletag = window.googletag || {cmd: []};
        
        googletag.cmd.push(function() {
            let width = window.innerWidth;
            if (width > 994) {
                googletag.defineSlot('/95737030/LG_wideboard_1', [[994, 250], [994, 500], [994, 118]], 'lg_wideboard_1').addService(googletag.pubads());
                googletag.defineSlot('/95737030/LG_wideboard_2', [[994, 250], [994, 500], [994, 118]], 'lg_wideboard_2').addService(googletag.pubads());
            }
            else {
                googletag.defineSlot('/95737030/LG_wideboard_1', [[300,250]], 'lg_wideboard_1').addService(googletag.pubads());
                googletag.defineSlot('/95737030/LG_wideboard_2', [[300,250], [320,460]], 'lg_wideboard_2').addService(googletag.pubads());
            }
            googletag.defineSlot('/95737030/LG_halfpage_1', [[300, 250], [300, 600]], 'lg_halfpage_1').addService(googletag.pubads());
            googletag.defineSlot('/95737030/LG_rectangle_1', [[320, 460], [300, 250]], 'lg_rectangle_1').addService(googletag.pubads());
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        })
        
    `}</Script>
    </>
  );
}
