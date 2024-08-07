import { IOption, ImiCheckBox } from "@/components/imiCheckBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction } from "react";
import {
    IProductPageCategoriesFilter,
    IProductPageFilter,
} from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {
    filterOptions: IOption<IProductPageCategoriesFilter>[];
    selectedOption: IOption<IProductPageCategoriesFilter>[];
    onChange: Dispatch<SetStateAction<IOption<IProductPageCategoriesFilter>[]>>;
}

export const ProductPageCategoriesFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    filterOptions,
    selectedOption,
    onChange,
}) => {
    const t = i18nHelper("shop");

    const onCheckBoxItemBtnClick = (
        targetOption: IOption<IProductPageCategoriesFilter>,
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
            header={t("shared.filter.categories.header")}
            collapsible={true}
            className={"price-filter"}
            isOpen={filterStatus[IProductPageFilter.Categories]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IProductPageFilter.Categories]:
                        !filterStatus[IProductPageFilter.Categories],
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
