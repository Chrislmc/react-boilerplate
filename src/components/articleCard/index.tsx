import { dynamicRouteConstant, redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import {
    CardWithImageContent,
    ICardWithImageContentProps,
} from "../cardWithImageContent";
import "./_article-card.scss";

export interface IArticleCard extends ICardWithImageContentProps {
    id: string;
}

export const ArticleCard: React.FC<IArticleCard> = ({
    id,
    imgUrl,
    date,
    title,
    desc,
}) => {
    const navigator = useNavigate();

    const onCardClick = () => {
        navigator(
            redirectRouteMap.article.replace(dynamicRouteConstant.article, id)
        );
    };

    return (
        <div className="article-card-component" onClick={onCardClick}>
            <CardWithImageContent
                imgUrl={imgUrl}
                date={date}
                title={title}
                desc={desc}
            />
        </div>
    );
};
