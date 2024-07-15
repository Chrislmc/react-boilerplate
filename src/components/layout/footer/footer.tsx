import { i18nHelper } from "@/utils/i18n-helper";
import { ContainerX } from "../containerX";
import "./_footer.scss";

export const Footer = () => {
    const t = i18nHelper("shared");

    return (
        <div className="site-footer">
            <div className="site-footer-content-container">
                <ContainerX>
                    <div className="site-footer-site-map-row">
                        <div className="site-footer-logo-column">
                            <div className="site-footer-logo-container">
                                <p className="site-footer-logo">
                                    <p className="site-footer-logo-character">
                                        I
                                    </p>
                                    <p className="site-footer-logo-character">
                                        M
                                    </p>
                                    <p className="site-footer-logo-character">
                                        I
                                    </p>
                                </p>

                                <div className="site-footer-logo-separator" />

                                <span className="site-footer-logo-text">
                                    {t("footer.logoText")}
                                </span>
                            </div>
                            <span className="site-footer-logo-text">
                                {t("footer.stayUpToDate")}
                                {t("footer.stayUpToDateDesc")}
                            </span>
                        </div>
                        <div className="site-footer-site-map-container">
                            {/* {menuList.map((menu, i) => (
                                <SiteMap key={i} menuItem={menu} />
                            ))} */}
                        </div>
                    </div>
                </ContainerX>
            </div>

            <div className="site-footer-link-line-container">
                <ContainerX>
                    <div className="site-footer-link-line">
                        <p className="site-footer-copyright">
                            {t("footer.copyright", {
                                year: new Date().getFullYear(),
                            })}
                        </p>

                        <div className="site-footer-link-container"></div>
                    </div>
                </ContainerX>
            </div>
        </div>
    );
};
