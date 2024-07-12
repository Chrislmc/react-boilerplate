import { Link } from "react-router-dom";
import { ContainerX } from "../containerX";

export const Footer = () => {
    // const translate = useTranslate();
    // const t = i18nHelper(translate, "shared");

    return (
        <div>
            <div className="site-footer-content-container">
                <ContainerX>
                    <div className="site-footer-site-map-row">
                        <div className="site-footer-logo-column">
                            <div className="site-footer-logo-container">
                                <Link to="/" className="site-footer-logo">
                                    {/* <img src={Images.FooterLogo} /> */}
                                </Link>
                                <span className="site-footer-logo-text">
                                    {'t("footer.logoText1")'}
                                </span>
                                <span className="site-footer-logo-text">
                                    {'t("footer.logoText2")'}
                                </span>
                            </div>
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
                        <p>{'t("footer.copyright"'}</p>

                        <div className="site-footer-link-container">
                            <div className="site-footer-link">
                                <Link to="/weather-policy">
                                    <p>{'t("footer.weatherPolicy")'}</p>
                                </Link>
                            </div>

                            <div className="site-footer-link">
                                <Link to="/privacy-policy">
                                    <p>{'t("footer.privacyPolicy")'}</p>
                                </Link>
                            </div>

                            <div className="site-footer-link">
                                <Link to="/volunteer-code-of-conduct">
                                    <p>
                                        {'t("footer.volunteerCodeOfConduct‍")'}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ContainerX>
            </div>
        </div>
    );
};
