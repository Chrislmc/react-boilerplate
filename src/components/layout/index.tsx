import { OverlayProvider } from "@/utils/hooks/useOverlay";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";

export const Layout = ({ children }) => {
    const { isMobile, isTablet, isSmallScreen } = useWindowSize();

    return (
        <OverlayProvider>
            {/* {isMobile || isTablet || isSmallScreen ? (
                <TabletHeader />
            ) : (
                <Header />
            )} */}
            <Content>
                <div className="content-container">{children}</div>
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
    );
};
