import { ImiNumberInput } from "@/components/imiNumberInput";
import { ImiProductButton } from "@/components/imiProductButton";
import { ImiProductRating } from "@/components/imiProductRating";
import { ImiTab } from "@/components/imiTab";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { IProduct } from "@/utils/types/product";
import { decodeUtf } from "@/utils/utf-helper";
import { useState } from "react";
import {
    IProductDetailPageHubTab,
    productDetailPageTabItems,
} from "./productDetailPageConstant";

// TODO: figure out where does ingredients and vital nutrients come from
export const ProductDetailPageDetailSection: React.FC<{
    product: IProduct;
}> = ({ product }) => {
    const t = i18nHelper("shop");
    const [activeThumbnail, setActiveThumbnail] = useState(product.imgUrl[0]);
    const [quantity, setQuantity] = useState(0);
    const [activeTab, setActiveTab] = useState<IProductDetailPageHubTab>(
        productDetailPageTabItems[0].value
    );

    const onThumbnailClick = (url: string) => {
        setActiveThumbnail(url);
    };

    const onTabClick = (value: IProductDetailPageHubTab) => {
        setActiveTab(value);
    };

    return (
        <SectionContainerY>
            <ContainerX>
                <div className="header-row-container">
                    <div className="image-group-container">
                        <div className="thumbnail-list-container">
                            {product.imgUrl?.map((url, i) => {
                                const isActive = url === activeThumbnail;

                                return (
                                    <button
                                        key={`product-thumbnail-${i}`}
                                        className={`thumbnail-container${
                                            isActive ? " mod__active" : ""
                                        }`}
                                        onClick={() => onThumbnailClick(url)}
                                    >
                                        <div className="image-container">
                                            <img src={url} />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="focused-image-container">
                            <div className="image-container">
                                <img src={activeThumbnail} />
                            </div>
                        </div>
                    </div>
                    <div className="main-attribute-container">
                        <h3 className="product-name">{product.name}</h3>

                        <ImiProductRating rating={product.rating} />

                        <h5 className="price-desc">
                            {product?.priceDesc
                                ? `${product?.priceDesc}`
                                : `${product.currency}${product.price}`}
                        </h5>

                        <div className="product-desc-container">
                            {product?.shortDesc && (
                                <span className="product-desc">
                                    {product.shortDesc}
                                </span>
                            )}

                            {product?.packSize && (
                                <span className="product-pack-size">
                                    {t("product-detail.packSize", {
                                        packSize: product.packSize,
                                    })}
                                </span>
                            )}
                        </div>

                        <div className="button-container">
                            <ImiNumberInput
                                min={0}
                                max={100}
                                step={1}
                                value={quantity}
                                setValue={setQuantity}
                            />

                            <ImiProductButton
                                isOutOfStock={product.isOutOfStock}
                                onlyAvailableInClinic={
                                    product.onlyAvailableInClinic
                                }
                                disabled={quantity === 0}
                            />
                        </div>
                    </div>
                </div>
                <div className="detail-container">
                    <div className="tab-container">
                        <ImiTab
                            options={productDetailPageTabItems.map((tab) => ({
                                ...tab,
                                text: t(tab.text),
                            }))}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            onTabClick={onTabClick}
                        />
                    </div>
                    <div
                        className="detail-desc-container"
                        dangerouslySetInnerHTML={{
                            __html: decodeUtf(product.desc || ""),
                        }}
                    />
                </div>
            </ContainerX>
        </SectionContainerY>
    );
};
