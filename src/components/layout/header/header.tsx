import { Images } from "@/assets/images";
import { i18nHelper } from "@/utils/i18n-helper";
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
            <div className="site-header-content-container">
                <ContainerX>
                    <div className="site-header-container">
                        <div className="site-header-logo-container">
                            <img src={Images.ImageImiLogo} />
                        </div>
                        <div className="site-header-section-content-container">
                            <div className="site-header-menu-container">
                                {headerMenuItems.map((item) => {
                                    const isActive =
                                        location.pathname === item.link;

                                    return (
                                        <button
                                            key={`header-menu-item-${item.value}`}
                                            className={`${
                                                isActive ? " mod__active" : ""
                                            }`}
                                            onClick={() => navigator(item.link)}
                                            title={t(item.desc)}
                                        >
                                            {t(item.desc)}
                                            <div className="site-header-menu-decorator" />
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="site-header-button-container">
                                {headerButtons.map((button) => (
                                    <button
                                        onClick={() =>
                                            button?.link &&
                                            navigator(button.link)
                                        }
                                    >
                                        <img src={button.imgUrl} />
                                    </button>
                                ))}
                            </div>

                            <div className="site-header-translation-container">
                                <div className="site-header-translation mod__current">
                                    <button className="site-header-translation-button">
                                        <p>En</p>
                                    </button>
                                </div>
                                <div className="site-header-translation mod__inactive">
                                    <button className="site-header-translation-button">
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
                            <button
                                key={`site-header-ribbon-item-${i}`}
                                className="site-header-ribbon-item"
                                onClick={() => navigator(item.link)}
                            >
                                <img src={item.imgUrl} />
                                <p>{t(item.desc)}</p>
                            </button>
                        ))}
                    </div>
                </ContainerX>
            </div>
        </div>
    );
};
