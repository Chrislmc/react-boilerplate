import { IDrupalJsonProduct } from "./types/drupalJson/drupal-json-product";

export const parseDrupalProduct = (
    uuid: string,
    drupalProduct: IDrupalJsonProduct
) => {
    const toReturn = {
        uuid: uuid,
        id: drupalProduct.drupal_internal__product_id,
        imgUrl: drupalProduct.field_product_images[0].uri.url,
        name: drupalProduct.title,
        desc:
            drupalProduct.field_short_description?.processed ||
            drupalProduct.field_short_description,
        currency: drupalProduct.default_variation.price.currency_code,
        price: parseInt(drupalProduct.default_variation.price.number),
        priceDesc: drupalProduct.default_variation.price.formatted,
        rating: drupalProduct.field_rating,
        isOutOfStock:
            drupalProduct.default_variation.commerce_stock_always_in_stock ||
            drupalProduct.default_variation.field_stock_level.available_stock >
                0,
        /* Unknown logic */
        onlyAvailableInClinic: false,
    };

    return toReturn;
};
