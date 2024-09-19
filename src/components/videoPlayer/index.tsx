import ReactPlayer, { ReactPlayerProps } from "react-player";

interface Props extends ReactPlayerProps {
    url: string;
}

export const VideoPlayer: React.FC<Props> = ({
    url,
    controls = true,
    muted = true,
    ...props
}) => {
    return (
        <div className="video-player-component">
            <ReactPlayer
                url={url}
                controls={controls}
                playing={true}
                muted={muted}
                loop={true}
                playsinline={true}
                {...props}
            />
        </div>
    );
};
