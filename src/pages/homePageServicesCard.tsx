import { K4kBaseCard } from "@/components/imiBaseCard";
import { IImiButtonProps, ImiButton } from "@/components/imiButton";
import "./_homePage.scss";

interface Props {
    imgUrl: string;
    title: string;
    desc: string;
    button: IImiButtonProps;
}

export const HomePageServicesCard: React.FC<Props> = ({
    imgUrl,
    title,
    desc,
    button,
}) => {
    return (
        <div className="home-page-services-card-container">
            <K4kBaseCard shadow>
                <div className="card-column">
                    <div className="image-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-content-container">
                        <span className="card-title">{title}</span>
                        <span className="card-desc">{desc}</span>
                        <ImiButton {...button} />
                    </div>
                </div>
            </K4kBaseCard>
        </div>
    );
};
