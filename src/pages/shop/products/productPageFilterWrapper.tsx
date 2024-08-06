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
                <button
                    className={`dropdown-btn${
                        collapsible ? " mod__collapsible" : ""
                    }`}
                    disabled={!collapsible}
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    onClick={setIsOpen as any}
                >
                    <span>{header}</span>

                    {collapsible && (
                        <div
                            className={`dropdown-icon${
                                isOpen ? " mod__is-expanded" : ""
                            }`}
                        >
                            <img src={Icons.Dropdown} />
                        </div>
                    )}
                </button>
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
