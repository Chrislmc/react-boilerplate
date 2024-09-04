import { ImiVideoPlayer } from "@/components/imiVideoPlayer";
import { convertRemToPx } from "@/utils/css-helper";

export const CorporateWellnessPageVideoSection = () => {
    return (
        <div className="video-container">
            <ImiVideoPlayer
                url={"https://www.youtube.com/watch?v=FkefRSxpuFk"}
                muted={false}
                controls={false}
                height={convertRemToPx(37.5)}
                width={"100%"}
                loop
            />
        </div>
    );
};
