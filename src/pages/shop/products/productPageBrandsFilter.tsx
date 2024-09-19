import { IOption } from "@/components/checkBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import {
    IProductPageBrandsFilter,
    IProductPageFilter,
    productPageBrandsFilterOption,
    productPageSampleBrandList,
} from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {}

export const ProductPageBrandsFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    activeFilter,
    setActiveFilter,
}) => {
    const t = i18nHelper("shop");

    const translatedBrandsFilterOption = productPageBrandsFilterOption.map(
        (option) => ({
            ...option,
            text: t(option.text),
        })
    );

    const [selectedBrandsCharacter, setSelectedBrandsCharacter] =
        useState<IOption<IProductPageBrandsFilter> | null>(null);
    const [isLoadingBrandList, setIsLoadingBrandList] = useState(false);

    const showBrandList =
        selectedBrandsCharacter &&
        productPageSampleBrandList?.[selectedBrandsCharacter.value]?.length;

    const onCharacterBtnClick = (
        targetOption: IOption<IProductPageBrandsFilter>,
        isSelected: boolean
    ) => {
        if (selectedBrandsCharacter) {
            setIsLoadingBrandList(true);

            /* Reset brand name filter */
            setActiveFilter({
                ...activeFilter,
                [IProductPageFilter.Brands]: [],
            });

            setTimeout(() => {
                if (isSelected) {
                    setSelectedBrandsCharacter(null);
                } else {
                    setSelectedBrandsCharacter(targetOption);
                }
                setIsLoadingBrandList(false);
            }, 500);
        } else {
            setSelectedBrandsCharacter(targetOption);
        }
    };

    const onBrandNameClick = (
        targetOption: IOption<string>,
        isSelected: boolean
    ) => {
        if (!selectedBrandsCharacter) return;
        let filteredBrandsOption = activeFilter[IProductPageFilter.Brands];

        if (isSelected) {
            filteredBrandsOption = [
                ...activeFilter[IProductPageFilter.Brands].filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredBrandsOption =
                productPageSampleBrandList?.[
                    selectedBrandsCharacter.value
                ]?.filter(
                    (option) =>
                        !!activeFilter[IProductPageFilter.Brands].find(
                            (selectedItem) =>
                                selectedItem.value === option.value
                        ) || option.value === targetOption.value
                ) || [];
        }

        setActiveFilter({
            ...activeFilter,
            [IProductPageFilter.Brands]: filteredBrandsOption,
        });
    };

    return (
        <ProductPageFilterWrapper
            header={t("shared.filter.brands.header")}
            collapsible={true}
            className={"brands-filter"}
            isOpen={filterStatus[IProductPageFilter.Brands]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IProductPageFilter.Brands]:
                        !filterStatus[IProductPageFilter.Brands],
                })
            }
        >
            <>
                <div
                    className={`brand-grid-container${
                        isLoadingBrandList ? " mod__in-transition" : ""
                    }`}
                >
                    {translatedBrandsFilterOption.map((option) => {
                        const isSelected =
                            selectedBrandsCharacter?.value === option.value;
                        const hasAvailableBrands =
                            productPageSampleBrandList[option.value]?.length;

                        return (
                            <div
                                key={`brand-character-${option.value}`}
                                className={`brand-character-container${
                                    isSelected ? " mod__selected" : ""
                                }`}
                            >
                                <button
                                    className={`brand-character-btn${
                                        isSelected ? " mod__selected" : ""
                                    }${
                                        isLoadingBrandList
                                            ? " mod__in-transition"
                                            : ""
                                    }${
                                        hasAvailableBrands
                                            ? " mod__has-available-brands"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        if (!isLoadingBrandList) {
                                            onCharacterBtnClick(
                                                option,
                                                isSelected
                                            );
                                        }
                                    }}
                                    disabled={
                                        !filterStatus[
                                            IProductPageFilter.Brands
                                        ] ||
                                        isLoadingBrandList ||
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
                    className={`brand-list-container${
                        showBrandList && !isLoadingBrandList
                            ? " mod__expanded"
                            : ""
                    }`}
                >
                    <h5 className="brand-character-header">
                        {selectedBrandsCharacter?.value}
                    </h5>
                    <div className="brand-list">
                        {showBrandList
                            ? productPageSampleBrandList[
                                  selectedBrandsCharacter.value
                              ].map((option) => {
                                  const isSelected =
                                      activeFilter[IProductPageFilter.Brands]
                                          .map((item) => item.value)
                                          .indexOf(option.value) > -1;

                                  return (
                                      <button
                                          key={`brand-btn-${option.value}`}
                                          className={`brand-name-btn${
                                              isSelected ? " mod__selected" : ""
                                          }`}
                                          onClick={() =>
                                              onBrandNameClick(
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
        </ProductPageFilterWrapper>
    );
};
