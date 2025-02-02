import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { useLocation, useNavigate } from "react-router-dom";
import { ContainerX } from "../containerX";
import "./_header.scss";
import { headerButtons, headerMenuItems, headerRibbonItems } from "./constant";

export const Header = () => {
    const t = i18nHelper("shared");
    const navigator = useNavigate();
    const location = useLocation();

    return (
        <div className="site-header">
            <div className="site-header-content-container-background" />
            <div className="site-header-content-container">
                <ContainerX>
                    <div className="site-header-container">
                        <button
                            className="site-header-logo-container"
                            onClick={() => navigator(redirectRouteMap.homepage)}
                        >
                            <div className="site-header-logo">
                                <p className="site-header-logo-character">I</p>
                                <p className="site-header-logo-character">M</p>
                                <p className="site-header-logo-character">I</p>
                            </div>
                            {/* <img src={Images.ImiLogo} /> */}
                        </button>
                        <div className="site-header-section-content-container">
                            <div className="site-header-menu-container">
                                {headerMenuItems.map((item) => {
                                    const isActive =
                                        location.pathname === item.link;

                                    return (
                                        <a
                                            key={`header-menu-item-${item.value}`}
                                            className={`header-menu-item-button${
                                                isActive ? " mod__active" : ""
                                            }`}
                                            href={item.link}
                                            title={t(item.desc)}
                                        >
                                            {t(item.desc)}
                                            <div className="site-header-menu-decorator" />
                                        </a>
                                    );
                                })}
                            </div>

                            <div className="site-header-button-container">
                                {headerButtons.map(
                                    (
                                        { link, iconComponent: IconComponent },
                                        i
                                    ) => (
                                        <a
                                            key={`header-button-${i}`}
                                            className={`header-button`}
                                            href={link}
                                        >
                                            <IconComponent />
                                        </a>
                                    )
                                )}
                            </div>

                            <div className="site-header-translation-container">
                                <div className="site-header-translation mod__current">
                                    <button className="site-header-translation-button mod__current">
                                        <p>En</p>
                                    </button>
                                </div>
                                <div className="site-header-translation mod__inactive">
                                    <button className="site-header-translation-button mod__inactive">
                                        <p>Ch</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerX>
            </div>
            <div className="site-header-link-ribbon">
                <ContainerX>
                    <div className="site-header-ribbon-content-container">
                        {headerRibbonItems.map((item, i) => (
                            <a
                                key={`site-header-ribbon-item-${i}`}
                                className="site-header-ribbon-item"
                                href={item.link}
                            >
                                <img src={item.imgUrl} />
                                <p>{t(item.desc)}</p>
                            </a>
                        ))}
                    </div>
                </ContainerX>
            </div>
        </div>
    );
};
