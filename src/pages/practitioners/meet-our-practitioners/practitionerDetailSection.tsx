import { Images } from "@/assets/images";
import { Button } from "@/components/button";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import { practitionerTypeHelper } from "../practitionerTypeHelper";
import "./_meet-our-practitioners-page.scss";
import {
    areasOfExpertiseDetail,
    samplePractitionerDetail,
    testimonialText,
} from "./meetOurPractitionersPageConstant";
import { PractitionerTag } from "./practitionerTag";

export const PractitionerDetailSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <SectionContainerY>
            <div className="section-wrapper">
                <div className="hero-banner-container">
                    <div className="banner-image-container">
                        <img
                            className="hero-banner"
                            src={Images.HomePageGradientBanner1}
                        />
                    </div>
                </div>

                <ContainerX>
                    <div className="appointment-button-container">
                        <div className="portrait-container">
                            <div className="image-container">
                                <img src={Images.GraemeBradshawPortrait} />
                            </div>
                        </div>
                        <Button
                            text={t("meetOurPractitioners.bookAnAppointment")}
                            size="padding"
                            colorTheme="orange"
                        />
                    </div>

                    <div className="content-row">
                        <div className="summary-column">
                            <div className="basic-info-container">
                                <div className="name-row">
                                    <h1 className="name">
                                        {samplePractitionerDetail.name}
                                    </h1>
                                    <div className="tag-container">
                                        <PractitionerTag
                                            type={"location"}
                                            text={t(
                                                "meetOurPractitioners.tag.hongKong"
                                            )}
                                        />
                                        <PractitionerTag
                                            type={"appointment-type"}
                                            text={t(
                                                "meetOurPractitioners.tag.online"
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="type-row">
                                    <p className="type">
                                        {practitionerTypeHelper([
                                            samplePractitionerDetail.type,
                                        ])}
                                    </p>
                                    <p className="language">
                                        {`${t(
                                            "meetOurPractitioners.languagePrefix"
                                        )}${samplePractitionerDetail.language}`}
                                    </p>
                                </div>
                                <h5 className="title">
                                    {samplePractitionerDetail.title}
                                </h5>
                                <span className="subtitle">
                                    {samplePractitionerDetail.subtitle}
                                </span>
                            </div>

                            <div className="summary-column-separator" />

                            <div className="detail-info-container">
                                {samplePractitionerDetail.desc.map(
                                    (detail, i) => (
                                        <span key={`detail-${i}`}>
                                            {detail}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="misc-info-column">
                            <div className="areas-of-expertise-container">
                                <h3 className="title">
                                    {t("meetOurPractitioners.areasOfExpertise")}
                                </h3>

                                <div className="item-column">
                                    {areasOfExpertiseDetail.map((detail, i) => (
                                        <div
                                            className="item-detail"
                                            key={`item-detail-${i}`}
                                        >
                                            <span>•</span>
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="testimonial-container">
                                <span className="testimonial-quote">"</span>
                                <span className="testimonial-text">
                                    {testimonialText}
                                </span>
                                <span className="testimonial-quote">"</span>
                            </div>
                        </div>
                    </div>
                </ContainerX>
            </div>
        </SectionContainerY>
    );
};
