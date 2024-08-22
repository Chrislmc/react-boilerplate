import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import "./_naturopathy-page.scss";
import { NaturopathyPageDescSection } from "./naturopathyPageDescSection";
import { NaturopathyPageHeroBannerSection } from "./naturopathyPageHeroBannerSection";

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
        </div>
    );
};
