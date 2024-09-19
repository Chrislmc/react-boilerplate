import { Icons } from "@/assets/icons";

export interface IProductRating {
    rating: number;
}

export const ProductRating: React.FC<IProductRating> = ({ rating }) => {
    const starList = Array.from(new Array(5))
        .fill(Icons.Star, 0, rating)
        .fill(Icons.EmptyStar, rating, 5);

    return (
        <div className="product-rating-component">
            {starList.map((imgUrl, i) => (
                <img key={`rating-${i}`} src={imgUrl} />
            ))}
        </div>
    );
};
