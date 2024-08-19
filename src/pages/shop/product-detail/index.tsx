import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import { useLocation } from "react-router-dom";
import { productPageProductCardList } from "../products/productPageConstant";
import "./_product-detail-page.scss";
import { ProductDetailPageDetailSection } from "./productDetailPageDetailSection";

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

            <ImiBreadcrumb customRouteDesc={productDetail.name} />
        </div>
    );
};
