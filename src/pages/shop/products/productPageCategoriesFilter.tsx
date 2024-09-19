import { CheckBox, IOption } from "@/components/molecules/checkBox";
import { i18nHelper } from "@/utils/i18n-helper";
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
}

export const ProductPageCategoriesFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    filterOptions,
    activeFilter,
    setActiveFilter,
    setIsLoadingList,
}) => {
    const t = i18nHelper("shop");

    const onCheckBoxItemBtnClick = (
        targetOption: IOption<IProductPageCategoriesFilter>,
        isSelected: boolean
    ) => {
        let filteredCategoriesOption =
            activeFilter[IProductPageFilter.Categories];

        if (isSelected) {
            filteredCategoriesOption = [
                ...activeFilter[IProductPageFilter.Categories].filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredCategoriesOption = filterOptions.filter(
                (option) =>
                    !!activeFilter[IProductPageFilter.Categories].find(
                        (activeFilter) => activeFilter.value === option.value
                    ) || option.value === targetOption.value
            );
        }

        setIsLoadingList(true);
        setActiveFilter({
            ...activeFilter,
            [IProductPageFilter.Categories]: filteredCategoriesOption,
        });

        setTimeout(() => {
            setIsLoadingList(false);
        }, 500);
    };

    return (
        <ProductPageFilterWrapper
            header={t("shared.filter.categories.header")}
            collapsible={true}
            className={"categories-filter"}
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
                        activeFilter[IProductPageFilter.Categories]
                            .map((item) => item.value)
                            .indexOf(option.value) > -1;

                    return (
                        <CheckBox
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
