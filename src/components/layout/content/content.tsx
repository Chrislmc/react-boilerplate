import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { ISeo, mapPathNameToSeo } from "./mapPathNameToSeo";

export const Content = ({ children }) => {
    const location = useLocation();
    const [seoContent, setSeoContent] = useState<ISeo>(undefined);

    useEffect(() => {
        document.getElementsByTagName("main")[0].scrollTo(0, 0);

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
