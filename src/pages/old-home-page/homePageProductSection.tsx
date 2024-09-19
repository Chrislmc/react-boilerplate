import { Images } from "@/assets/images";
import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { GradientBanner } from "@/components/gradientBanner";
import { ContainerX } from "@/components/layout/containerX";
import { ProductCard } from "@/components/productCard";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";
import { homePageProductCardList } from "./homePageConstant";

export const HomePageProductSection = () => {
    const t = i18nHelper("home-page");
    const tInSharedContext = i18nHelper("shared");

    return (
        <DescSection
            header={t("product.header")}
            desc={[t("product.desc")]}
            customFullWidthBottomComponent={
                <ContainerX>
                    <div className="custom-bottom-container">
                        <GradientBanner
                            colorTheme={"primary"}
                            imgUrl={Images.HomePageGradientBanner1}
                            imgPosition="right"
                            content={[
                                {
                                    header: t("product.gradientBanner1.header"),
                                    subheader: t(
                                        "product.gradientBanner1.subheader"
                                    ),
                                    descList: [
                                        t("product.gradientBanner1.desc"),
                                    ],
                                    button: {
                                        text: t(
                                            "product.gradientBanner1.linkText"
                                        ),
                                        type: "outline",
                                        colorTheme: "white",
                                    },
                                },
                                {
                                    header: t("product.gradientBanner1.header"),
                                    subheader: t(
                                        "product.gradientBanner1.subheader"
                                    ),
                                    descList: [
                                        t("product.gradientBanner1.desc"),
                                    ],
                                    button: {
                                        text: t(
                                            "product.gradientBanner1.linkText"
                                        ),
                                        type: "outline",
                                        colorTheme: "white",
                                    },
                                },
                            ]}
                        />

                        <div className="product-card-grid-container">
                            {homePageProductCardList.map((cardItem, i) => (
                                <ProductCard
                                    key={`product-card-${i}`}
                                    {...cardItem}
                                />
                            ))}
                        </div>
                        <div className="view-more-btn-container">
                            <Button
                                text={tInSharedContext(
                                    "product.btn.seeAllProduct"
                                )}
                                size="padding"
                                colorTheme="blueish-green"
                            />
                        </div>
                    </div>
                </ContainerX>
            }
        />
    );
};
