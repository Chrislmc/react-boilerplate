import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import "./_corporate-wellness-page.scss";
import { CorporateWellnessPageDescSection } from "./corporateWellnessPageDescSection";

export const CorporateWellnessPage = () => {
    return (
        <div id="corporate-wellness-page">
            <div className="desc-section">
                <CorporateWellnessPageDescSection />
            </div>

            <ImiBreadcrumb />
        </div>
    );
};
