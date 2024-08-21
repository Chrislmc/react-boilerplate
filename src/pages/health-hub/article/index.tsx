import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSection } from "@/components/imiSection";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
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
            <ImiSection className="detail-section">
                <SectionContainerY>
                    <ImiDescSection
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
            </ImiSection>

            <ImiBreadcrumb customRouteDesc={t(articleDetail.title)} />
        </div>
    );
};
