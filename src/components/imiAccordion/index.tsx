import { Icons } from "@/assets/icons";
import { useState } from "react";
import { IImiBoldTextProps, ImiBoldText } from "../imiBoldText";
import "./_accordion.scss";

export interface IImiAccordion {
    content: IAccordionItem[];
}

interface IAccordionItem {
    header: string;
    details: (string | IImiBoldTextProps)[];
}

export const ImiAccordion: React.FC<IImiAccordion> = ({ content }) => {
    return (
        <div className="imi-accordion-component">
            {content.map((item, i) => (
                <AccordionItem key={`accordion-item-${i}`} {...item} />
            ))}
        </div>
    );
};

const AccordionItem: React.FC<IAccordionItem> = ({ header, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`accordion${isExpanded ? " mod__is-expanded" : ""}`}>
            <button
                className="accordion-summary"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="header-row">
                    <h6 className="header">{header} </h6>
                    <div
                        className={`icon-container${
                            isExpanded ? " mod__is-expanded" : ""
                        }`}
                    >
                        <img className={`icon`} src={Icons.DropdownWhite} />
                    </div>
                </div>
            </button>
            <div
                className={`accordion-details-container${
                    isExpanded ? " mod__is-expanded" : ""
                }`}
            >
                <div className="accordion-list">
                    {details.map((detail, i) => (
                        <span
                            key={`${header}-accordion-desc-${i}`}
                            className="desc"
                        >
                            {typeof detail === "string" ? (
                                detail
                            ) : (
                                <ImiBoldText {...detail} />
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
