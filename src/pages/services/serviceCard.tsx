import { BaseCard } from "@/components/baseCard";

interface Props {
    text: string;
    imgUrl: string;
    redirectUrl?: string;
}
export const ServiceCard: React.FC<Props> = ({ imgUrl, text, redirectUrl }) => {
    return (
        <div className="service-card-component">
            <a href={redirectUrl}>
                <BaseCard shadow>
                    <img src={imgUrl} />
                    <span className="card-desc">{text}</span>
                </BaseCard>
            </a>
        </div>
    );
};
