import { IOption } from "@/components/imiCheckBox";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiInput } from "@/components/imiInput";
import { ImiSection } from "@/components/imiSection";
import { ImiSelect } from "@/components/imiSelect";
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

    const [searchString, setSearchString] = useState<string>("");

    const [selectedOption, setSelectedOption] = useState<
        IOption<IPractitionerType>[]
    >([translatedFilterOption[0]]);
    const [inTransition, setInTransition] = useState(false);

    const filteredCardList =
        selectedOption[0].value === IPractitionerType.ALL_SERVICES
            ? practitionersPageCardList
            : practitionersPageCardList.filter(
                  (cardItem) =>
                      selectedOption.filter(
                          (sOption) =>
                              cardItem.types.indexOf(sOption.value) > -1
                      )?.length
              );

    const finalCardList = searchString?.length
        ? filteredCardList?.filter(
              (cardItem) =>
                  cardItem.name
                      .toLocaleLowerCase()
                      .indexOf(searchString.toLocaleLowerCase()) > -1
          )
        : filteredCardList;

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
                                        setInTransition={setInTransition}
                                    />
                                    <ImiInput
                                        placeholder={"input.searchByName"}
                                        value={searchString}
                                        setValue={setSearchString}
                                    />
                                </div>
                                {finalCardList?.length ? (
                                    <div
                                        className={`card-grid-container${
                                            inTransition
                                                ? " mod__in-transition"
                                                : ""
                                        }`}
                                    >
                                        {finalCardList.map((cardItem) => (
                                            <PractitionerCard
                                                key={`practitioner-card-${cardItem.id}`}
                                                {...cardItem}
                                                button={{
                                                    ...cardItem.button,
                                                    text: t(
                                                        cardItem.button.text
                                                    ),
                                                }}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div
                                        className={`empty-state${
                                            inTransition
                                                ? " mod__in-transition"
                                                : ""
                                        }`}
                                    >
                                        <h5>{t("practitioners.emptyState")}</h5>
                                    </div>
                                )}
                            </div>
                        </ContainerX>
                    }
                />
            </ImiSection>
        </div>
    );
};
