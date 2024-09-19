import { BaseCard } from "@/components/baseCard";
import { ITextProps, Text } from "@/components/text";

interface Props {
    descs: ITextProps[];
    isExpanded: boolean;
}

export const LabTestDetailCard: React.FC<Props> = ({ descs, isExpanded }) => {
    return (
        <div
            className={`lab-test-detail-card-component${
                isExpanded ? " mod__is-expanded" : ""
            }`}
        >
            <BaseCard shadow activeEffect>
                <div className="desc-column">
                    {descs.map((desc, i) => (
                        <Text key={`detail-card-desc-${i}`} {...desc} />
                    ))}
                </div>
            </BaseCard>
        </div>
    );
};
