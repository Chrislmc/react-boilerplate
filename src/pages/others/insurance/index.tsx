import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import "./_insurance-page.scss";
import { InsurancePageArticlesAndVideosSection } from "./insurancePageArticlesAndVideosSection";
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

            <ImiSection className="insurance-page-articles-and-videos-section">
                <InsurancePageArticlesAndVideosSection />
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
