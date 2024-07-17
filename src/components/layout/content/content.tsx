import { forwardRef, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import "./_content.scss";
import { ISeo, defaultSeo, mapPathNameToSeo } from "./mapPathNameToSeo";

type ContentProps = { children: React.ReactNode };

export const Content = forwardRef<HTMLDivElement, ContentProps>(function (
    { children },
    ref
) {
    const location = useLocation();
    const [seoContent, setSeoContent] = useState<ISeo>(defaultSeo);

    useLayoutEffect(() => {
        const main = document.getElementsByTagName("main")[0];

        if (!main) return;

        main.scrollTo(0, 0);

        setSeoContent(mapPathNameToSeo?.[location.pathname]);
    }, [location.pathname]);

    return (
        <div className="site-content" ref={ref}>
            {!!seoContent && (
                <Helmet>
                    <title>{seoContent.title}</title>
                    <meta name="description" content={seoContent.description} />
                </Helmet>
            )}
            {children ?? "Content"}
        </div>
    );
});
