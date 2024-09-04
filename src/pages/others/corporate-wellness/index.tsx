import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import "./_corporate-wellness-page.scss";
import { CorporateWellnessPageDescSection } from "./corporateWellnessPageDescSection";
import { CorporateWellnessPageVideoSection } from "./corporateWellnessPageVideoSection";
import { CorporateWellnessPageWhatWeDoSection } from "./corporateWellnessPageWhatWeDoSection";

export const CorporateWellnessPage = () => {
    return (
        <div id="corporate-wellness-page">
            <div className="desc-section">
                <CorporateWellnessPageDescSection />
            </div>
            <div className="what-we-do-section">
                <CorporateWellnessPageWhatWeDoSection />
            </div>
            <div className="video-section">
                <CorporateWellnessPageVideoSection />
            </div>

            <ImiBreadcrumb />
        </div>
    );
};
