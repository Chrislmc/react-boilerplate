import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_health-condition-page.scss";
import { HealthConditionPageArticlesAndVideos } from "./healthConditionPageArticlesAndVideos";
import { HealthConditionPageBookNowSection } from "./healthConditionPageBookNow";
import { HealthConditionPageConditionFilter } from "./healthConditionPageConditionFilter";
import {
    IHealthConditionPageActiveFilter,
    IHealthConditionPageFilter,
    initialFilter,
} from "./healthConditionPageConstant";
import { HealthConditionPageDescContent } from "./healthConditionPageDescContent";
import { HealthConditionPageDetail } from "./healthConditionPageDetail";
import { HealthConditionPageFeatureConditionFilter } from "./healthConditionPageFeatureConditionFilter";

export const HealthConditionPage = () => {
    const t = i18nHelper("health-condition");

    const [isLoadingList, setIsLoadingList] = useState<boolean>(false);
    const [filterStatus, setFilterStatus] = useState<{
        [key in IHealthConditionPageFilter]: boolean;
    }>({
        conditions: true,
        featuredConditions: true,
    });
    const [activeFilter, setActiveFilter] =
        useState<IHealthConditionPageActiveFilter>(initialFilter);

    return (
        <div id="health-condition-page">
            <ImiSection className="health-content-section">
                <ContainerX leftOnly>
                    <SectionContainerY>
                        <ImiSectionHeader
                            header={t("healthCondition.header")}
                        />

                        <div className="content-row">
                            <div className="condition-column">
                                <div className="filter-list-container">
                                    <HealthConditionPageConditionFilter
                                        filterStatus={filterStatus}
                                        setFilterStatus={setFilterStatus}
                                        activeFilter={activeFilter}
                                        setActiveFilter={setActiveFilter}
                                        setIsLoadingList={setIsLoadingList}
                                    />
                                </div>

                                <div className="filter-list-container">
                                    <HealthConditionPageFeatureConditionFilter
                                        activeFilter={activeFilter}
                                        setActiveFilter={setActiveFilter}
                                        setIsLoadingList={setIsLoadingList}
                                    />
                                </div>
                            </div>

                            <div className="main-container">
                                <HealthConditionPageDescContent />
                                <HealthConditionPageDetail />
                                <HealthConditionPageBookNowSection />
                                <HealthConditionPageArticlesAndVideos />
                            </div>
                        </div>
                    </SectionContainerY>
                </ContainerX>
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
