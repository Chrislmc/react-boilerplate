import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import classNames from "classnames";
import { contactMe } from "./homePageConstant";

export const HomePageContactMeSection = () => {
    const t = i18nHelper("home-page");

    return (
        <div className="subsection">
            <div className="header-container intercept-header">
                <div className="decorator" />
                <div className="content-container">
                    <h2 className="header">{t("contact-me.header")}</h2>
                </div>
                <div className="decorator" />
            </div>
            <ContainerX>
                <div className="contact-methods">
                    {contactMe.map((content) => {
                        const Icon = content.icon;
                        return (
                            <div
                                key={`contact-${content.id}`}
                                className={classNames(
                                    "contact-container",
                                    !content?.redirectUrl && "disabled"
                                )}
                                aria-disabled={!content?.redirectUrl}
                            >
                                <a
                                    className="contact-btn"
                                    href={content?.redirectUrl || undefined}
                                    target="none"
                                >
                                    <div className="icon-container">
                                        <Icon />
                                    </div>

                                    <p className="desc">{t(content.text)}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </ContainerX>
        </div>
    );
};
