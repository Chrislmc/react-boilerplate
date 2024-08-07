import { IOption, ImiCheckBox } from "@/components/imiCheckBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction } from "react";
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
    selectedOption: IOption<IProductPageHealthNeedFilter>[];
    onChange: Dispatch<SetStateAction<IOption<IProductPageHealthNeedFilter>[]>>;
}

export const ProductPageHealthNeedFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    filterOptions,
    selectedOption,
    onChange,
}) => {
    const t = i18nHelper("shop");

    const onCheckBoxItemBtnClick = (
        targetOption: IOption<IProductPageHealthNeedFilter>,
        isSelected: boolean
    ) => {
        let filteredOption = selectedOption;

        if (isSelected) {
            filteredOption = [
                ...selectedOption.filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredOption = filterOptions.filter(
                (option) =>
                    !!selectedOption.find(
                        (selectedOption) =>
                            selectedOption.value === option.value
                    ) || option.value === targetOption.value
            );
        }

        onChange(filteredOption);
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
                        selectedOption
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
