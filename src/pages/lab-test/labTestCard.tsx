import { Icons } from "@/assets/icons";
import { ImiBaseCard } from "@/components/imiBaseCard";
import { Dispatch, SetStateAction } from "react";

interface Props {
    id: string;
    header: string;
    descs: string[];
    activeCard: string;
    setActiveCard: Dispatch<SetStateAction<string>>;
}

export const LabTestCard: React.FC<Props> = ({
    id,
    header,
    descs,
    activeCard,
    setActiveCard,
}) => {
    const isActive = activeCard === id;

    const onCardClick = () => {
        if (isActive) {
            setActiveCard("");
        } else {
            setActiveCard(id);
        }
    };

    return (
        <button className="lab-test-card-component" onClick={onCardClick}>
            <ImiBaseCard border shadow hoverEffect activeEffect={isActive}>
                <div className="card-column">
                    <div className="card-header-container">
                        <span className="card-header">{header}</span>
                    </div>

                    {descs.map((desc, i) => (
                        <div
                            key={`${header}-card-desc-${i}`}
                            className="card-desc-container"
                        >
                            <div className="card-desc-icon-container">
                                <img
                                    className="card-desc-icon"
                                    src={Icons.TickBlueishGreen}
                                />
                            </div>
                            <span className="card-desc">{desc}</span>
                        </div>
                    ))}

                    <div
                        className={`dropdown-icon-container${
                            isActive ? " mod__is-active" : ""
                        }`}
                    >
                        <img
                            className="dropdown-icon"
                            src={Icons.DropdownOrange}
                        />
                    </div>
                </div>
            </ImiBaseCard>
        </button>
    );
};
