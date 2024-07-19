import { IImiButtonProps, ImiButton } from "@/components/imiButton";
import { IHeroImg } from "@/components/imiDescSection";
import { ImiVideoPlayer } from "@/components/imiVideoPlayer";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";

interface Props {
    heroImg: IHeroImg;
    header?: string;
    desc?: string;
    button?: IImiButtonProps;
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
                    <ImiVideoPlayer
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

            {button && <ImiButton {...button} text={t(button.text)} />}
        </div>
    );
};
