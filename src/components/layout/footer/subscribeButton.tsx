import { i18nHelper } from "@/utils/i18n-helper";

export const SubscribeButton = () => {
    const t = i18nHelper("shared");

    return (
        <div className="site-footer-subscribe-container">
            <input placeholder={t("footer.subscribeInputPlaceholder")} />
            <button>{t("footer.subscribe")}</button>
        </div>
    );
};
