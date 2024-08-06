import { Icons } from "@/assets/icons";
import { Dispatch, SetStateAction } from "react";
import { IProductPageFilter } from "./productPageConstant";

export interface IProductPageFilterBaseProps {
    filterStatus: { [key in IProductPageFilter]: boolean };
    setFilterStatus: Dispatch<
        SetStateAction<{
            [key in IProductPageFilter]: boolean;
        }>
    >;
}

interface Props {
    header: string;
    collapsible: boolean;
    className: string;
    isOpen: boolean;
    setIsOpen: Dispatch<
        SetStateAction<{
            [key in IProductPageFilter]: boolean;
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
                        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
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
