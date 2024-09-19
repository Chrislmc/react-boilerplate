import { Icons } from "@/assets/icons";
import { Dispatch, SetStateAction } from "react";
import {
    IProductPageActiveFilter,
    IProductPageFilter,
} from "./productPageConstant";

export interface IProductPageFilterBaseProps {
    filterStatus: { [key in IProductPageFilter]: boolean };
    setFilterStatus: Dispatch<
        SetStateAction<{
            [key in IProductPageFilter]: boolean;
        }>
    >;
    activeFilter: IProductPageActiveFilter;
    setActiveFilter: Dispatch<SetStateAction<IProductPageActiveFilter>>;
    setIsLoadingList: Dispatch<SetStateAction<boolean>>;
}

interface Props {
    header: string;
    collapsible: boolean;
    className: string;
    isOpen: boolean;
    setIsOpen: () => void;
    customHeaderRightComponent?: JSX.Element;
    children: JSX.Element;
}

export const ProductPageFilterWrapper: React.FC<Props> = ({
    header,
    collapsible,
    className,
    isOpen,
    setIsOpen,
    customHeaderRightComponent,
    children,
}) => {
    return (
        <div className={`filter-container ${className}`}>
            <div
                className={`header-container${
                    isOpen ? " mod__is-expanded" : ""
                }`}
            >
                <div
                    className={`dropdown-btn${
                        collapsible ? " mod__collapsible" : ""
                    }`}
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    onClick={() => collapsible && (setIsOpen() as any)}
                >
                    <span>{header}</span>

                    {customHeaderRightComponent && customHeaderRightComponent}

                    {collapsible && (
                        <button
                            className={`dropdown-icon${
                                isOpen ? " mod__is-expanded" : ""
                            }`}
                        >
                            <img src={Icons.Dropdown} />
                        </button>
                    )}
                </div>
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
