import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { IOption } from "@/components/imiCheckBox";
import { ImiInput } from "@/components/imiInput";
import { ImiProductCard } from "@/components/imiProductCard";
import { ImiSection } from "@/components/imiSection";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useEffect, useState } from "react";
import "./_products-page.scss";
import { ProductPageBrandsFilter } from "./productPageBrandsFilter";
import { ProductPageCategoriesFilter } from "./productPageCategoriesFilter";
import {
    IProductPageActiveFilter,
    IProductPageFilter,
    IProductPageSortBy,
    initialFilter,
    productPageCategoriesFilterOption,
    productPageHealthNeedFilterOption,
    productPageProductCardList,
    productPageSortByOption,
} from "./productPageConstant";
import { ProductPageHealthNeedFilter } from "./productPageHealthNeedFilter";
import { ProductPagePriceFilter } from "./productPagePriceFilter";
import { ProductPageSorter } from "./productPageSorter";

// TODO: add brand name and sort by logic
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
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false);
    const [filterStatus, setFilterStatus] = useState<{
        [key in IProductPageFilter]: boolean;
    }>({
        price: true,
        categories: true,
        healthNeed: true,
        brands: true,
        sortBy: true,
    });
    const [activeFilter, setActiveFilter] =
        useState<IProductPageActiveFilter>(initialFilter);
    const [sortBy, setSortBy] = useState<IOption<IProductPageSortBy>>(
        translatedSortByOption[0]
    );
    const [filteredProducts, setFilteredProducts] = useState(
        productPageProductCardList
    );

    useEffect(() => {
        setTimeout(() => {
            const list = productPageProductCardList.filter((product) => {
                if (searchString?.length) {
                    if (
                        product.name
                            .toLowerCase()
                            .indexOf(searchString?.toLowerCase()) === -1
                    )
                        return false;
                }

                if (activeFilter[IProductPageFilter.Price]?.length) {
                    if (
                        product.price <
                            activeFilter[IProductPageFilter.Price][0] ||
                        product.price >
                            activeFilter[IProductPageFilter.Price][1]
                    )
                        return false;
                }

                if (activeFilter[IProductPageFilter.Categories]?.length) {
                    if (
                        !activeFilter[IProductPageFilter.Categories]
                            .map((option) => option.value)
                            .includes(product.category)
                    )
                        return false;
                }

                if (activeFilter[IProductPageFilter.HealthNeed]?.length) {
                    if (
                        !product.healthNeeds.find((healthNeed) =>
                            activeFilter[IProductPageFilter.HealthNeed]
                                .map((option) => option.value)
                                .includes(healthNeed)
                        )
                    )
                        return false;
                }

                return true;
            });

            setFilteredProducts(list);
        }, 300);
    }, [activeFilter, searchString]);

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
                                setIsLoadingList={setIsLoadingList}
                            />

                            <ProductPageCategoriesFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                filterOptions={translatedCategoriesFilterOption}
                                setIsLoadingList={setIsLoadingList}
                            />

                            <ProductPageHealthNeedFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                filterOptions={translatedHealthNeedFilterOption}
                                setIsLoadingList={setIsLoadingList}
                            />

                            <ProductPageBrandsFilter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                setIsLoadingList={setIsLoadingList}
                            />

                            <ProductPageSorter
                                filterStatus={filterStatus}
                                setFilterStatus={setFilterStatus}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                filterOptions={translatedSortByOption}
                                setIsLoadingList={setIsLoadingList}
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
                            <div
                                className={`product-list-grid-container${
                                    isLoadingList ? " mod__in-transition" : ""
                                }`}
                            >
                                {filteredProducts.map((product) => (
                                    <ImiProductCard
                                        key={`product-card-${product.id}`}
                                        {...product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerX>
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
