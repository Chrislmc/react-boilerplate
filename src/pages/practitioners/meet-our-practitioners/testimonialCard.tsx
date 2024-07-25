import { ImiBaseCard } from "@/components/imiBaseCard";

interface Props {
    imgUrl: string;
    name: string;
    title: string;
    desc: string;
}

export const TestimonialCard: React.FC<Props> = ({
    imgUrl,
    name,
    title,
    desc,
}) => {
    return (
        <div className="testimonial-card">
            <ImiBaseCard shadow>
                <div className="title-row">
                    <div className="portrait-container">
                        <img src={imgUrl} />
                    </div>
                    <div className="title-column">
                        <span className="name">{name}</span>
                        <span className="title">{title}</span>
                    </div>
                </div>
                <div className="desc-container">{desc}</div>
            </ImiBaseCard>
        </div>
    );
};
