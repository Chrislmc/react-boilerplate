import { Button, IButtonProps } from "@/components/button";
import { IHeroImg } from "@/components/descSection";
import { VideoPlayer } from "@/components/videoPlayer";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";

interface Props {
    heroImg: IHeroImg;
    header?: string;
    desc?: string;
    button?: IButtonProps;
}

export const HomePageHeroBannerCard: React.FC<Props> = ({
    heroImg,
    header,
    desc,
    button,
}) => {
    const t = i18nHelper("home-page");

    return (
        <div className="home-page-hero-banner-card">
            <div className="home-page-hero-banner-card-background">
                {"imgUrl" in heroImg ? (
                    <img src={heroImg.imgUrl} />
                ) : (
                    <VideoPlayer
                        url={heroImg.videoUrl}
                        controls={false}
                        height={"auto"}
                        width={"100%"}
                    />
                )}
            </div>

            <div className="home-page-banner-card-gradient-overlay" />

            {header && (
                <h1 className="home-page-hero-banner-header">{t(header)}</h1>
            )}
            {desc && <h4 className="home-page-hero-banner-desc">{t(desc)}</h4>}

            {button && <Button {...button} text={t(button.text)} />}
        </div>
    );
};
