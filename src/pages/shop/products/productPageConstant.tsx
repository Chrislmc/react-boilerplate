import { Images } from "@/assets/images";
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

/* To be replaced by categories from Drupal */
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
    ImmuneHealth = "Immune Health",
    BrainLearningAndCognitiveHealth = "Brain, Learning \u0026 Cognitive Health",
    EnergySupport = "Energy Support",
    MentalHealth = "Mental Health",
    TravelHealth = "Travel Health",
}

export enum IProductPageSortBy {
    Latest = "latest",
    Popularity = "popularity",
    AverageRating = "averageRating",
    PriceLowToHigh = "priceLowToHigh",
    PriceHighToLow = "priceHighToLow",
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

export const initialFilter = {
    [IProductPageFilter.Price]: [0, 1000],
    [IProductPageFilter.Categories]: [],
    [IProductPageFilter.HealthNeed]: [],
    [IProductPageFilter.Brands]: [],
};

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
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.ImmuneHealth}`,
        value: IProductPageHealthNeedFilter.ImmuneHealth,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth}`,
        value: IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.EnergySupport}`,
        value: IProductPageHealthNeedFilter.EnergySupport,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.MentalHealth}`,
        value: IProductPageHealthNeedFilter.MentalHealth,
    },
    {
        text: `shared.filter.healthNeed.${IProductPageHealthNeedFilter.TravelHealth}`,
        value: IProductPageHealthNeedFilter.TravelHealth,
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

export const productPageSortByOption = [
    {
        text: `shared.sortBy.${IProductPageSortBy.Latest}`,
        value: IProductPageSortBy.Latest,
    },
    {
        text: `shared.sortBy.${IProductPageSortBy.Popularity}`,
        value: IProductPageSortBy.Popularity,
    },
    {
        text: `shared.sortBy.${IProductPageSortBy.AverageRating}`,
        value: IProductPageSortBy.AverageRating,
    },
    {
        text: `shared.sortBy.${IProductPageSortBy.PriceLowToHigh}`,
        value: IProductPageSortBy.PriceLowToHigh,
    },
    {
        text: `shared.sortBy.${IProductPageSortBy.PriceHighToLow}`,
        value: IProductPageSortBy.PriceHighToLow,
    },
];

export const productPageProductCardList = [
    {
        id: "1",
        imgUrl: [Images.ImiProduct1, Images.ImiProduct1_2],
        name: "Viracon",
        desc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: 219.0,
        priceDesc: "HK$219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
        category: IProductPageCategoriesFilter.VitaminAndMinerals,
        healthNeeds: [
            IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth,
            IProductPageHealthNeedFilter.ImmuneHealth,
            IProductPageHealthNeedFilter.EnergySupport,
            IProductPageHealthNeedFilter.MentalHealth,
            IProductPageHealthNeedFilter.TravelHealth,
        ],
    },
    {
        id: "2",
        imgUrl: [Images.ImiProduct2],
        name: "Ther-Biotic® Complete Capsule",
        desc: "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: 430.0,
        priceDesc: "HK$430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
        category: IProductPageCategoriesFilter.Oils,
        healthNeeds: [
            IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth,
            IProductPageHealthNeedFilter.ImmuneHealth,
        ],
    },
    {
        id: "3",
        imgUrl: [Images.ImiProduct3],
        name: "C Complete Powder",
        desc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: 295.0,
        priceDesc: "HK$295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
        category: IProductPageCategoriesFilter.Lifestyle,
        healthNeeds: [
            IProductPageHealthNeedFilter.MentalHealth,
            IProductPageHealthNeedFilter.TravelHealth,
        ],
    },
    {
        id: "4",
        imgUrl: [Images.ImiProduct4],
        name: "Bundle Offer [20% Off]: Anti-Aging",
        desc: "Stars aren’t the only thing glowing this holiday season.",
        currency: "HK$",
        price: 970.0,
        priceDesc: "HK$970.00",
        rating: 0,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
        category: IProductPageCategoriesFilter.Probiotics,
        healthNeeds: [IProductPageHealthNeedFilter.EnergySupport],
    },
    {
        id: "5",
        imgUrl: [Images.ImiProduct1],
        name: "Viracon",
        desc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: 219.0,
        priceDesc: "HK$219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
        category: IProductPageCategoriesFilter.Probiotics,
        healthNeeds: [
            IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth,
            IProductPageHealthNeedFilter.ImmuneHealth,
            IProductPageHealthNeedFilter.TravelHealth,
        ],
    },
    {
        id: "6",
        imgUrl: [Images.ImiProduct2],
        name: "Ther-Biotic® Complete Capsule",
        desc: "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: 430.0,
        priceDesc: "HK$430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
        category: IProductPageCategoriesFilter.SaleAndOffers,
        healthNeeds: [
            IProductPageHealthNeedFilter.ImmuneHealth,
            IProductPageHealthNeedFilter.EnergySupport,
            IProductPageHealthNeedFilter.MentalHealth,
        ],
    },
    {
        id: "7",
        imgUrl: [Images.ImiProduct3],
        name: "C Complete Powder",
        desc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: 295.0,
        priceDesc: "HK$295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
        category: IProductPageCategoriesFilter.VitaminAndMinerals,
        healthNeeds: [
            IProductPageHealthNeedFilter.BrainLearningAndCognitiveHealth,
            IProductPageHealthNeedFilter.ImmuneHealth,
            IProductPageHealthNeedFilter.EnergySupport,
            IProductPageHealthNeedFilter.MentalHealth,
        ],
    },
];
