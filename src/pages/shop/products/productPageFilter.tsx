import { Icons } from "@/assets/icons";
import { Dispatch, SetStateAction } from "react";

interface Props {
    header: string;
    collapsible: boolean;
    className: string;
    isOpen: boolean;
    setIsOpen: Dispatch<
        SetStateAction<{
            price: boolean;
            categories: boolean;
            healthNeed: boolean;
            brands: boolean;
            sortBy: boolean;
        }>
    >;
    children: JSX.Element;
}

export const ProductPageFilterWrapper: React.FC<Props> = ({
    header,
    collapsible,
    className,
    isOpen,
    setIsOpen,
    children,
}) => {
    return (
        <div className={`filter-container ${className}`}>
            <div
                className={`header-container${
                    isOpen ? " mod__is-expanded" : ""
                }`}
            >
                <span>{header}</span>

                {collapsible && (
                    <button
                        className={`dropdown-btn${
                            isOpen ? " mod__is-expanded" : ""
                        }`}
                        onClick={setIsOpen as any}
                    >
                        <img src={Icons.Dropdown} />
                    </button>
                )}
            </div>
            <div
                className={`filter-content-container${
                    isOpen ? " mod__is-expanded" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
};
