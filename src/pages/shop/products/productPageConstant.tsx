export enum IProductPageFilter {
    Price = "price",
    Categories = "categories",
    HealthNeed = "healthNeed",
    Brands = "brands",
    SortBy = "sortBy",
}

export enum IProductPageCategoriesFilter {
    SaleAndOffers = "saleAndOffers",
    VitaminAndMinerals = "vitaminAndMinerals",
    Probiotics = "probiotics",
    Oils = "oils",
    Supplements = "supplements",
    Lifestyle = "lifestyle",
}

export const productPageCategoriesFilterOption = [
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.SaleAndOffers}`,
        value: IProductPageCategoriesFilter.SaleAndOffers,
    },
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.VitaminAndMinerals}`,
        value: IProductPageCategoriesFilter.VitaminAndMinerals,
    },
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.Probiotics}`,
        value: IProductPageCategoriesFilter.Probiotics,
    },
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.Oils}`,
        value: IProductPageCategoriesFilter.Oils,
    },
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.Supplements}`,
        value: IProductPageCategoriesFilter.Supplements,
    },
    {
        text: `shared.filter.categories.${IProductPageCategoriesFilter.Lifestyle}`,
        value: IProductPageCategoriesFilter.Lifestyle,
    },
];
