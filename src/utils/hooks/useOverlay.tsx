import { Icons } from "@/assets/icons";
import React, {
    useCallback,
    useContext,
    useLayoutEffect,
    useState,
} from "react";
import { useLocation } from "react-router-dom";

export const OverlayProvider: React.FC<any> = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [content, setContent] = useState<JSX.Element>(<></>);
    const location = useLocation();

    useLayoutEffect(() => {
        setShowOverlay(false);
    }, [location.pathname]);

    const OverlayWrapper = useCallback(
        ({ closeIcon, children, ...props }) => (
            <div
                className={`overlay-wrapper ${
                    showOverlay ? "mod__active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
                {...props}
            >
                {children}
                <div className="overlay-wrapper-close-button-container">
                    <button onClick={() => setShowOverlay(false)}>
                        <img src={closeIcon || Icons.IconYoutube} />
                    </button>
                </div>
            </div>
        ),
        [showOverlay]
    );

    return (
        <OverlayContext.Provider
            value={{
                content,
                OverlayWrapper,
                setContent,
                setShowOverlay,
                showOverlay,
            }}
        >
            {children}
        </OverlayContext.Provider>
    );
};

export const OverlayContext = React.createContext<{
    content: JSX.Element;
    OverlayWrapper: ({
        children,
        closeIcon,
    }: {
        children: JSX.Element;
        closeIcon?: string;
        [x: string]: any;
    }) => JSX.Element;
    setContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
    setShowOverlay?: React.Dispatch<React.SetStateAction<boolean>>;
    showOverlay?: boolean;
}>({
    content: <></>,
    OverlayWrapper: () => <></>,
    setContent: () => null,
    showOverlay: false,
});

export const useOverlay = () => useContext(OverlayContext);
