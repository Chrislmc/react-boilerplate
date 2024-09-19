import { IDrupalJsonFile } from "./drupal-json-file";
import { IDrupalJsonProductVariation } from "./drupal-json-product-variation";
import { IDrupalJsonTaxonomyCategory } from "./drupal-json-taxonomy-term-category";
import { IDrupalJsonTaxonomyHealth } from "./drupal-json-taxonomy-term-health";

export interface IDrupalJsonProduct {
    drupal_internal__product_id: number;
    langcode: string;
    status: boolean;
    title: string;
    created: string;
    changed: string;
    default_langcode: boolean;
    overall_rating: null;
    content_translation_source: string;
    content_translation_outdated: boolean;
    field_articles_research_: null;
    field_champion_product_as_of_may: boolean;
    field_clinic_only: boolean;
    field_customer_favourites: boolean;
    field_hidden_search_descriptor: string;
    field_ingredients_specifications: null;
    field_link_product_id: string;
    field_major_ingredient_search: string;
    field_meta_description: {
        value: string;
        format: string;
        processed: string;
    };
    field_meta_title: string;
    field_more_info: null;
    field_our_recommendation_order: null;
    field_practitioner_favourites: boolean;
    field_product_description: {
        value: string;
        format: string;
        processed: string;
    };
    field_product_flag_text: null;
    field_product_id: string;
    field_product_id_: number;
    field_product_ingredients: null;
    field_product_name_1: string;
    field_product_name_2: null;
    field_product_specifications: null;
    field_rating: 5;
    field_requires_approval: boolean;
    field_returns_refunds: null;
    field_returns_refunds_content: null;
    field_short_description: {
        value: string;
        format: string;
        processed: string;
    };
    field_temperature_controlled: boolean;
    field_temperature_sensitive: boolean;
    field_unit_size_text: string;
    field_what_we_love_this_month: boolean;

    /* Relation, has to join manually */
    field_product_images: IDrupalJsonFile[];
    default_variation: IDrupalJsonProductVariation;
    field_primary_category: IDrupalJsonTaxonomyCategory;
    field_health_needs: IDrupalJsonTaxonomyHealth[];
}
