import { Videos } from "@/assets/video";
import { Layout } from "@/components/layout";
import { convertRemToPx } from "@/utils/css-helper";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./_homePage.scss";

export const HomePage = () => {
    const heroBannerBackgroundContainerRef = useRef(null);
    const [hasFinishedScroll, setHasFinishedScroll] = useState(true);

    useEffect(() => {
        const siteContentDiv =
            document.getElementsByClassName("site-content")?.[0];
        const siteHeaderLinkRibbonDiv = document.getElementsByClassName(
            "site-header-link-ribbon"
        )?.[0];
        const siteHeaderContentContainerBackgroundDiv =
            document.getElementsByClassName(
                "site-header-content-container-background"
            )?.[0];
        const siteHeaderMenuItemButtons = document.getElementsByClassName(
            "header-menu-item-button"
        );
        const siteHeaderButtonContainerDiv = document.getElementsByClassName(
            "site-header-button-container"
        )?.[0];
        const siteHeaderButtons =
            document.getElementsByClassName("header-button");
        const siteHeaderTranslationButtons = document.getElementsByClassName(
            "site-header-translation-button"
        );
        const siteHeaderLogoCharacters = document.getElementsByClassName(
            "site-header-logo-character"
        );

        const scrollTill = convertRemToPx(8.75);

        const onScroll = () => {
            setHasFinishedScroll(false);
            const currentScrollPosition = (siteContentDiv as HTMLDivElement)
                .scrollTop;

            const currentRatio =
                currentScrollPosition > scrollTill
                    ? 1
                    : currentScrollPosition / scrollTill;

            (siteHeaderLinkRibbonDiv as HTMLDivElement).style.opacity =
                currentRatio.toString();

            (
                siteHeaderContentContainerBackgroundDiv as HTMLDivElement
            ).style.opacity = currentRatio.toString();

            console.log(currentScrollPosition, currentRatio);

            /*  */
            const primaryColorRgb = [0, 130, 140];
            const currentColorRgb = primaryColorRgb.map(
                (color) => (255 - color) * (1 - currentRatio) + color
            );
            const currentColor =
                "rgb(" +
                currentColorRgb[0] +
                ", " +
                currentColorRgb[1] +
                ", " +
                currentColorRgb[2] +
                ")";

            for (const buttonDiv of siteHeaderMenuItemButtons) {
                (buttonDiv as HTMLDivElement).style.color = currentColor;
            }
            (siteHeaderButtonContainerDiv as HTMLDivElement).style.borderColor =
                currentColor;
            for (const button of siteHeaderButtonContainerDiv.children) {
                (button as HTMLButtonElement).style.borderColor = currentColor;
            }
            for (const buttonDiv of siteHeaderButtons) {
                /* eslint-disable-next-line no-unsafe-optional-chaining */
                for (const path of buttonDiv.children?.[0].children?.[0]
                    .children) {
                    (path as SVGClipPathElement).style.fill = currentColor;
                    (path as SVGClipPathElement).style.stroke = currentColor;
                }
            }
            for (const button of siteHeaderTranslationButtons) {
                (button as HTMLButtonElement).style.borderColor = currentColor;
                (button as HTMLButtonElement).style.color = currentColor;
            }
            for (const paragraph of siteHeaderLogoCharacters) {
                (paragraph as HTMLParagraphElement).style.color = currentColor;
            }

            (
                heroBannerBackgroundContainerRef?.current as HTMLDivElement
            ).style.opacity = (1 - currentRatio).toString();

            if (currentRatio < 0.5) {
                (siteContentDiv as HTMLDivElement).scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (currentRatio > 0.5 && currentRatio < 1) {
                (siteContentDiv as HTMLDivElement).scrollTo({
                    top: scrollTill,
                    left: 0,
                    behavior: "smooth",
                });
            }
            setHasFinishedScroll(true);
        };
        onScroll();

        siteContentDiv.addEventListener("scroll", () => {
            if (hasFinishedScroll) {
                onScroll();
            }
        });
    }, []);

    return (
        <Layout className="home-page">
            <div className="home-page">
                <div className="home-page-hero-banner">
                    <ReactPlayer
                        url={Videos.HomePageHeroBannerVideo}
                        controls={false}
                        playing={false}
                        muted={true}
                        loop={true}
                        playsinline={true}
                        height={"auto"}
                        width={"100%"}
                    />
                    <div
                        className="home-page-hero-banner-background-container"
                        ref={heroBannerBackgroundContainerRef}
                    />
                </div>
            </div>
        </Layout>
    );
};
