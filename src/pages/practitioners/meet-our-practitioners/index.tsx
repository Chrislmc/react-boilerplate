import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/section";
import "./_meet-our-practitioners-page.scss";
import { ArticlesAndVideosSection } from "./articlesAndVideosSection";
import { samplePractitionerDetail } from "./meetOurPractitionersPageConstant";
import { PractitionerContactSection } from "./practitionerContactSection";
import { PractitionerDetailSection } from "./practitionerDetailSection";
import { TestimonialsSection } from "./testimonialsSection";

export const MeetOurPractitionersPage = () => {
    return (
        <div id="meet-our-practitioners-page">
            <Section className="practitioner-detail-section">
                <PractitionerDetailSection />
            </Section>
            <Section className="practitioner-contact-section">
                <PractitionerContactSection />
            </Section>
            <Section className="articles-and-videos-section">
                <ArticlesAndVideosSection />
            </Section>
            <Section className="testimonials-section">
                <TestimonialsSection />
            </Section>
            <Breadcrumb customRouteDesc={samplePractitionerDetail.name} />
        </div>
    );
};
