import { ImiSlider } from "@/components/imiSlider";
import { i18nHelper } from "@/utils/i18n-helper";
import { IProductPageFilter } from "./productPageConstant";
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
                    value={activeFilter[IProductPageFilter.Price]}
                    onChange={(e) => {
                        if (typeof e === "object") {
                            setActiveFilter({
                                ...activeFilter,
                                [IProductPageFilter.Price]: e,
                            });
                        }
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
