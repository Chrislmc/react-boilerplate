import { i18nHelper } from "@/utils/i18n-helper";
import { IMenuItem } from "@/utils/routes/menuList";
import { useNavigate } from "react-router-dom";

interface Props {
    menuItem: IMenuItem;
}
export const SiteMap = ({ menuItem }: Props) => {
    const t = i18nHelper("shared");
    const navigate = useNavigate();

    return (
        <div className="site-footer-site-map-item-container">
            <div className="site-footer-site-map-item-header">
                <button
                    onClick={() => navigate(menuItem.link)}
                    id={menuItem.desc}
                    disabled={menuItem?.noPage}
                >
                    <h6>{t(`menuItem.${menuItem.desc}`)}</h6>
                </button>
            </div>
            <div className="site-footer-site-map-sub-menu-item-container">
                {menuItem?.subMenu?.map((subMenuItem, i) => (
                    <div key={i} className="site-footer-site-map-sub-menu-item">
                        <button
                            onClick={() => navigate(subMenuItem.link)}
                            id={subMenuItem.desc}
                        >
                            <span className="site-footer-site-map-sub-menu-item-desc">
                                {t(`menuItem.${subMenuItem.desc}`)}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
