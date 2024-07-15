import { menuList } from "@/assets/constant/menuList";
import { i18nHelper } from "@/utils/i18n-helper";
import { ContainerX } from "../containerX";
import "./_footer.scss";
import { SiteMap } from "./siteMap";
import { SubscribeButton } from "./subscribeButton";

export const Footer = () => {
    const t = i18nHelper("shared");

    return (
        <div className="site-footer">
            <div className="site-footer-content-container">
                <ContainerX>
                    <div className="site-footer-site-map-row">
                        <div className="site-footer-logo-column">
                            <div className="site-footer-logo-container">
                                <div className="site-footer-logo">
                                    <p className="site-footer-logo-character">
                                        I
                                    </p>
                                    <p className="site-footer-logo-character">
                                        M
                                    </p>
                                    <p className="site-footer-logo-character">
                                        I
                                    </p>
                                </div>

                                <div className="site-footer-logo-separator" />

                                <span className="site-footer-logo-text">
                                    {t("footer.logoText")}
                                </span>
                            </div>

                            <div className="site-footer-stay-up-to-date-container">
                                <h6 className="site-footer-stay-up-to-date-header">
                                    {t("footer.stayUpToDate")}
                                </h6>
                                <p className="site-footer-stay-up-to-date-desc">
                                    {t("footer.stayUpToDateDesc")}
                                </p>
                            </div>

                            <SubscribeButton />
                        </div>
                        <div className="site-footer-site-map-container">
                            {menuList.map((menu, i) => (
                                <SiteMap key={i} menuItem={menu} />
                            ))}
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
