import { Images } from "@/assets/images";
import { ImageTextSection } from "@/components/imageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageLicenseSection = () => {
    const t = i18nHelper("services");

    return (
        <ImageTextSection
            imgUrl={Images.NaturopathyHeroBanner}
            backgroundColor={"blueish-green"}
            header={t("naturopathicMedicine.license.header")}
            descs={[
                t("naturopathicMedicine.license.desc1"),
                t("naturopathicMedicine.license.desc2"),
            ]}
        />
    );
};
