import { ImiBaseCard } from "@/components/imiBaseCard";
import { IImiButtonProps, ImiButton } from "@/components/imiButton";
import "./_card-with-image-content.scss";

export interface IImiCardWithImageContentProps {
    imgUrl: string;
    date?: string;
    title: string;
    desc: string;
    button?: IImiButtonProps;
}

export const ImiCardWithImageContent: React.FC<
    IImiCardWithImageContentProps
> = ({ imgUrl, date, title, desc, button }) => {
    return (
        <div className="imi-card-with-image-content-component">
            <ImiBaseCard shadow>
                <div className="card-column">
                    <div className="image-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-content-container">
                        {date && <span className="card-date">{date}</span>}
                        <span className="card-title">{title}</span>
                        <span className="card-desc">{desc}</span>
                        {button && (
                            <ImiButton
                                type="solid"
                                colorTheme="primary"
                                {...button}
                            />
                        )}
                    </div>
                </div>
            </ImiBaseCard>
        </div>
    );
};
