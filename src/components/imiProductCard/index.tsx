import { dynamicRouteConstant, redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import { ImiBaseCard } from "../imiBaseCard";
import { IImiProductRating, ImiProductRating } from "../imiProductRating";
import "./_product-card.scss";
import { IProductButton, ProductButton } from "./productButton";

interface IImiProductCardProps extends IImiProductRating, IProductButton {
    id: string;
    imgUrl: string[];
    name: string;
    desc?: string;
    currency: string;
    price: number;
    priceDesc: string;
}

export const ImiProductCard: React.FC<IImiProductCardProps> = ({
    id,
    imgUrl,
    name,
    desc,
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
        <div className="imi-product-card-component" onClick={onCardClick}>
            <ImiBaseCard shadow>
                <div className="card-column">
                    <div className="product-image-container">
                        <img src={imgUrl[0]} />
                    </div>
                    <div className="card-content-container">
                        <span className="product-name">{name}</span>

                        {desc && <span className="product-desc">{desc}</span>}

                        <ImiProductRating rating={rating} />

                        <p className="price-desc">
                            {priceDesc ? `${priceDesc}` : `${currency}${price}`}
                        </p>

                        <ProductButton
                            isOutOfStock={isOutOfStock}
                            onlyAvailableInClinic={onlyAvailableInClinic}
                        />
                    </div>
                </div>
            </ImiBaseCard>
        </div>
    );
};
