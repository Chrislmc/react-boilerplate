import { Icons } from "@/assets/icons";
import { useOverlay } from "@/utils/hooks/useOverlay";
import { i18nHelper } from "@/utils/i18n-helper";
import { useCallback } from "react";

interface Props {}

export const FloatingIcon: React.FC<Props> = () => {
    const t = i18nHelper("shared");
    // const [showContent, setShowContent] = useState(false);
    const {
        OverlayWrapper,
        setContent,
        setShowOverlay,
        showOverlay,
        setBlurOverlayBackground,
    } = useOverlay();

    const onButtonClick = useCallback(() => {
        if (showOverlay) {
            setShowOverlay(false);
            return;
        }

        setBlurOverlayBackground(false);

        setContent(
            <OverlayWrapper>
                <></>
            </OverlayWrapper>
        );

        setShowOverlay(true);
    }, [
        OverlayWrapper,
        setBlurOverlayBackground,
        setContent,
        setShowOverlay,
        showOverlay,
    ]);

    return (
        <div
            className={`floating-icon-container${
                showOverlay ? " mod__display" : ""
            }`}
        >
            <div
                className={`before-content${
                    showOverlay ? " mod__display" : ""
                }`}
            >
                <div className="before-content-decorator" />

                <button className={`floating-icon-btn`} onClick={onButtonClick}>
                    <div className="floating-icon">
                        <img src={Icons.Contact} />
                    </div>
                </button>
            </div>

            <div
                className={`after-content${showOverlay ? " mod__display" : ""}`}
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
