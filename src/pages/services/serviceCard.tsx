import { ImiBaseCard } from "@/components/imiBaseCard";

interface Props {
    text: string;
    imgUrl: string;
    redirectUrl?: string;
}
export const ServiceCard: React.FC<Props> = ({ imgUrl, text, redirectUrl }) => {
    return (
        <div className="service-card-component">
            <a href={redirectUrl}>
                <ImiBaseCard shadow>
                    <img src={imgUrl} />
                    <span className="card-desc">{text}</span>
                </ImiBaseCard>
            </a>
        </div>
    );
};
