import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useNavigate } from "react-router-dom";
import { naturopathyDescRibbonItems } from "./naturopathyPageConstant";

export const NaturopathyPageDescSection = () => {
    const t = i18nHelper("services");
    const navigator = useNavigate();

    return (
        <ContainerX>
            <ContainerX>
                <div className="desc-container">
                    <p className="desc">
                        {t("naturopathicMedicine.desc.desc1")}
                    </p>
                    <p className="desc">
                        {t("naturopathicMedicine.desc.desc2")}
                    </p>
                    <p className="desc">
                        {t("naturopathicMedicine.desc.desc3")}
                    </p>
                    <p className="desc">
                        {t("naturopathicMedicine.desc.desc4")}
                    </p>
                </div>
            </ContainerX>
            <div className="ribbon-container">
                {naturopathyDescRibbonItems.map((item, i) => (
                    <button
                        key={`ribbon-item-${i}`}
                        className="ribbon-item"
                        onClick={() => navigator(item.link)}
                    >
                        <img src={item.imgUrl} />
                        <span>{t(item.desc)}</span>
                    </button>
                ))}
            </div>
        </ContainerX>
    );
};
