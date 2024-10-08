import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import Timeline from "react-elegant-timeline";
import "react-elegant-timeline/dist/styles.css";
import { timelineData } from "./homePageConstant";

export const HomePageExperienceSection = () => {
    const t = i18nHelper("home-page");

    const translatedTimelineDate = timelineData.map((data) => ({
        ...data,
        title: t(data.title),
        description: t(data.description),
        tagline: t(data.tagline),
        buttonText: t(data.buttonText),
    }));

    return (
        <div className="subsection">
            <div className="header-container intercept-header">
                <ContainerX>
                    <div className="content-container">
                        <h2 className="header">{t("experience.header")}</h2>
                    </div>
                </ContainerX>
            </div>
            <ContainerX>
                <Timeline data={translatedTimelineDate} />
            </ContainerX>
        </div>
    );
};
