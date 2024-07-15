import { useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { ISeo, defaultSeo, mapPathNameToSeo } from "./mapPathNameToSeo";

type Props = React.FC<{ children: React.ReactNode }>;

export const Content: Props = ({ children }) => {
    const location = useLocation();
    const [seoContent, setSeoContent] = useState<ISeo>(defaultSeo);

    useLayoutEffect(() => {
        const main = document.getElementsByTagName("main")[0];

        if (!main) return;

        main.scrollTo(0, 0);

        setSeoContent(mapPathNameToSeo?.[location.pathname]);
    }, [location.pathname]);

    return (
        <div className="site-content">
            {!!seoContent && (
                <Helmet>
                    <title>{seoContent.title}</title>
                    <meta name="description" content={seoContent.description} />
                </Helmet>
            )}
            {children ?? "Content"}
        </div>
    );
};
