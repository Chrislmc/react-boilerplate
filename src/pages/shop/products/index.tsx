import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiInput } from "@/components/imiInput";
import { ImiSection } from "@/components/imiSection";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";
import "./_products-page.scss";
import { IProductPageFilter } from "./productPageConstant";
import { ProductPageFilterWrapper } from "./productPageFilterWrapper";
import { ProductPagePriceFilter } from "./productPagePrceFilter";

export const ProductsPage = () => {
    const t = i18nHelper("shop");

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
                            <ProductPageFilterWrapper
                                header={t("products.filter.categories.header")}
                                collapsible={true}
                                className={"categories-filter"}
                                isOpen={
                                    filterStatus[IProductPageFilter.Categories]
                                }
                                setIsOpen={() =>
                                    setFilterStatus({
                                        ...filterStatus,
                                        [IProductPageFilter.Categories]:
                                            !filterStatus[
                                                IProductPageFilter.Categories
                                            ],
                                    })
                                }
                            >
                                <></>
                            </ProductPageFilterWrapper>
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
