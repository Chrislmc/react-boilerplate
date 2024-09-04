import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import "./_our-healing-vision.scss";
import { OurHealingVisionPageBookNowSection } from "./ourHealingVisionPageBookNowSection";
import { OurHealingVisionPageDescSection } from "./ourHealingVisionPageDescSection";

export const OurHealingVisionPage = () => {
    return (
        <div id="our-healing-vision-page">
            <ImiSection className="desc-section">
                <OurHealingVisionPageDescSection />
            </ImiSection>
            <ImiSection className="book-now-section">
                <OurHealingVisionPageBookNowSection />
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
