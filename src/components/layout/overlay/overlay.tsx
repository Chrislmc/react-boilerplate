import { useOverlay } from '@/utils/hooks/useOverlay';

export const Overlay: React.FC = () => {
    const { content, setShowOverlay, showOverlay } = useOverlay();

    return (
        <div
            className={`overlay ${showOverlay ? 'mod__active' : ''}`}
            onClick={() => setShowOverlay(false)}
        >
            <div className="overlay-background"></div>
            {content}
        </div>
    );
};
