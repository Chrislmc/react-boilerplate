export interface IDrupalJsonProductVariation {
    drupal_internal__variation_id: number;
    langcode: string;
    status: boolean;
    sku: string;
    title: string;
    list_price: {
        number: string;
        currency_code: string;
        formatted: string;
    };
    price: {
        number: string;
        currency_code: string;
        formatted: string;
    };
    created: string;
    changed: string;
    default_langcode: boolean;
    commerce_stock_always_in_stock: boolean;
    content_translation_source: string;
    content_translation_outdated: boolean;
    field_cached_stock_level: number;
    field_loyalty_points: null;
    field_stock_level: {
        value: number;
        available_stock: number;
    };
    weight: null;
}
