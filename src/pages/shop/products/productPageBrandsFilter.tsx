import { IOption } from "@/components/imiCheckBox";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import {
    IProductPageBrandsFilter,
    IProductPageFilter,
    productPageBrandsFilterOption,
} from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {
    // filterOptions: IOption<IProductPageBrandsFilter>[];
    // selectedOption: IOption<IProductPageBrandsFilter>[];
    // onChange: Dispatch<SetStateAction<IOption<IProductPageBrandsFilter>[]>>;
}

export const ProductPageBrandsFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    // filterOptions,
    // selectedOption,
    // onChange,
}) => {
    const t = i18nHelper("shop");

    const translatedBrandsFilterOption = productPageBrandsFilterOption.map(
        (option) => ({
            ...option,
            text: t(option.text),
        })
    );

    const [selectedBrandsCharacter, setSelectedBrandsCharacter] = useState<
        IOption<IProductPageBrandsFilter>[]
    >([]);

    const onCharacterBtnClick = (
        targetOption: IOption<IProductPageBrandsFilter>,
        isSelected: boolean
    ) => {
        let filteredOption = selectedBrandsCharacter;

        if (isSelected) {
            filteredOption = [
                ...selectedBrandsCharacter.filter(
                    (option) => option.value !== targetOption.value
                ),
            ];
        } else {
            filteredOption = translatedBrandsFilterOption.filter(
                (option) =>
                    !!selectedBrandsCharacter.find(
                        (selectedBrandsCharacter) =>
                            selectedBrandsCharacter.value === option.value
                    ) || option.value === targetOption.value
            );
        }

        setSelectedBrandsCharacter(filteredOption);
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
            <div className="brand-grid-container">
                {translatedBrandsFilterOption.map((option) => {
                    const isSelected =
                        selectedBrandsCharacter
                            .map((item) => item.value)
                            .indexOf(option.value) > -1;

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
                                }`}
                                onClick={() =>
                                    onCharacterBtnClick(option, isSelected)
                                }
                            >
                                <span>{option.text}</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </ProductPageFilterWrapper>
    );
};
