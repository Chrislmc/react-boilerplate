import { ImiBreadcrumb } from "@/components/breadcrumb";
import { DescSection } from "@/components/descSection";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { Section } from "@/components/section";
import { i18nHelper } from "@/utils/i18n-helper";
import { useLocation } from "react-router-dom";
import { healthHubArticleList } from "../healthHubPageConstant";
import "./_article.scss";

export const ArticlePage = () => {
    const location = useLocation();
    const t = i18nHelper("health-hub");
    const articleId = location.pathname?.slice(-1)[0];

    const articleDetail = healthHubArticleList.filter(
        (article) => article.id === articleId
    )[0];

    return (
        <div id="article-page">
            <Section className="detail-section">
                <SectionContainerY>
                    <DescSection
                        header={t(articleDetail.title)}
                        heroImg={{ imgUrl: articleDetail.imgUrl }}
                        customBottomComponent={
                            <div className="article-content-container">
                                {articleDetail.content.map((content, i) => (
                                    <p
                                        key={`article-content-${i}`}
                                        className="article-content-desc"
                                    >
                                        {t(content)}
                                    </p>
                                ))}
                            </div>
                        }
                    />
                </SectionContainerY>
            </Section>

            <ImiBreadcrumb customRouteDesc={t(articleDetail.title)} />
        </div>
    );
};
