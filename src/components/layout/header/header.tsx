import { Images } from "@/assets/images";
import { i18nHelper } from "@/utils/i18n-helper";
import { ContainerX } from "../containerX";
import "./_header.scss";
import { headerRibbonItems } from "./constant";

export const Header = () => {
    const t = i18nHelper("shared");

    return (
        <div className="site-header">
            <div className="site-header-content-container">
                <ContainerX>
                    <div className="site-header-container">
                        <div className="site-header-logo-container">
                            <img src={Images.ImageImiLogo} />
                        </div>
                        <div className="site-header-content-container"></div>
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
