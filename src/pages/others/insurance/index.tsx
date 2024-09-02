import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import "./_insurance-page.scss";
import { InsurancePageDescSection } from "./insurancePageDescSection";

export const InsurancePage = () => {
    return (
        <div id="insurance-page">
            <ImiSection className="insurance-page-desc-section">
                <InsurancePageDescSection />
            </ImiSection>
            <ImiBreadcrumb />
        </div>
    );
};
