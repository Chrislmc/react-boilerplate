import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { ServiceCard } from "./serviceCard";
import { bodyworkAndEnergyMedicineList } from "./servicesPageConstant";

export const BodyworkAndEnergyMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <DescSection
            header={t("services.bodyworkAndEnergyMedicine.header")}
            desc={[t("services.bodyworkAndEnergyMedicine.desc")]}
            customBottomComponent={
                <div className="card-grid-container">
                    {bodyworkAndEnergyMedicineList.map((cardItem) => (
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
