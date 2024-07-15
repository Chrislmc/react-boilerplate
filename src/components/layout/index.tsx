import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { Outlet } from "react-router-dom";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";

type Props = React.FC<{ children?: React.ReactNode }>;

export const Layout: Props = ({ children }) => {
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

    return (
        <div>
            <OverlayProvider>
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
            </OverlayProvider>
        </div>
    );
};
