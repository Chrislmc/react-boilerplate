import { IOption } from "@/components/atoms/checkBox";
import { Input } from "@/components/atoms/input";
import { DescSection } from "@/components/descSection";
import { ContainerX } from "@/components/layout/containerX";
import { OldSelect } from "@/components/molecules/select";
import { Section } from "@/components/section";
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
            <Section className="practitioners-page-desc-section">
                <DescSection
                    header={t("practitioners.header")}
                    desc={[t("practitioners.desc")]}
                    customFullWidthBottomComponent={
                        <ContainerX>
                            <div className="content-container">
                                <div className="control-container">
                                    <OldSelect<IPractitionerType>
                                        options={translatedFilterOption}
                                        defaultOption={
                                            translatedFilterOption[0]
                                        }
                                        allOption={translatedFilterOption[0]}
                                        value={selectedOption}
                                        setValue={setSelectedOption}
                                        setInTransition={setInTransition}
                                    />
                                    <Input
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
            </Section>
        </div>
    );
};
