import "./_services-page.scss";
import { BodyworkAndEnergyMedicineSection } from "./servicesPageBodyworkAndEnergyMedicineSection";
import { LabsIvAndConventionalMedicine } from "./servicesPageLabsIvAndConventionalMedicine";
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
            <div className="bodywork-and-energy-medicine-section">
                <BodyworkAndEnergyMedicineSection />
            </div>
            <div className="labs-iv-and-conventional-section">
                <LabsIvAndConventionalMedicine />
            </div>
        </div>
    );
};
