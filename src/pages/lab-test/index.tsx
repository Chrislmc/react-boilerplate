import { ImiBreadcrumb } from "@/components/imiBreadcrumb";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSection } from "@/components/imiSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_lab-test-page.scss";

export const LabTestPage = () => {
    const t = i18nHelper("lab-test");

    return (
        <div id="lab-test-page">
            <ImiSection className="practitioners-page-desc-section">
                <ImiDescSection
                    header={t("labTest.header")}
                    subheader={t("labTest.subheader")}
                    desc={[
                        t("labTest.desc1"),
                        t("labTest.desc2"),
                        t("labTest.desc3"),
                    ]}
                    shrinkDescWidth
                />
            </ImiSection>

            <ImiBreadcrumb />
        </div>
    );
};
