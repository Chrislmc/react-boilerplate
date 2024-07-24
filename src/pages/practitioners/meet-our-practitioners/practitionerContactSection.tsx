import { Icons } from "@/assets/icons";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { samplePractitionerDetail } from "./meetOurPractitionersPageConstant";

export const PractitionerContactSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <ContainerX>
            <SectionContainerY>
                <h1>{t("meetOurPractitioners.contactPractitioner.header")}</h1>
                <div className="button-row">
                    <button className="button-container">
                        <div className="icon-container">
                            <img src={Icons.Phone} />
                        </div>
                        <span>{samplePractitionerDetail.phoneNumber}</span>
                    </button>
                    <button className="button-container">
                        <img src={Icons.Phone} />
                        <span>
                            {t(
                                "meetOurPractitioners.contactPractitioner.sendUsAMessage"
                            )}
                        </span>
                    </button>
                    <button className="button-container">
                        <img src={Icons.Calendar} />
                        <span>
                            {t(
                                "meetOurPractitioners.contactPractitioner.bookOnline"
                            )}
                        </span>
                    </button>
                </div>
            </SectionContainerY>
        </ContainerX>
    );
};
