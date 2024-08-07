import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { IOption } from "@/components/imiCheckBox";
import { ImiInput } from "@/components/imiInput";
import { ImiSection } from "@/components/imiSection";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_products-page.scss";
import { ProductPageCategoriesFilter } from "./productPageCategoriesFilter";
import {
    IProductPageCategoriesFilter,
    IProductPageFilter,
    productPageCategoriesFilterOption,
} from "./productPageConstant";
import { ProductPageFilterWrapper } from "./productPageFilterWrapper";
import { ProductPagePriceFilter } from "./productPagePriceFilter";

export const ProductsPage = () => {
    const t = i18nHelper("shop");

    const translatedCategoriesFilterOption =
        productPageCategoriesFilterOption.map((option) => ({
            ...option,
            text: t(option.text),
        }));

    const [searchString, setSearchString] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<{
        [key in IProductPageFilter]: boolean;
    }>({
        price: true,
        categories: true,
        healthNeed: true,
        brands: true,
        sortBy: true,
    });
    const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
    const [selectedCategoriesOption, setSelectedCategoriesOption] = useState<
        IOption<IProductPageCategoriesFilter>[]
    >([]);

    return (
        <div id="products-page">
            <ImiSection className="products-content-section">
                <ContainerX>
                    <div className="content-row">
                        <div className="filter-list-container">
                            <ProductPagePriceFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                value={priceRange}
                                onChange={setPriceRange}
                            />

                            <ProductPageCategoriesFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                selectedOption={selectedCategoriesOption}
                                onChange={setSelectedCategoriesOption}
                                filterOptions={translatedCategoriesFilterOption}
                            />

                            <ProductPageFilterWrapper
                                header={t("products.filter.healthNeed.header")}
                                collapsible={true}
                                className={"health-need-filter"}
                                isOpen={
                                    filterStatus[IProductPageFilter.HealthNeed]
                                }
                                setIsOpen={() =>
                                    setFilterStatus({
                                        ...filterStatus,
                                        [IProductPageFilter.HealthNeed]:
                                            !filterStatus[
                                                IProductPageFilter.HealthNeed
                                            ],
                                    })
                                }
                            >
                                <>
                                    <p>fdsfds</p>
                                    <p>fdsfds</p>
                                    <p>fdsfds</p>
                                </>
                            </ProductPageFilterWrapper>
                        </div>
                        <div className="main-container">
                            <div className="header-container">
                                <ImiSectionHeader
                                    header={t("products.header")}
                                />

                                <ImiInput
                                    placeholder={"input.searchBy"}
                                    value={searchString}
                                    setValue={setSearchString}
                                />
                            </div>
                            <div className="product-list-grid-container"></div>
                        </div>
                    </div>
                </ContainerX>
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
