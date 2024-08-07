import { IOption, ImiCheckBox } from "@/components/imiCheckBox";
import { i18nHelper } from "@/utils/i18n-helper";
import {
    IProductPageFilter,
    IProductPageHealthNeedFilter,
} from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {
    filterOptions: IOption<IProductPageHealthNeedFilter>[];
}

export const ProductPageHealthNeedFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    filterOptions,
    activeFilter,
    setActiveFilter,
}) => {
    const t = i18nHelper("shop");

    const onCheckBoxItemBtnClick = (
        targetOption: IOption<IProductPageHealthNeedFilter>,
        isSelected: boolean
    ) => {
        let filteredHealthNeedOption =
            activeFilter[IProductPageFilter.HealthNeed];

        if (isSelected) {
            filteredHealthNeedOption = [
                ...activeFilter[IProductPageFilter.HealthNeed].filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredHealthNeedOption = filterOptions.filter(
                (option) =>
                    !!activeFilter[IProductPageFilter.HealthNeed].find(
                        (selectedItem) => selectedItem.value === option.value
                    ) || option.value === targetOption.value
            );
        }

        setActiveFilter({
            ...activeFilter,
            [IProductPageFilter.HealthNeed]: filteredHealthNeedOption,
        });
    };

    return (
        <ProductPageFilterWrapper
            header={t("shared.filter.healthNeed.header")}
            collapsible={true}
            className={"health-need-filter"}
            isOpen={filterStatus[IProductPageFilter.HealthNeed]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IProductPageFilter.HealthNeed]:
                        !filterStatus[IProductPageFilter.HealthNeed],
                })
            }
        >
            <>
                {filterOptions.map((option) => {
                    const isSelected =
                        activeFilter[IProductPageFilter.HealthNeed]
                            .map((item) => item.value)
                            .indexOf(option.value) > -1;

                    return (
                        <ImiCheckBox
                            key={`categories-checkbox-${option.value}`}
                            option={option}
                            isSelected={isSelected}
                            onClick={onCheckBoxItemBtnClick}
                        />
                    );
                })}
            </>
        </ProductPageFilterWrapper>
    );
};
