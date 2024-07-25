import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiSection } from "@/components/imiSection";
import "./_meet-our-practitioners-page.scss";
import { ArticlesAndVideosSection } from "./articlesAndVideosSection";
import { samplePractitionerDetail } from "./meetOurPractitionersPageConstant";
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
            <ImiSection className="articles-and-videos-section">
                <ArticlesAndVideosSection />
            </ImiSection>
            <ImiBreadcrumb customRouteDesc={samplePractitionerDetail.name} />
        </div>
    );
};
