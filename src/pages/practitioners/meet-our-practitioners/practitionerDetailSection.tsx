import { Images } from "@/assets/images";
import { ImiButton } from "@/components/imiButton";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_meet-our-practitioners-page.scss";

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

                    <div className="portrait-container">
                        <ContainerX>
                            <div className="image-container">
                                <img src={Images.GraemeBradshawPortrait} />
                            </div>
                        </ContainerX>
                    </div>
                </div>

                <ContainerX>
                    <div className="appointment-button-container">
                        <ImiButton
                            text={t("meetOurPractitioners.bookAnAppointment")}
                            size="padding"
                            colorTheme="orange"
                        />
                    </div>

                    <div className="content-row">
                        <div className="summary-column"></div>
                        <div className="misc-info-column"></div>
                    </div>
                </ContainerX>
            </div>
        </SectionContainerY>
    );
};
