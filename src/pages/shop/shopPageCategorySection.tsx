import { Icons } from "@/assets/icons";
import { BaseCard } from "@/components/atoms/baseCard";
import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import "./_shop-page.scss";
import { shopPageCategoryList } from "./shopPageConstant";

export const ShopPageCategorySection = () => {
    const t = i18nHelper("shop");
    const navigator = useNavigate();

    return (
        <DescSection
            style="subsection"
            header={t("shop.categories.header")}
            customBottomComponent={
                <>
                    <div className="custom-category-container">
                        {shopPageCategoryList.map((item, i) => (
                            <div
                                key={`category-card-${i}`}
                                className="category-card"
                            >
                                <BaseCard shadow>
                                    <button
                                        className="category-button"
                                        onClick={() =>
                                            navigator(item.redirectUrl)
                                        }
                                    >
                                        <h5>{t(item.text)}</h5>
                                        <img src={Icons.Dropdown} />
                                    </button>
                                </BaseCard>
                            </div>
                        ))}
                    </div>
                    <Button
                        text={t("shop.desc.categories.linkText")}
                        colorTheme="orange"
                        size="padding"
                        onClick={() => navigator(redirectRouteMap.products)}
                    />
                </>
            }
        />
    );
};
