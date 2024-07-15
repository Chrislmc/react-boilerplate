import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { Outlet } from "react-router-dom";
import "./_layout.scss";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";

type Props = React.FC;

export const Layout: Props = () => {
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

    return (
        <OverlayProvider>
            <div className="site-layout">
                {/* {isMobile || isTablet || isSmallScreen ? (
                <TabletHeader />
            ) : (
                <Header />
            )} */}
                <Content>
                    <div className="content-container">
                        <Outlet />
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
