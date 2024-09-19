import { Images } from "@/assets/images";
import { ImageTextSection } from "@/components/imageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageFunctionalMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <ImageTextSection
            imgUrl={Images.NaturopathyHeroBanner}
            backgroundColor={"blueish-green"}
            header={t("naturopathicMedicine.functionalMedicine.header")}
            descs={[
                t("naturopathicMedicine.functionalMedicine.desc1"),
                t("naturopathicMedicine.functionalMedicine.desc2"),
            ]}
            button={{
                text: t("naturopathicMedicine.functionalMedicine.linkText"),
                size: "padding",
            }}
        />
    );
};
