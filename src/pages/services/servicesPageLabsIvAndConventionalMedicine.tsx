import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { ServiceCard } from "./serviceCard";
import { LabsIvAndConventionalMedicineList } from "./servicesPageConstant";

export const LabsIvAndConventionalMedicine = () => {
    const t = i18nHelper("services");

    return (
        <ImiDescSection
            header={t("services.labsIvAndConventionalMedicine.header")}
            desc={[t("services.labsIvAndConventionalMedicine.desc")]}
            customBottomComponent={
                <div className="card-grid-container">
                    {LabsIvAndConventionalMedicineList.map((cardItem) => (
                        <ServiceCard
                            text={t(cardItem.text)}
                            imgUrl={cardItem.imgUrl}
                            redirectUrl={redirectRouteMap.shop}
                        />
                    ))}
                </div>
            }
        />
    );
};
