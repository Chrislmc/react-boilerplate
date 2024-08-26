import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { ServiceCard } from "./serviceCard";
import { naturopathicAndFunctionalMedicineList } from "./servicesPageConstant";

export const NaturopathicAndFunctionalMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiDescSection
            header={t("services.naturopathicAndFunctionalMedicine.header")}
            desc={[t("services.naturopathicAndFunctionalMedicine.desc")]}
            customBottomComponent={
                <div className="card-grid-container">
                    {naturopathicAndFunctionalMedicineList.map((cardItem) => (
                        <ServiceCard
                            text={t(cardItem.text)}
                            imgUrl={cardItem.imgUrl}
                            redirectUrl={cardItem.redirectUrl}
                        />
                    ))}
                </div>
            }
        />
    );
};
