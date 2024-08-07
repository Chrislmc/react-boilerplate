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

export enum IProductPageHealthNeedFilter {
    Allergies = "allergies",
    GutHealth = "gutHealth",
    Immunity = "immunity",
    Sleep = "sleep",
    HormonalHealth = "hormonalHealth",
    Pain = "pain",
    DetoxAndWeightLoss = "detoxAndWeightLoss",
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

export const productPageHealthNeedFilterOption = [
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.Allergies}`,
        value: IProductPageHealthNeedFilter.Allergies,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.GutHealth}`,
        value: IProductPageHealthNeedFilter.GutHealth,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.Immunity}`,
        value: IProductPageHealthNeedFilter.Immunity,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.Sleep}`,
        value: IProductPageHealthNeedFilter.Sleep,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.HormonalHealth}`,
        value: IProductPageHealthNeedFilter.HormonalHealth,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.Pain}`,
        value: IProductPageHealthNeedFilter.Pain,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.DetoxAndWeightLoss}`,
        value: IProductPageHealthNeedFilter.DetoxAndWeightLoss,
    },
];
