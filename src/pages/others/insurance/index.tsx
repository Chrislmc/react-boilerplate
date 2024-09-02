import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import "./_insurance-page.scss";
import { InsurancePageDescSection } from "./insurancePageDescSection";
import { InsurancePageImageContentSection } from "./insurancePageImageContentSection";

export const InsurancePage = () => {
    return (
        <div id="insurance-page">
            <ImiSection className="insurance-page-desc-section">
                <InsurancePageDescSection />
            </ImiSection>

            <ImiSection className="insurance-page-image-content-section">
                <InsurancePageImageContentSection />
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
