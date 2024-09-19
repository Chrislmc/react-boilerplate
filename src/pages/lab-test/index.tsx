import { Breadcrumb } from "@/components/breadcrumb";
import { DescSection } from "@/components/descSection";
import { Section } from "@/components/section";
import { ITextProps } from "@/components/text";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_lab-test-page.scss";
import { LabTestCard } from "./labTestCard";
import { LabTestDetailCard } from "./labTestDetailCard";
import { labTestCardList } from "./labTestPageConstant";

export const LabTestPage = () => {
    const t = i18nHelper("lab-test");
    const [activeCard, setActiveCard] = useState("");

    const detailCardContent: ITextProps[] =
        labTestCardList.find((card) => card.id === activeCard)?.detailDesc ||
        [];

    const translatedDetailCardContent = detailCardContent.map((content) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const toReturn: any = {};

        Object.entries(content).map(([key, value]: string[]) => {
            toReturn[key as string] = t(value);
        });

        return toReturn as ITextProps;
    });

    const firstRowContent = labTestCardList.filter(
        (card) => ["1", "2", "3"].indexOf(card.id) > -1
    );
    const secondRowContent = labTestCardList.filter(
        (card) => ["4", "5", "6"].indexOf(card.id) > -1
    );

    const isFirstRowActive = ["1", "2", "3"].indexOf(activeCard) > -1;
    const isSecondRowActive = ["4", "5", "6"].indexOf(activeCard) > -1;

    return (
        <div id="lab-test-page">
            <Section className="lab-test-page-desc-section">
                <DescSection
                    header={t("labTest.header")}
                    subheader={t("labTest.subheader")}
                    desc={[
                        t("labTest.desc1"),
                        t("labTest.desc2"),
                        t("labTest.desc3"),
                    ]}
                    shrinkDescWidth
                    customBottomComponent={
                        <div className="custom-bottom-component">
                            <div
                                className={`card-cluster first-cluster${
                                    isFirstRowActive ? " mod__is-expanded" : ""
                                }`}
                            >
                                <div className="card-row">
                                    {firstRowContent.map((card, i) => (
                                        <LabTestCard
                                            key={`card-${i}`}
                                            id={card.id}
                                            header={t(card.header)}
                                            descs={card.descs.map((desc) =>
                                                t(desc)
                                            )}
                                            activeCard={activeCard}
                                            setActiveCard={setActiveCard}
                                        />
                                    ))}
                                </div>

                                <div
                                    className={`detail-container${
                                        isFirstRowActive
                                            ? " mod__is-expanded"
                                            : ""
                                    }`}
                                >
                                    <LabTestDetailCard
                                        descs={translatedDetailCardContent}
                                        isExpanded={isFirstRowActive}
                                    />
                                </div>
                            </div>

                            <div
                                className={`card-cluster second-cluster${
                                    isSecondRowActive ? " mod__is-expanded" : ""
                                }`}
                            >
                                <div className="card-row">
                                    {secondRowContent.map((card, i) => (
                                        <LabTestCard
                                            key={`card-${i}`}
                                            id={card.id}
                                            header={t(card.header)}
                                            descs={card.descs.map((desc) =>
                                                t(desc)
                                            )}
                                            activeCard={activeCard}
                                            setActiveCard={setActiveCard}
                                        />
                                    ))}
                                </div>

                                <div
                                    className={`detail-container${
                                        isSecondRowActive
                                            ? " mod__is-expanded"
                                            : ""
                                    }`}
                                >
                                    <LabTestDetailCard
                                        descs={translatedDetailCardContent}
                                        isExpanded={isSecondRowActive}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Section>

            <Breadcrumb />
        </div>
    );
};
