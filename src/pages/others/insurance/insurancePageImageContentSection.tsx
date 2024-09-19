import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { Button } from "@/components/button";
import { ImageTextSection } from "@/components/imageTextSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const InsurancePageImageContentSection = () => {
    const t = i18nHelper("others");

    return (
        <ImageTextSection
            imgUrl={Images.InsurancePageImage}
            header={t("insurance.imageContent.header")}
            backgroundColor="blueish-green"
            customSideComponent={
                <div className="custom-side-component">
                    <div className="icon-container-background">
                        <div className="icon-container">
                            <img src={Icons.Alea} />
                        </div>
                    </div>

                    <span className="desc">
                        {t("insurance.imageContent.desc")}
                    </span>

                    <Button text={t("insurance.imageContent.linkText")} />
                </div>
            }
        />
    );
};
