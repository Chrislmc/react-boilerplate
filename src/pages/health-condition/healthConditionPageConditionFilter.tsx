import { ImiButton } from "@/components/imiButton";
import { IOption } from "@/components/imiCheckBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import {
    healthConditionPageConditionsFilterOption,
    healthConditionPageSampleConditionList,
    IHealthConditionPageConditionsFilter,
    IHealthConditionPageFilter,
    initialFilter,
} from "./healthConditionPageConstant";
import {
    HealthConditionPageFilterWrapper,
    IHealthConditionPageFilterBaseProps,
} from "./healthConditionPageFilterWrapper";

interface Props extends IHealthConditionPageFilterBaseProps {}

export const HealthConditionPageConditionFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    activeFilter,
    setActiveFilter,
}) => {
    const t = i18nHelper("health-condition");

    const translatedConditionsFilterOption =
        healthConditionPageConditionsFilterOption.map((option) => ({
            ...option,
            text: t(option.text),
        }));

    const [selectedConditionsCharacter, setSelectedConditionsCharacter] =
        useState<IOption<IHealthConditionPageConditionsFilter> | null>(null);
    const [isLoadingConditionList, setIsLoadingConditionList] = useState(false);

    const showConditionList =
        selectedConditionsCharacter &&
        healthConditionPageSampleConditionList?.[
            selectedConditionsCharacter.value
        ]?.length;

    const onCharacterBtnClick = (
        targetOption: IOption<IHealthConditionPageConditionsFilter>,
        isSelected: boolean
    ) => {
        if (selectedConditionsCharacter) {
            setIsLoadingConditionList(true);

            /* Reset condition name filter */
            setActiveFilter({
                ...activeFilter,
                [IHealthConditionPageFilter.Conditions]: [],
            });

            setTimeout(() => {
                if (isSelected) {
                    setSelectedConditionsCharacter(null);
                } else {
                    setSelectedConditionsCharacter(targetOption);
                }
                setIsLoadingConditionList(false);
            }, 500);
        } else {
            setSelectedConditionsCharacter(targetOption);
        }
    };

    const onConditionNameClick = (
        targetOption: IOption<string>,
        isSelected: boolean
    ) => {
        if (!selectedConditionsCharacter) return;
        let filteredConditionsOption =
            activeFilter[IHealthConditionPageFilter.Conditions];

        if (isSelected) {
            filteredConditionsOption = [
                ...activeFilter[IHealthConditionPageFilter.Conditions].filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredConditionsOption =
                healthConditionPageSampleConditionList?.[
                    selectedConditionsCharacter.value
                ]?.filter(
                    (option) =>
                        !!activeFilter[
                            IHealthConditionPageFilter.Conditions
                        ].find(
                            (selectedItem) =>
                                selectedItem.value === option.value
                        ) || option.value === targetOption.value
                ) || [];
        }

        setActiveFilter({
            ...activeFilter,
            [IHealthConditionPageFilter.Conditions]: filteredConditionsOption,
        });
    };

    return (
        <HealthConditionPageFilterWrapper
            header={t("shared.filter.conditions.header")}
            collapsible={false}
            className={"conditions-filter"}
            isOpen={filterStatus[IHealthConditionPageFilter.Conditions]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IHealthConditionPageFilter.Conditions]:
                        !filterStatus[IHealthConditionPageFilter.Conditions],
                })
            }
            customHeaderRightComponent={
                <ImiButton
                    text={t("shared.filter.clear")}
                    size="padding"
                    onClick={() => setActiveFilter(initialFilter)}
                />
            }
        >
            <>
                <div
                    className={`condition-grid-container${
                        isLoadingConditionList ? " mod__in-transition" : ""
                    }`}
                >
                    {translatedConditionsFilterOption.map((option) => {
                        const isSelected =
                            selectedConditionsCharacter?.value === option.value;
                        const hasAvailableBrands =
                            healthConditionPageSampleConditionList[option.value]
                                ?.length;

                        return (
                            <div
                                key={`condition-character-${option.value}`}
                                className={`condition-character-container${
                                    isSelected ? " mod__selected" : ""
                                }`}
                            >
                                <button
                                    className={`condition-character-btn${
                                        isSelected ? " mod__selected" : ""
                                    }${
                                        isLoadingConditionList
                                            ? " mod__in-transition"
                                            : ""
                                    }${
                                        hasAvailableBrands
                                            ? " mod__has-available-conditions"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        if (!isLoadingConditionList) {
                                            onCharacterBtnClick(
                                                option,
                                                isSelected
                                            );
                                        }
                                    }}
                                    disabled={
                                        !filterStatus[
                                            IHealthConditionPageFilter
                                                .Conditions
                                        ] ||
                                        isLoadingConditionList ||
                                        !hasAvailableBrands
                                    }
                                >
                                    <span>{option.text}</span>
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div
                    className={`condition-list-container${
                        showConditionList && !isLoadingConditionList
                            ? " mod__expanded"
                            : ""
                    }`}
                >
                    <h5 className="condition-character-header">
                        {selectedConditionsCharacter?.value}
                    </h5>
                    <div className="condition-list">
                        {showConditionList
                            ? healthConditionPageSampleConditionList[
                                  selectedConditionsCharacter.value
                              ].map((option) => {
                                  const isSelected =
                                      activeFilter[
                                          IHealthConditionPageFilter.Conditions
                                      ]
                                          .map((item) => item.value)
                                          .indexOf(option.value) > -1;

                                  return (
                                      <button
                                          key={`condition-btn-${option.value}`}
                                          className={`condition-name-btn${
                                              isSelected ? " mod__selected" : ""
                                          }`}
                                          onClick={() =>
                                              onConditionNameClick(
                                                  option,
                                                  isSelected
                                              )
                                          }
                                      >
                                          <span>{option.text}</span>
                                      </button>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </>
        </HealthConditionPageFilterWrapper>
    );
};
