import { BaseCard } from "@/components/baseCard";
import { Button, IButtonProps } from "@/components/button";
import "./_card-with-image-content.scss";

export interface ICardWithImageContentProps {
    imgUrl: string;
    date?: string;
    title: string;
    desc: string;
    button?: IButtonProps;
}

export const CardWithImageContent: React.FC<ICardWithImageContentProps> = ({
    imgUrl,
    date,
    title,
    desc,
    button,
}) => {
    return (
        <div className="imi-card-with-image-content-component">
            <BaseCard shadow>
                <div className="card-column">
                    <div className="image-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-content-container">
                        {date && <span className="card-date">{date}</span>}
                        <span className="card-title">{title}</span>
                        <div className="card-desc-container">
                            <span className="card-desc">{desc}</span>
                        </div>
                        {button && (
                            <Button
                                type="solid"
                                colorTheme="primary"
                                {...button}
                            />
                        )}
                    </div>
                </div>
            </BaseCard>
        </div>
    );
};
