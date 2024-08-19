import { Icons } from "@/assets/icons";

export interface IImiProductRating {
    rating: number;
}

export const ImiProductRating: React.FC<IImiProductRating> = ({ rating }) => {
    const starList = Array.from(new Array(5))
        .fill(Icons.Star, 0, rating)
        .fill(Icons.EmptyStar, rating, 5);

    return (
        <div className="imi-product-rating-component">
            {starList.map((imgUrl, i) => (
                <img key={`rating-${i}`} src={imgUrl} />
            ))}
        </div>
    );
};
