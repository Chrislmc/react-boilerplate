import { Images } from "@/assets/images";
import { ImiImageTextSection } from "@/components/imiImageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const InsurancePageImageContentSection = () => {
    const t = i18nHelper("others");

    return (
        <ImiImageTextSection
            imgUrl={Images.InsurancePageImage}
            header={t("insurance.imageContent.header")}
            backgroundColor="blueish-green"
        />
    );
};
