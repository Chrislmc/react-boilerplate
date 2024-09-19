import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/section";
import "./_insurance-page.scss";
import { InsurancePageArticlesAndVideosSection } from "./insurancePageArticlesAndVideosSection";
import { InsurancePageDescSection } from "./insurancePageDescSection";
import { InsurancePageImageContentSection } from "./insurancePageImageContentSection";

export const InsurancePage = () => {
    return (
        <div id="insurance-page">
            <Section className="insurance-page-desc-section">
                <InsurancePageDescSection />
            </Section>

            <Section className="insurance-page-image-content-section">
                <InsurancePageImageContentSection />
            </Section>

            <Section className="insurance-page-articles-and-videos-section">
                <InsurancePageArticlesAndVideosSection />
            </Section>

            <Breadcrumb />
        </div>
    );
};
