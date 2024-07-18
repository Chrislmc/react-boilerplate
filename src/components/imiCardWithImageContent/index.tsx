import { ImiBaseCard } from "@/components/imiBaseCard";
import { IImiButtonProps, ImiButton } from "@/components/imiButton";
import "./_card-with-image-content.scss";

interface Props {
    imgUrl: string;
    title: string;
    desc: string;
    button: IImiButtonProps;
}

export const ImiCardWithImageCard: React.FC<Props> = ({
    imgUrl,
    title,
    desc,
    button,
}) => {
    return (
        <div className="imi-card-with-image-content-component">
            <ImiBaseCard shadow>
                <div className="card-column">
                    <div className="image-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-content-container">
                        <span className="card-title">{title}</span>
                        <span className="card-desc">{desc}</span>
                        <ImiButton
                            type="solid"
                            colorTheme="primary"
                            {...button}
                        />
                    </div>
                </div>
            </ImiBaseCard>
        </div>
    );
};
