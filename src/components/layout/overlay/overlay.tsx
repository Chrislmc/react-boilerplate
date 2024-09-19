import { useOverlay } from "@/utils/hooks/useOverlay";

export const Overlay: React.FC = () => {
    const { content, setShowOverlay, showOverlay, blurOverlayBackground } =
        useOverlay();

    return (
        <div
            className={`overlay${showOverlay ? " mod__active" : ""}${
                blurOverlayBackground ? " mod__blur" : ""
            }`}
            onClick={() => setShowOverlay(false)}
        >
            <div
                className={`overlay-background${
                    blurOverlayBackground ? " mod__blur" : ""
                }`}
            />
            {content}
        </div>
    );
};
