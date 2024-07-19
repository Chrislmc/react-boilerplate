import { ImiBaseCard } from "../imiBaseCard";
import "./_product-card.scss";
import { IProductButton, ProductButton } from "./productButton";
import { IProductRating, ProductRating } from "./productRating";

interface IImiProductCardProps extends IProductRating, IProductButton {
    imgUrl: string;
    name: string;
    desc?: string;
    currency: string;
    price: string;
}

export const ImiProductCard: React.FC<IImiProductCardProps> = ({
    imgUrl,
    name,
    desc,
    rating,
    currency,
    price,
    isOutOfStock,
    onlyAvailableInClinic,
}) => {
    return (
        <div className="imi-product-card-component">
            <ImiBaseCard shadow>
                <div className="card-column">
                    <div className="product-image-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-content-container">
                        <span className="product-name">{name}</span>

                        {desc && <span className="product-desc">{desc}</span>}

                        <ProductRating rating={rating} />

                        <p className="price-desc">{`${currency}${price}`}</p>

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
