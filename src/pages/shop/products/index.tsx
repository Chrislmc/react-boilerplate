import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { IOption } from "@/components/imiCheckBox";
import { ImiInput } from "@/components/imiInput";
import { ImiSection } from "@/components/imiSection";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_products-page.scss";
import { ProductPageBrandsFilter } from "./productPageBrandsFilter";
import { ProductPageCategoriesFilter } from "./productPageCategoriesFilter";
import {
    IProductPageActiveFilter,
    IProductPageFilter,
    IProductPageSortBy,
    productPageCategoriesFilterOption,
    productPageHealthNeedFilterOption,
    productPageSortByOption,
} from "./productPageConstant";
import { ProductPageHealthNeedFilter } from "./productPageHealthNeedFilter";
import { ProductPagePriceFilter } from "./productPagePriceFilter";
import { ProductPageSorter } from "./productPageSorter";

export const ProductsPage = () => {
    const t = i18nHelper("shop");

    const translatedCategoriesFilterOption =
        productPageCategoriesFilterOption.map((option) => ({
            ...option,
            text: t(option.text),
        }));

    const translatedHealthNeedFilterOption =
        productPageHealthNeedFilterOption.map((option) => ({
            ...option,
            text: t(option.text),
        }));

    const translatedSortByOption = productPageSortByOption.map((option) => ({
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
    const [activeFilter, setActiveFilter] = useState<IProductPageActiveFilter>({
        [IProductPageFilter.Price]: [0, 100],
        [IProductPageFilter.Categories]: [],
        [IProductPageFilter.HealthNeed]: [],
        [IProductPageFilter.Brands]: [],
    });
    const [sortBy, setSortBy] = useState<IOption<IProductPageSortBy>>(
        translatedSortByOption[0]
    );
    console.log(activeFilter);

    return (
        <div id="products-page">
            <ImiSection className="products-content-section">
                <ContainerX>
                    <div className="content-row">
                        <div className="filter-list-container">
                            <ProductPagePriceFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />

                            <ProductPageCategoriesFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                filterOptions={translatedCategoriesFilterOption}
                            />

                            <ProductPageHealthNeedFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                filterOptions={translatedHealthNeedFilterOption}
                            />

                            <ProductPageBrandsFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />

                            <ProductPageSorter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                filterOptions={translatedSortByOption}
                            />
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
