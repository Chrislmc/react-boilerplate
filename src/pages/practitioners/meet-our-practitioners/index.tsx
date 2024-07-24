import { ImiSection } from "@/components/imiSection";
import "./_meet-our-practitioners-page.scss";
import { PractitionerContactSection } from "./practitionerContactSection";
import { PractitionerDetailSection } from "./practitionerDetailSection";

export const MeetOurPractitionersPage = () => {
    return (
        <div id="meet-our-practitioners-page">
            <ImiSection className="practitioner-detail-section">
                <PractitionerDetailSection />
            </ImiSection>
            <ImiSection className="practitioner-contact-section">
                <PractitionerContactSection />
            </ImiSection>
        </div>
    );
};
