import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { Outlet } from "react-router-dom";
import "./_layout.scss";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

type Props = React.FC<{ children?: React.ReactNode; className?: string }>;

export const Layout: Props = ({ children, className }) => {
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

    return (
        <OverlayProvider>
            <div className={`site-layout ${className ? className : ""}`}>
                {isMobile || isTablet || isSmallScreen ? (
                    <Header />
                ) : (
                    <Header />
                )}
                <Content>
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
};
