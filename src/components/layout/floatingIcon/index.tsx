import { Icons } from "@/assets/icons";
import { i18nHelper } from "@/utils/i18n-helper";
import { useState } from "react";

interface Props {}

export const FloatingIcon: React.FC<Props> = () => {
    const t = i18nHelper("shared");
    const [showContent, setShowContent] = useState(false);

    return (
        <div
            className={`floating-icon-container${
                showContent ? " mod__display" : ""
            }`}
        >
            <div
                className={`before-content${
                    showContent ? " mod__display" : ""
                }`}
            >
                <div className="before-content-decorator" />

                <button
                    className={`floating-icon-btn`}
                    onClick={() => setShowContent(!showContent)}
                >
                    <div className="floating-icon">
                        <img src={Icons.Contact} />
                    </div>
                </button>
            </div>

            <div
                className={`after-content${showContent ? " mod__display" : ""}`}
            >
                <button className={`floating-icon-btn`}>
                    <div className="floating-icon">
                        <img src={Icons.Whatsapp} />
                        <p>{t("floatingIcon.whatsapp")}</p>
                    </div>
                </button>
                <button className={`floating-icon-btn`}>
                    <div className="floating-icon">
                        <img src={Icons.Form} />
                        <p>{t("floatingIcon.enquiry")}</p>
                    </div>
                </button>
            </div>
        </div>
    );
};
