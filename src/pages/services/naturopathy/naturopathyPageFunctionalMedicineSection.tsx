import { Images } from "@/assets/images";
import { ImiButton } from "@/components/imiButton";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageFunctionalMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <ContainerX>
            <div className="row">
                <div className="content-container">
                    <h3 className="header">
                        {t("naturopathicMedicine.functionalMedicine.header")}
                    </h3>
                    <div className="desc-container">
                        <h6 className="desc">
                            {t("naturopathicMedicine.functionalMedicine.desc1")}
                        </h6>
                        <h6 className="desc">
                            {t("naturopathicMedicine.functionalMedicine.desc2")}
                        </h6>
                    </div>
                    <ImiButton
                        text={t(
                            "naturopathicMedicine.functionalMedicine.linkText"
                        )}
                        size="padding"
                    />
                </div>
                <div className="image-container">
                    <img src={Images.NaturopathyHeroBanner} />
                </div>
            </div>
        </ContainerX>
    );
};
