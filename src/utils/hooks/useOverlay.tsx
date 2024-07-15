import { Icons } from "@/assets/icons";
import React, {
    useCallback,
    useContext,
    useLayoutEffect,
    useState,
} from "react";
import { useLocation } from "react-router-dom";

type Props = React.FC<{ children: React.ReactNode }>;
type IOverlayWrapper = ({
    closeIcon,
    children,
    ...props
}: {
    closeIcon?: string;
    children: React.ReactNode;
}) => React.ReactNode;

export const OverlayProvider: Props = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(<></>);
    const location = useLocation();

    useLayoutEffect(() => {
        setShowOverlay(false);
    }, [location.pathname]);

    const OverlayWrapper: IOverlayWrapper = useCallback(
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
    content: React.ReactNode;
    OverlayWrapper: IOverlayWrapper;
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
    showOverlay: boolean;
}>({
    content: <></>,
    OverlayWrapper: () => <></>,
    setContent: () => null,
    setShowOverlay: () => null,
    showOverlay: false,
});

export const useOverlay = () => useContext(OverlayContext);
