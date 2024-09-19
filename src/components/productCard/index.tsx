import { dynamicRouteConstant, redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import { BaseCard } from "../baseCard";
import { IProductButton, ProductButton } from "../productButton";
import { IProductRating, ProductRating } from "../productRating";
import "./_product-card.scss";

interface IProductCardProps extends IProductRating, IProductButton {
    id: string;
    imgUrl: string[];
    name: string;
    shortDesc?: string;
    currency: string;
    price: number;
    priceDesc: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({
    id,
    imgUrl,
    name,
    shortDesc,
    rating,
    currency,
    price,
    priceDesc,
    isOutOfStock,
    onlyAvailableInClinic,
}) => {
    const navigator = useNavigate();

    const onCardClick = () => {
        navigator(
            redirectRouteMap.productDetail.replace(
                dynamicRouteConstant.productDetail,
                id
            )
        );
    };

    return (
        <div className="product-card-component" onClick={onCardClick}>
            <BaseCard shadow>
                <div className="card-column">
                    <div className="product-image-container">
                        <img src={imgUrl[0]} />
                    </div>
                    <div className="card-content-container">
                        <span className="product-name">{name}</span>

                        {shortDesc && (
                            <span className="product-desc">{shortDesc}</span>
                        )}

                        <ProductRating rating={rating} />

                        <p className="price-desc">
                            {priceDesc ? `${priceDesc}` : `${currency}${price}`}
                        </p>

                        <ProductButton
                            isOutOfStock={isOutOfStock}
                            onlyAvailableInClinic={onlyAvailableInClinic}
                        />
                    </div>
                </div>
            </BaseCard>
        </div>
    );
};
