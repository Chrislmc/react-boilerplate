import { ImiBaseCard } from "@/components/imiBaseCard";
import { IImiTextProps, ImiText } from "@/components/imiText";

interface Props {
    descs: IImiTextProps[];
    isExpanded: boolean;
}

export const LabTestDetailCard: React.FC<Props> = ({ descs, isExpanded }) => {
    return (
        <div
            className={`lab-test-detail-card-component${
                isExpanded ? " mod__is-expanded" : ""
            }`}
        >
            <ImiBaseCard shadow activeEffect>
                <div className="desc-column">
                    {descs.map((desc, i) => (
                        <ImiText key={`detail-card-desc-${i}`} {...desc} />
                    ))}
                </div>
            </ImiBaseCard>
        </div>
    );
};
