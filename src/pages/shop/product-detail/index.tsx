import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
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
            <ImiSection className="product-detail-section">
                <ProductDetailPageDetailSection product={productDetail} />
            </ImiSection>
            <ImiSection className="related-product-section">
                <ProductDetailPageRelatedProductSection />
            </ImiSection>

            <ImiBreadcrumb customRouteDesc={productDetail.name} />
        </div>
    );
};
