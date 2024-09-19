import { IOption } from "@/components/molecules/checkBox";
import { ProductPageFilterWrapper } from "@/pages/shop/products/productPageFilterWrapper";
import { i18nHelper } from "@/utils/i18n-helper";
import {
    healthConditionPageFeaturedConditionList,
    IHealthConditionPageFilter,
} from "./healthConditionPageConstant";
import { IHealthConditionPageFilterBaseProps } from "./healthConditionPageFilterWrapper";

type Props = Omit<
    IHealthConditionPageFilterBaseProps,
    "filterStatus" | "setFilterStatus"
>;

export const HealthConditionPageFeatureConditionFilter: React.FC<Props> = ({
    activeFilter,
    setActiveFilter,
}) => {
    const t = i18nHelper("others");

    const onConditionClick = (
        targetOption: IOption<string>,
        isSelected: boolean
    ) => {
        let filteredConditionsOption =
            activeFilter[IHealthConditionPageFilter.FeaturedConditions];

        if (isSelected) {
            filteredConditionsOption = [
                ...activeFilter[
                    IHealthConditionPageFilter.FeaturedConditions
                ].filter((option) => option.value !== targetOption.value),
            ];
        } else {
            filteredConditionsOption =
                healthConditionPageFeaturedConditionList?.filter(
                    (option) =>
                        !!activeFilter[
                            IHealthConditionPageFilter.FeaturedConditions
                        ].find(
                            (selectedItem) =>
                                selectedItem.value === option.value
                        ) || option.value === targetOption.value
                ) || [];
        }

        setActiveFilter({
            ...activeFilter,
            [IHealthConditionPageFilter.FeaturedConditions]:
                filteredConditionsOption,
        });
    };

    return (
        <ProductPageFilterWrapper
            header={t("shared.filter.featuredConditions.header")}
            collapsible={false}
            className={"featured-conditions-filter"}
            isOpen={true}
            setIsOpen={() => null}
        >
            <div className={`condition-list-container mod__expanded`}>
                <div className="condition-list">
                    {healthConditionPageFeaturedConditionList.map((option) => {
                        const isSelected =
                            activeFilter[
                                IHealthConditionPageFilter.FeaturedConditions
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
                                    onConditionClick(option, isSelected)
                                }
                            >
                                <span>{t(option.text)}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </ProductPageFilterWrapper>
    );
};
