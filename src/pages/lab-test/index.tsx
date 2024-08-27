import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSection } from "@/components/imiSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_lab-test-page.scss";
import { LabTestCard } from "./labTestCard";
import { labTestCardList } from "./labTestPageConstant";

export const LabTestPage = () => {
    const t = i18nHelper("lab-test");
    const [activeCard, setActiveCard] = useState("");

    return (
        <div id="lab-test-page">
            <ImiSection className="lab-test-page-desc-section">
                <ImiDescSection
                    header={t("labTest.header")}
                    subheader={t("labTest.subheader")}
                    desc={[
                        t("labTest.desc1"),
                        t("labTest.desc2"),
                        t("labTest.desc3"),
                    ]}
                    shrinkDescWidth
                    customBottomComponent={
                        <div className="card-row">
                            {labTestCardList.map((card, i) => (
                                <LabTestCard
                                    key={`card-${i}`}
                                    id={card.id}
                                    header={t(card.header)}
                                    descs={card.descs.map((desc) => t(desc))}
                                    activeCard={activeCard}
                                    setActiveCard={setActiveCard}
                                />
                            ))}
                        </div>
                    }
                />
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
