import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { forwardRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./_layout.scss";
import { Content } from "./content/content";
import { FloatingIcon } from "./floatingIcon";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Overlay } from "./overlay/overlay";

type LayoutProps = {
    children?: React.ReactNode;
    className?: string;
};

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(function (
    { children, className },
    ref
) {
    const location = useLocation();
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

    useEffect(() => {
        if (
            location.pathname &&
            document.getElementsByClassName("site-content")?.length
        ) {
            document
                .getElementsByClassName("site-content")[0]
                .scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname]);

    return (
        <OverlayProvider>
            <div className={`site-layout ${className ? className : ""}`}>
                {isMobile || isTablet || isSmallScreen ? (
                    <Header />
                ) : (
                    <Header />
                )}
                <Content ref={ref}>
                    <div className="content-container">
                        <Outlet />
                        {children && children}
                    </div>
                    {isMobile || isTablet || isSmallScreen ? (
                        <Footer />
                    ) : (
                        <Footer />
                    )}
                </Content>

                <Overlay />
                <FloatingIcon />
            </div>
        </OverlayProvider>
    );
});
