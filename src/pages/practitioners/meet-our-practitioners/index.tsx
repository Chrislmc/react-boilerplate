import { ImiSection } from "@/components/imiSection";
import "./_meet-our-practitioners-page.scss";
import { PractitionerDetailSection } from "./practitionerDetailSection";

export const MeetOurPractitionersPage = () => {
    return (
        <div id="meet-our-practitioners-page">
            <ImiSection className="practitioner-detail-section">
                <PractitionerDetailSection />
            </ImiSection>
        </div>
    );
};
