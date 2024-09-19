export enum IProductDetailPageHubTab {
    DESCRIPTION = "description",
    INGREDIENTS = "ingredients",
    VITAL_NUTRIENTS = "vitalNutrients",
}

export const productDetailPageTabItems = [
    {
        text: "product-detail.tab.description",
        value: IProductDetailPageHubTab.DESCRIPTION,
    },
    {
        text: "product-detail.tab.ingredients",
        value: IProductDetailPageHubTab.INGREDIENTS,
    },
    {
        text: "product-detail.tab.vitalNutrients",
        value: IProductDetailPageHubTab.VITAL_NUTRIENTS,
    },
];
