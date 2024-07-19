import { IImiButtonProps, ImiButton } from "../imiButton";
import { ImiSwiper } from "../imiSwiper";
import "./_gradient-banner.scss";

interface IGradientBannerContent {
    header?: string;
    subheader?: string;
    descList?: string[];
    button?: IImiButtonProps;
}

export interface IImiGradientBannerProps {
    colorTheme: string;
    imgUrl?: string;
    content?: IGradientBannerContent[];
    customComponent?: JSX.Element;
}

export const ImiGradientBanner: React.FC<IImiGradientBannerProps> = (
    props: IImiGradientBannerProps
) => {
    return (
        <div className="imi-gradient-banner">
            <div className="imi-gradient-banner-image-container">
                <img src={props.imgUrl} />
            </div>
            <div
                className={`imi-gradient-banner-background-container color-${props.colorTheme}`}
            />
            <div className="imi-gradient-banner-content-container">
                <div className="container-column">
                    {props?.content?.length === 1 && (
                        <GradientBannerContent {...props?.content[0]} />
                    )}
                    {props?.content?.length && props?.content?.length > 1 && (
                        <ImiSwiper
                            cardLists={props?.content.map((item) => (
                                <GradientBannerContent {...item} />
                            ))}
                            pagination={{ clickable: true }}
                            speed={2000}
                        />
                    )}
                    {props?.customComponent && props.customComponent}
                </div>
            </div>
        </div>
    );
};

const GradientBannerContent: React.FC<IGradientBannerContent> = (props) => {
    return (
        <div className="swiper-column">
            {(props?.header || props?.subheader) && (
                <div className="header-column">
                    {props?.header && (
                        <h1 className="header">{props.header.toUpperCase()}</h1>
                    )}
                    {props?.subheader && (
                        <h3 className="subheader">
                            {props?.subheader?.toUpperCase()}
                        </h3>
                    )}
                </div>
            )}
            {props?.descList && (
                <div className="detail-column">
                    {props.descList.map((desc) => (
                        <span className="desc-text">{desc}</span>
                    ))}
                </div>
            )}
            {props?.button && <ImiButton {...props.button} />}
        </div>
    );
};
