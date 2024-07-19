import { Icons } from "@/assets/icons";

export interface IProductRating {
    rating: number;
}

export const ProductRating: React.FC<IProductRating> = ({ rating }) => {
    const starList = Array.from(new Array(5))
        .fill(Icons.IconStar, 0, rating)
        .fill(Icons.IconEmptyStar, rating, 5);

    return (
        <div className="product-rating-container">
            {starList.map((imgUrl) => (
                <img src={imgUrl} />
            ))}
        </div>
    );
};
