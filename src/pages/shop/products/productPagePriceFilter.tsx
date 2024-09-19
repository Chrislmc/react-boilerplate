import { Button } from "@/components/atoms/button";
import { Slider } from "@/components/molecules/slider";
import { i18nHelper } from "@/utils/i18n-helper";
import { IProductPageFilter, initialFilter } from "./productPageConstant";
import {
    IProductPageFilterBaseProps,
    ProductPageFilterWrapper,
} from "./productPageFilterWrapper";

interface Props extends IProductPageFilterBaseProps {}

export const ProductPagePriceFilter: React.FC<Props> = ({
    filterStatus,
    setFilterStatus,
    activeFilter,
    setActiveFilter,
    setIsLoadingList,
}) => {
    const t = i18nHelper("shop");

    const onPriceRangeChange = (e: number[]) => {
        setIsLoadingList(true);
        setActiveFilter({
            ...activeFilter,
            [IProductPageFilter.Price]: e,
        });

        setTimeout(() => {
            setIsLoadingList(false);
        }, 500);
    };

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
            customHeaderRightComponent={
                <Button
                    text={t("shared.filter.clear")}
                    size="padding"
                    onClick={() => setActiveFilter(initialFilter)}
                />
            }
        >
            <>
                <Slider
                    range
                    min={0}
                    max={1000}
                    defaultValue={[0, 100]}
                    value={activeFilter[IProductPageFilter.Price]}
                    onChange={(e) => {
                        onPriceRangeChange(e as number[]);
                    }}
                />
                <div className="range-row-container">
                    <span>{`HKD ${
                        activeFilter[IProductPageFilter.Price][0]
                    }`}</span>
                    <span>{`HKD ${
                        activeFilter[IProductPageFilter.Price][1]
                    }`}</span>
                </div>
            </>
        </ProductPageFilterWrapper>
    );
};
