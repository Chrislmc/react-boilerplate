import { Breadcrumb } from "@/components/molecules/breadcrumb";
import { Section } from "@/components/section";
import "./_our-healing-vision.scss";
import { OurHealingVisionPageBookNowSection } from "./ourHealingVisionPageBookNowSection";
import { OurHealingVisionPageDescSection } from "./ourHealingVisionPageDescSection";

export const OurHealingVisionPage = () => {
    return (
        <div id="our-healing-vision-page">
            <Section className="desc-section">
                <OurHealingVisionPageDescSection />
            </Section>
            <Section className="book-now-section">
                <OurHealingVisionPageBookNowSection />
            </Section>

            <Breadcrumb />
        </div>
    );
};
