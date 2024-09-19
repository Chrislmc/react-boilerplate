import { CheckBox, IOption } from "@/components/molecules/checkBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction } from "react";
import { IProductPageFilter, IProductPageSortBy } from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props
    extends Omit<
        IProductPageFilterBaseProps,
        "activeFilter" | "setActiveFilter"
    > {
    filterOptions: IOption<IProductPageSortBy>[];
    sortBy: IOption<IProductPageSortBy>;
    setSortBy: Dispatch<SetStateAction<IOption<IProductPageSortBy>>>;
}

export const ProductPageSorter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    filterOptions,
    sortBy,
    setSortBy,
}) => {
    const t = i18nHelper("shop");

    const onCheckBoxItemBtnClick = (
        targetOption: IOption<IProductPageSortBy>
    ) => {
        setSortBy(targetOption);
    };

    return (
        <ProductPageFilterWrapper
            header={t("shared.sortBy.header")}
            collapsible={true}
            className={"sort-by"}
            isOpen={filterStatus[IProductPageFilter.SortBy]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IProductPageFilter.SortBy]:
                        !filterStatus[IProductPageFilter.SortBy],
                })
            }
        >
            <>
                {filterOptions.map((option) => {
                    const isSelected = sortBy.value === option.value;

                    return (
                        <CheckBox
                            key={`categories-checkbox-${option.value}`}
                            option={option}
                            isSelected={isSelected}
                            onClick={onCheckBoxItemBtnClick}
                            allowMultiSelect={false}
                        />
                    );
                })}
            </>
        </ProductPageFilterWrapper>
    );
};
