import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { forwardRef } from "react";
import { Outlet } from "react-router-dom";
import "./_layout.scss";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

type LayoutProps = {
    children?: React.ReactNode;
    className?: string;
};

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(function (
    { children, className },
    ref
) {
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

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

                {/* {!!data && !!data?.data.length && (
                <FloatingIcon
                    imageUrl={data?.data[0].image}
                    imageOnly
                    imageRedirectUrl={data?.data[0].link}
                />
            )} */}
                {/* <Overlay /> */}
            </div>
        </OverlayProvider>
    );
});
