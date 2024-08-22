import "./_services-page.scss";
import { NaturopathicAndFunctionalMedicineSection } from "./servicesPageNaturopathicAndFunctionalMedicineSection";
import { PsychologyCounsellingAndCoachingSection } from "./servicesPagePsychologyCounsellingAndCoachingSection";

export const ServicesPage = () => {
    return (
        <div id="services-page">
            <div className="naturopathic-and-functional-medicine-section">
                <NaturopathicAndFunctionalMedicineSection />
            </div>
            <div className="psychology-counselling-and-coaching-section">
                <PsychologyCounsellingAndCoachingSection />
            </div>
        </div>
    );
};
