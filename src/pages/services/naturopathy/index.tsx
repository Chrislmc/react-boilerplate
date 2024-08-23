import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import "./_naturopathy-page.scss";
import { NaturopathyPageDescSection } from "./naturopathyPageDescSection";
import { NaturopathyPageFunctionalMedicineSection } from "./naturopathyPageFunctionalMedicineSection";
import { NaturopathyPageHeroBannerSection } from "./naturopathyPageHeroBannerSection";
import { NaturopathyPageServiceDetailSection } from "./naturopathyPageServiceDetailSection";
import { NaturopathyPageLicenseSection } from "./NaturopathyPageLicenseSection";

export const NaturopathyPage = () => {
    return (
        <div id="naturopathy-page">
            <div className="naturopathy-page-hero-banner-section">
                <NaturopathyPageHeroBannerSection />
            </div>

            <ImiBreadcrumb />

            <div className="naturopathy-page-desc-section">
                <NaturopathyPageDescSection />
            </div>

            <div className="naturopathy-page-functional-medicine-section">
                <NaturopathyPageFunctionalMedicineSection />
            </div>

            <div className="naturopathy-page-service-detail-section">
                <NaturopathyPageServiceDetailSection />
            </div>

            <div className="naturopathy-page-license-section">
                <NaturopathyPageLicenseSection />
            </div>
        </div>
    );
};
