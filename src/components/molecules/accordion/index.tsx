import { Icons } from "@/assets/icons";
import { Text } from "@/components/atoms/text";
import { useState } from "react";
import { IBoldTextProps } from "../../atoms/boldText";
import "./_accordion.scss";

export interface IAccordion {
    content: IAccordionItem[];
}

interface IAccordionItem {
    header: string;
    details: (
        | {
              desc: string;
          }
        | IBoldTextProps
    )[];
}

export const Accordion: React.FC<IAccordion> = ({ content }) => {
    return (
        <div className="accordion-component">
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
                        <Text
                            key={`${header}-accordion-desc-${i}`}
                            {...detail}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
