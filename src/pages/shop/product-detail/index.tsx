import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/section";
import { useLocation } from "react-router-dom";
import { productPageProductCardList } from "../products/productPageConstant";
import "./_product-detail-page.scss";
import { ProductDetailPageDetailSection } from "./productDetailPageDetailSection";
import { ProductDetailPageRelatedProductSection } from "./productDetailPageRelatedProductSection";

export const ProductDetailPage = () => {
    const location = useLocation();
    const productId = location.pathname?.slice(-1)[0];

    const productDetail = productPageProductCardList.filter(
        (product) => product.id === productId
    )[0];

    return (
        <div id="product-detail-page">
            <Section className="product-detail-section">
                <ProductDetailPageDetailSection product={productDetail} />
            </Section>
            <Section className="related-product-section">
                <ProductDetailPageRelatedProductSection />
            </Section>

            <Breadcrumb customRouteDesc={productDetail.name} />
        </div>
    );
};
