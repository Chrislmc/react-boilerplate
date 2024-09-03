import {
    IOurHealingVision,
    OurHealingVisionComponent,
} from "@/assets/icons/others/our-healing-vision.component";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";

export const OurHealingVisionPageDescSection = () => {
    const t = i18nHelper("others");

    const [activeSection, setActiveSection] = useState<
        IOurHealingVision | undefined
    >(undefined);

    return (
        <ImiDescSection
            header={t("ourHealingVision.header")}
            customBottomComponent={
                <div className="custom-bottom-component">
                    <div className="healing-vision-image-container">
                        <OurHealingVisionComponent
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />
                    </div>
                </div>
            }
        />
    );
};
