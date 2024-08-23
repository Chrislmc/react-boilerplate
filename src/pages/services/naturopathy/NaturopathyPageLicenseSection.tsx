import { Images } from "@/assets/images";
import { ImiImageTextSection } from "@/components/imiImageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageLicenseSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiImageTextSection
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
