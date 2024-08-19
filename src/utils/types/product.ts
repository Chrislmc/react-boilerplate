import {
    IProductPageCategoriesFilter,
    IProductPageHealthNeedFilter,
} from "@/pages/shop/products/productPageConstant";

export interface IProduct {
    id: string;
    imgUrl: string[];
    name: string;
    desc: string;
    currency: string;
    price: number;
    priceDesc: string;
    rating: number;
    isOutOfStock: boolean;
    onlyAvailableInClinic: boolean;
    category: IProductPageCategoriesFilter;
    healthNeeds: IProductPageHealthNeedFilter[];
}
