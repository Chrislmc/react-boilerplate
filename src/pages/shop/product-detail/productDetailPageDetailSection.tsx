import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { IProduct } from "@/utils/types/product";
import { useState } from "react";

export const ProductDetailPageDetailSection: React.FC<{
    product: IProduct;
}> = ({ product }) => {
    const [activeThumbnail, setActiveThumbnail] = useState(product.imgUrl[0]);

    const onThumbnailClick = (url: string) => {
        setActiveThumbnail(url);
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
                    <div className="main-attribute-container"></div>
                </div>
                <div className="detail-container"></div>
            </ContainerX>
        </SectionContainerY>
    );
};
