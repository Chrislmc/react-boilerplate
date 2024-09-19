import { VideoPlayer } from "@/components/molecules/videoPlayer";

export const CorporateWellnessPageVideoSection = () => {
    return (
        <>
            <div className="video-container">
                <VideoPlayer
                    url={"https://www.youtube.com/watch?v=FkefRSxpuFk"}
                    muted={false}
                    controls={false}
                    height={"100%"}
                    width={"auto"}
                    loop
                    className="react-player"
                />
            </div>
        </>
    );
};
