import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSection } from "@/components/imiSection";
import { IOption, ImiSelect } from "@/components/imiSelect";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_practitioners-page.scss";
import { PractitionerCard } from "./practitionersCard";
import {
    IPractitionerType,
    practitionersPageCardList,
    practitionersPageFilterOption,
} from "./practitionersPageConstant";

export const PractitionersPage = () => {
    const t = i18nHelper("practitioners");

    const translatedFilterOption = practitionersPageFilterOption.map(
        (option) => ({ ...option, text: t(option.text) })
    );

    const [selectedOption, setSelectedOption] = useState<
        IOption<IPractitionerType>[]
    >([translatedFilterOption[0]]);

    return (
        <div id="practitioners-page">
            <ImiSection className="practitioners-page-desc-section">
                <ImiDescSection
                    header={t("practitioners.header")}
                    desc={[t("practitioners.desc")]}
                    customFullWidthBottomComponent={
                        <ContainerX>
                            <div className="content-container">
                                <div className="control-container">
                                    <ImiSelect<IPractitionerType>
                                        options={translatedFilterOption}
                                        defaultOption={
                                            translatedFilterOption[0]
                                        }
                                        allOption={translatedFilterOption[0]}
                                        selectedOption={selectedOption}
                                        setSelectedOption={setSelectedOption}
                                    />
                                </div>
                                <div className="card-grid-container">
                                    {practitionersPageCardList.map(
                                        (cardItem) => (
                                            <PractitionerCard
                                                {...cardItem}
                                                button={{
                                                    ...cardItem.button,
                                                    text: t(
                                                        cardItem.button.text
                                                    ),
                                                }}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </ContainerX>
                    }
                />
            </ImiSection>
        </div>
    );
};
