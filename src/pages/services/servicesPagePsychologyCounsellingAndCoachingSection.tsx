import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { ServiceCard } from "./serviceCard";
import { psychologyCounsellingAndCoachingList } from "./servicesPageConstant";

export const PsychologyCounsellingAndCoachingSection = () => {
    const t = i18nHelper("services");

    return (
        <DescSection
            header={t("services.psychologyCounsellingAndCoaching.header")}
            desc={[t("services.psychologyCounsellingAndCoaching.desc")]}
            customBottomComponent={
                <div className="card-grid-container">
                    {psychologyCounsellingAndCoachingList.map((cardItem) => (
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
