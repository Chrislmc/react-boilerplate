import { Images } from "@/assets/images";
import { ImiImageTextSection } from "@/components/imiImageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageFunctionalMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiImageTextSection
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
