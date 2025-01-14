import { BaseCard } from "@/components/atoms/baseCard";
import { Button, IButtonProps } from "@/components/atoms/button";
import { dynamicRouteConstant, redirectRouteMap } from "@/utils/routes/route";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./_practitioners-page.scss";
import { practitionerTypeHelper } from "./practitionerTypeHelper";
import { IPractitionerType } from "./practitionersPageConstant";

export interface IPractitionerCardProps {
    id: string;
    imgUrl: string;
    name: string;
    types: IPractitionerType[];
    button: IButtonProps;
}

export const PractitionerCard: React.FC<IPractitionerCardProps> = ({
    id,
    imgUrl,
    name,
    types,
    button,
}) => {
    const navigator = useNavigate();
    const cardContainerRef = useRef<HTMLDivElement>(null);

    const onMouseEnterImage = useCallback(() => {
        if (cardContainerRef?.current) {
            cardContainerRef.current.focus();
        }
    }, []);

    const onMouseLeaveImage = useCallback(() => {
        if (cardContainerRef?.current) {
            cardContainerRef.current?.blur();
        }
    }, []);

    useEffect(() => {
        if (cardContainerRef?.current) {
            cardContainerRef.current.focus();
        }
    }, []);

    const onCardClick = () => {
        navigator(
            redirectRouteMap.meetOurPractitioners.replace(
                dynamicRouteConstant.meetOurPractitioners,
                id
            )
        );
    };

    return (
        <div className="practitioner-card-container">
            <div
                className="image-container"
                onMouseEnter={onMouseEnterImage}
                onMouseLeave={onMouseLeaveImage}
                onClick={onCardClick}
            >
                <img src={imgUrl} />
            </div>

            <BaseCard
                shadow
                hoverEffect
                ref={cardContainerRef}
                onClick={onCardClick}
            >
                <span className="name">{name}</span>
                <span className="type">{practitionerTypeHelper(types)}</span>
                <Button {...button} size="padding" />
            </BaseCard>
        </div>
    );
};
