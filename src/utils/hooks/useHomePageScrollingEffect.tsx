import { useCallback, useEffect, useRef, useState } from "react";
import { convertRemToPx } from "../css-helper";
import { linearGradientColorHelper } from "../linear-gradient-color-helper";

// const primaryLightColorRgb = [52, 171, 164];
const primaryLightColor = `rgb(52,171,164)`;
// #80C1C6
const primary400ColorRgb = [128, 193, 198];
// const primary400Color = `rgb(128,193,198)`;
const primaryColorRgb = [0, 130, 140];
const primaryColor = `rgb(0,130,140)`;
// #d9eee6
const primary300Color = `rgb(217,238,230)`;
const whiteColorRgb = [255, 255, 255];
const whiteColor = `rgb(255,255,255)`;

/* Handle all HomePage special style when scrolling */
export const useHomePageScrollingEffect = () => {
    const heroBannerBackgroundContainerRef = useRef<HTMLDivElement>(null);
    const siteContentRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [siteContentDiv, setSiteContentDiv] = useState<HTMLDivElement | null>(
        null
    );
    const [isHoveringTranslationButton, setIsHoveringTranslationButton] =
        useState(false);
    const scrollTill = convertRemToPx(8.75);

    useEffect(() => {
        setSiteContentDiv(siteContentRef?.current);

        if (siteContentRef?.current) {
            siteContentRef.current.addEventListener("scroll", () =>
                setIsScrolling(true)
            );
            siteContentRef.current.addEventListener("scrollend", () =>
                setIsScrolling(false)
            );
        }
    }, []);

    const onMouseEnter = useCallback(
        (button: HTMLButtonElement) => {
            if (!siteContentDiv) {
                return null;
            }

            const isCurrentTranslationButton =
                button.className.indexOf("mod__current") > -1;

            setIsHoveringTranslationButton(true);
            const currentScrollPosition = (siteContentDiv as HTMLDivElement)
                .scrollTop;

            const currentRatio =
                currentScrollPosition > scrollTill
                    ? 1
                    : currentScrollPosition / scrollTill;

            if (currentRatio < 0.5) {
                button.style.borderColor = isCurrentTranslationButton
                    ? primary300Color
                    : whiteColor;
                button.style.backgroundColor = isCurrentTranslationButton
                    ? primary300Color
                    : whiteColor;
                button.style.color = isCurrentTranslationButton
                    ? primaryColor
                    : primaryLightColor;
            } else if (currentRatio > 0.5) {
                button.style.borderColor = primaryColor;
                button.style.backgroundColor = primaryColor;
                button.style.color = whiteColor;
            }
        },
        [scrollTill, siteContentDiv]
    );

    const onMouseLeave = useCallback(
        (button: HTMLButtonElement) => {
            if (!siteContentDiv) {
                return null;
            }

            const currentScrollPosition = (siteContentDiv as HTMLDivElement)
                .scrollTop;

            const currentRatio =
                currentScrollPosition > scrollTill
                    ? 1
                    : currentScrollPosition / scrollTill;

            if (currentRatio < 0.5) {
                const { currentColor } = linearGradientColorHelper({
                    sourceColorRgb: whiteColorRgb,
                    targetColorRgb: primaryColorRgb,
                    ratio: currentRatio,
                });

                button.style.borderColor = currentColor;
                button.style.color = currentColor;
                button.style.backgroundColor = "transparent";
            } else if (currentRatio > 0.5) {
                const { currentColor } = linearGradientColorHelper({
                    sourceColorRgb: whiteColorRgb,
                    targetColorRgb: primaryColorRgb,
                    ratio: currentRatio,
                });

                button.style.borderColor = currentColor;
                button.style.backgroundColor = "transparent";
                button.style.color = currentColor;
            }
            setIsHoveringTranslationButton(false);
        },
        [scrollTill, siteContentDiv]
    );

    useEffect(() => {
        if (!siteContentDiv) {
            return;
        }

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
        const siteHeaderRibbonItems = document.getElementsByClassName(
            "site-header-ribbon-item"
        );
        const homePageBannerCardGradientOverlays =
            document.getElementsByClassName(
                "home-page-banner-card-gradient-overlay"
            );

        const onScroll = () => {
            const currentScrollPosition = (siteContentDiv as HTMLDivElement)
                .scrollTop;

            const currentRatio =
                currentScrollPosition > scrollTill
                    ? 1
                    : currentScrollPosition / scrollTill;

            console.log(currentRatio.toString(), currentScrollPosition);
            (siteHeaderLinkRibbonDiv as HTMLDivElement).style.opacity =
                currentRatio.toString();

            (
                siteHeaderContentContainerBackgroundDiv as HTMLDivElement
            ).style.opacity = currentRatio.toString();

            const { currentColor } = linearGradientColorHelper({
                sourceColorRgb: whiteColorRgb,
                targetColorRgb: primaryColorRgb,
                ratio: currentRatio,
            });

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
            if (!isHoveringTranslationButton) {
                for (const button of siteHeaderTranslationButtons) {
                    const isCurrentTranslationButton =
                        button.className.indexOf("mod__current") > -1;

                    const { currentColor: currentButtonColor } =
                        linearGradientColorHelper({
                            sourceColorRgb: whiteColorRgb,
                            // targetColorRgb: primaryColorRgb,
                            targetColorRgb: isCurrentTranslationButton
                                ? primaryColorRgb
                                : primary400ColorRgb,
                            ratio: currentRatio,
                        });

                    (button as HTMLButtonElement).style.borderColor =
                        currentButtonColor;
                    (button as HTMLButtonElement).style.color =
                        currentButtonColor;
                }
            }
            for (const paragraph of siteHeaderLogoCharacters) {
                (paragraph as HTMLParagraphElement).style.color = currentColor;
            }

            for (const div of homePageBannerCardGradientOverlays) {
                (div as HTMLDivElement).style.opacity = (
                    1 - currentRatio
                ).toString();
            }

            setIsAutoScrolling(true);
            if (currentRatio < 0.5) {
                // Remove auto scroll
                // (siteContentDiv as HTMLDivElement).scrollTo({
                //     top: 0,
                //     left: 0,
                //     behavior: "smooth",
                // });
                siteHeaderRibbonItems;
                for (const item of siteHeaderRibbonItems) {
                    (item as HTMLDivElement).style.pointerEvents = "none";
                }
            } else if (currentRatio > 0.5 && currentRatio < 1) {
                // Remove auto scroll
                // (siteContentDiv as HTMLDivElement).scrollTo({
                //     top: scrollTill,
                //     left: 0,
                //     behavior: "smooth",
                // });
                for (const item of siteHeaderRibbonItems) {
                    (item as HTMLDivElement).style.pointerEvents = "auto";
                }
            }
            setIsAutoScrolling(false);
        };

        /* Run the color change on first rendering */
        onScroll();

        siteContentDiv.addEventListener("scroll", () => {
            if (!isScrolling && !isAutoScrolling) {
                onScroll();
            }
        });

        for (const button of siteHeaderTranslationButtons) {
            (button as HTMLButtonElement).addEventListener("mouseenter", () =>
                onMouseEnter(button as HTMLButtonElement)
            );
            (button as HTMLButtonElement).addEventListener("mouseleave", () =>
                onMouseLeave(button as HTMLButtonElement)
            );
        }
    }, [
        isScrolling,
        isAutoScrolling,
        isHoveringTranslationButton,
        onMouseEnter,
        onMouseLeave,
        scrollTill,
        siteContentDiv,
    ]);

    return { heroBannerBackgroundContainerRef, siteContentRef };
};
