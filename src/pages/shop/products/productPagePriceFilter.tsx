import { ImiSlider } from "@/components/imiSlider";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, SetStateAction } from "react";
import { IProductPageFilter } from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {
    value: number[];
    onChange: Dispatch<SetStateAction<number[]>>;
}

export const ProductPagePriceFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    value,
    onChange,
}) => {
    const t = i18nHelper("shop");

    return (
        <ProductPageFilterWrapper
            header={t("products.filter.price.header")}
            collapsible={false}
            className={"price-filter"}
            isOpen={filterStatus[IProductPageFilter.Price]}
            setIsOpen={() =>
                setFilterStatus({
                    ...filterStatus,
                    [IProductPageFilter.Price]:
                        !filterStatus[IProductPageFilter.Price],
                })
            }
        >
            <>
                <ImiSlider
                    range
                    min={0}
                    max={1000}
                    defaultValue={[0, 100]}
                    value={value}
                    onChange={(e) => {
                        if (typeof e === "object") onChange(e);
                    }}
                />
                <div className="range-row-container">
                    <span>{`HKD ${value[0]}`}</span>
                    <span>{`HKD ${value[1]}`}</span>
                </div>
            </>
        </ProductPageFilterWrapper>
    );
};
