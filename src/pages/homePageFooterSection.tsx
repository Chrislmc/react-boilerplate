import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { contactMethods } from "./homePageConstant";

export const HomePageFooterSection = () => {
    const t = i18nHelper("home-page");

    return (
        <div className="subsection">
            <div className="header-container intercept-header">
                <div className="decorator" />
                <div className="content-container">
                    {contactMethods.map((method, i) => {
                        const Icon = method.icon;
                        return (
                            <a
                                key={`contact-method-${i}`}
                                href={method.redirectUrl}
                                target="_blank"
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>
                <div className="decorator" />
            </div>
            <ContainerX>
                <div className="thank-you-container">
                    <h2 className="thank-you">{t("footer.thank-you")}</h2>
                </div>
            </ContainerX>
        </div>
    );
};
