import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { NaturopathyPageLicenseSection } from "./NaturopathyPageLicenseSection";
import "./_naturopathy-page.scss";
import { NaturopathyPageBannerSection } from "./naturopathyPageBannerSection";
import { NaturopathyPageBookNowSection } from "./naturopathyPageBookNowSection";
import { NaturopathyPageDescSection } from "./naturopathyPageDescSection";
import { NaturopathyPageFunctionalMedicineSection } from "./naturopathyPageFunctionalMedicineSection";
import { NaturopathyPageHeroBannerSection } from "./naturopathyPageHeroBannerSection";
import { NaturopathyPageServiceDetailSection } from "./naturopathyPageServiceDetailSection";

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

            <div className="naturopathy-page-banner-section">
                <NaturopathyPageBannerSection />
            </div>

            <div className="naturopathy-page-book-now-section">
                <NaturopathyPageBookNowSection />
            </div>
        </div>
    );
};
