import {
    IDrupalFile,
    IDrupalFormatValue,
    IDrupalRelationship,
    IDrupalValue,
} from "./drupal-shared";

export interface IDrupalRestfulProductVariation {
    variation_id: IDrupalValue<number>[];
    uuid: IDrupalValue<string>[];
    langcode: IDrupalValue<string>[];
    type: IDrupalRelationship[];
    uid: (IDrupalRelationship & { url: string })[];
    status: IDrupalValue<boolean>[];
    stores: (IDrupalRelationship & { url: string })[];
    /* Name */
    title: IDrupalValue<string>[];
    variations: IDrupalRelationship[];
    default_variations: IDrupalRelationship[];
    created: IDrupalFormatValue[];
    changed: IDrupalFormatValue[];
    default_langcode: IDrupalValue<boolean>[];
    overall_rating: { score: string | null; count: number | null }[];
    content_translation_source: IDrupalValue<string>[];
    content_translation_outdated: IDrupalValue<boolean>[];
    field_age_bracket: (IDrupalRelationship & { url: string })[];
    field_also_available_in: (IDrupalRelationship & { url: string })[];
    field_articles_research_: IDrupalValue<string>[];
    field_brand: (IDrupalRelationship & { url: string })[];
    field_champion_product_as_of_may: IDrupalValue<boolean>[];
    field_clinic_only: IDrupalValue<boolean>[];
    field_customer_favourites: IDrupalValue<boolean>[];
    field_dietary_filters: (IDrupalRelationship & { url: string })[];
    field_gender: IDrupalRelationship[];
    field_health_needs: (IDrupalRelationship & { url: string })[];
    /* Search desc */
    field_hidden_search_descriptor: IDrupalValue<string>[];
    field_ingredients_specifications: [];
    /* Ingredient */
    field_major_ingredient_search: IDrupalValue<string>[];
    field_manufacturing_country: (IDrupalRelationship & { url: string })[];
    field_meta_description: IDrupalFormatValue[];
    field_meta_title: IDrupalValue<string>[];
    field_more_info: [];
    field_our_recommendation_order: [];
    field_practitioner_favourites: IDrupalValue<boolean>[];
    field_price_range: (IDrupalRelationship & { url: string })[];
    /* Category */
    field_primary_category: (IDrupalRelationship & { url: string })[];
    /* Product type */
    field_pri_product_type: (IDrupalRelationship & { url: string })[];
    field_product_description: IDrupalFormatValue[];
    field_product_flag_text: [];
    field_product_id: IDrupalValue<string>[];
    field_product_id_: IDrupalValue<number>[];
    /* Image */
    field_product_images: IDrupalFile[];
    field_product_ingredients: [];
    field_product_name_1: IDrupalValue<string>[];
    field_product_name_2: [];
    field_product_specifications: [];
    field_promotion_category: [];
    /* Rating */
    field_rating: IDrupalValue<number>[];
    field_requires_approval: IDrupalValue<boolean>[];
    field_returns_refunds: [];
    field_returns_refunds_content: [];
    field_secondary_product_type_: (IDrupalRelationship & { url: string })[];
    /* Description */
    field_short_description: IDrupalFormatValue<string>[];
    field_special: [];
    field_strength: [];
    field_temperature_controlled: IDrupalValue<boolean>[];
    field_temperature_sensitive: IDrupalValue<boolean>[];
    field_unit_size: (IDrupalRelationship & { url: string })[];
    field_unit_size_text: IDrupalValue<string>[];
    field_what_we_love_this_month: IDrupalValue<boolean>[];
}
