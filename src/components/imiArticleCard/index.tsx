import { dynamicRouteConstant, redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import {
    IImiCardWithImageContentProps,
    ImiCardWithImageContent,
} from "../imiCardWithImageContent";
import "./_article-card.scss";

export interface IImiArticleCard extends IImiCardWithImageContentProps {
    id: string;
}

export const ImiArticleCard: React.FC<IImiArticleCard> = ({
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
        <div className="imi-article-card-component" onClick={onCardClick}>
            <ImiCardWithImageContent
                imgUrl={imgUrl}
                date={date}
                title={title}
                desc={desc}
            />
        </div>
    );
};
