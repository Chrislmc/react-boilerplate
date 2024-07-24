import {
    IImiCardWithImageContentProps,
    ImiCardWithImageContent,
} from "../imiCardWithImageContent";
import "./_article-card.scss";

export interface IImiArticleCard extends IImiCardWithImageContentProps {}

export const ImiArticleCard: React.FC<IImiArticleCard> = ({
    imgUrl,
    date,
    title,
    desc,
}) => {
    return (
        <div className="imi-article-card-component">
            <ImiCardWithImageContent
                imgUrl={imgUrl}
                date={date}
                title={title}
                desc={desc}
            />
        </div>
    );
};
