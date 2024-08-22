import { ImiDescSection } from "@/components/imiDescSection";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { ServiceCard } from "./serviceCard";
import { naturopathicAndFunctionalMedicineList } from "./servicesPageConstant";

export const NaturopathicAndFunctionalMedicineSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiDescSection
            header={t("services.naturopathicAndFunctionalMedicine.header")}
            desc={[t("services.naturopathicAndFunctionalMedicine.desc")]}
            customBottomComponent={
                <ContainerX>
                    <div className="card-grid-container">
                        {naturopathicAndFunctionalMedicineList.map(
                            (cardItem) => (
                                <ServiceCard
                                    text={t(cardItem.text)}
                                    imgUrl={cardItem.imgUrl}
                                    redirectUrl={redirectRouteMap.shop}
                                />
                            )
                        )}
                    </div>
                </ContainerX>
            }
        />
    );
};
