import { IOption } from "@/components/imiCheckBox";

export enum IProductPageFilter {
    Price = "price",
    Categories = "categories",
    HealthNeed = "healthNeed",
    Brands = "brands",
    SortBy = "sortBy",
}

export interface IProductPageActiveFilter {
    [IProductPageFilter.Price]: number[];
    [IProductPageFilter.Categories]: IOption<IProductPageCategoriesFilter>[];
    [IProductPageFilter.HealthNeed]: IOption<IProductPageHealthNeedFilter>[];
    [IProductPageFilter.Brands]: IOption<string>[];
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

export enum IProductPageBrandsFilter {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z",
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

export const productPageBrandsFilterOption = [
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.A}`,
        value: IProductPageBrandsFilter.A,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.B}`,
        value: IProductPageBrandsFilter.B,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.C}`,
        value: IProductPageBrandsFilter.C,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.D}`,
        value: IProductPageBrandsFilter.D,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.E}`,
        value: IProductPageBrandsFilter.E,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.F}`,
        value: IProductPageBrandsFilter.F,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.G}`,
        value: IProductPageBrandsFilter.G,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.H}`,
        value: IProductPageBrandsFilter.H,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.I}`,
        value: IProductPageBrandsFilter.I,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.J}`,
        value: IProductPageBrandsFilter.J,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.K}`,
        value: IProductPageBrandsFilter.K,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.L}`,
        value: IProductPageBrandsFilter.L,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.M}`,
        value: IProductPageBrandsFilter.M,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.N}`,
        value: IProductPageBrandsFilter.N,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.O}`,
        value: IProductPageBrandsFilter.O,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.P}`,
        value: IProductPageBrandsFilter.P,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.Q}`,
        value: IProductPageBrandsFilter.Q,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.R}`,
        value: IProductPageBrandsFilter.R,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.S}`,
        value: IProductPageBrandsFilter.S,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.T}`,
        value: IProductPageBrandsFilter.T,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.U}`,
        value: IProductPageBrandsFilter.U,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.V}`,
        value: IProductPageBrandsFilter.V,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.W}`,
        value: IProductPageBrandsFilter.W,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.X}`,
        value: IProductPageBrandsFilter.X,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.Y}`,
        value: IProductPageBrandsFilter.Y,
    },
    {
        text: `shared.filter.brands.${IProductPageBrandsFilter.Z}`,
        value: IProductPageBrandsFilter.Z,
    },
];

export const productPageSampleBrandList: {
    [key in IProductPageBrandsFilter]: IOption<string>[];
} = {
    [IProductPageBrandsFilter.A]: [{ text: "Apple Inc.", value: "Apple Inc." }],
    [IProductPageBrandsFilter.B]: [],
    [IProductPageBrandsFilter.C]: [
        { text: "Cell-Logic", value: "Cell-Logic" },
        { text: "Coconut Matter", value: "Coconut Matter" },
        { text: "Coka Cola", value: "Coka Cola" },
        { text: "Citigroup", value: "Citigroup" },
        { text: "Carrefour", value: "Carrefour" },
        {
            text: "Concrete Aggregates Corp.",
            value: "Concrete Aggregates Corp.",
        },
    ],
    [IProductPageBrandsFilter.D]: [
        { text: "Deutsche Bank AG", value: "Deutsche Bank AG" },
    ],
    [IProductPageBrandsFilter.E]: [],
    [IProductPageBrandsFilter.F]: [],
    [IProductPageBrandsFilter.G]: [],
    [IProductPageBrandsFilter.H]: [],
    [IProductPageBrandsFilter.I]: [],
    [IProductPageBrandsFilter.J]: [],
    [IProductPageBrandsFilter.K]: [],
    [IProductPageBrandsFilter.L]: [],
    [IProductPageBrandsFilter.M]: [],
    [IProductPageBrandsFilter.N]: [],
    [IProductPageBrandsFilter.O]: [],
    [IProductPageBrandsFilter.P]: [],
    [IProductPageBrandsFilter.Q]: [],
    [IProductPageBrandsFilter.R]: [],
    [IProductPageBrandsFilter.S]: [],
    [IProductPageBrandsFilter.T]: [],
    [IProductPageBrandsFilter.U]: [],
    [IProductPageBrandsFilter.V]: [],
    [IProductPageBrandsFilter.W]: [],
    [IProductPageBrandsFilter.X]: [],
    [IProductPageBrandsFilter.Y]: [],
    [IProductPageBrandsFilter.Z]: [],
};
