import { Button, IButtonProps } from "../atoms/button";
import { Swiper } from "../swiper";
import "./_gradient-banner.scss";

interface IGradientBannerContent {
    header?: string;
    subheader?: string;
    descList?: string[];
    button?: IButtonProps;
}

export interface IGradientBannerProps {
    colorTheme: "primary";
    imgUrl?: string;
    content?: IGradientBannerContent[];
    customComponent?: JSX.Element;
    imgPosition: "right" | "left";
}

export const GradientBanner: React.FC<IGradientBannerProps> = (
    props: IGradientBannerProps
) => {
    return (
        <div className="gradient-banner">
            <div
                className={`gradient-banner-image-container mod__img-${props.imgPosition}`}
            >
                <img src={props.imgUrl} />
            </div>
            <div
                className={`gradient-banner-background-container color-${props.colorTheme} mod__img-${props.imgPosition}`}
            />
            <div
                className={`gradient-banner-content-container mod__img-${props.imgPosition}`}
            >
                <div className="container-column">
                    {props?.content?.length === 1 && (
                        <GradientBannerContent {...props?.content[0]} />
                    )}
                    {props?.content?.length && props?.content?.length > 1 && (
                        <Swiper
                            cardLists={props?.content.map((item, i) => (
                                <GradientBannerContent
                                    key={`gradient-banner-swiper-card-${i}`}
                                    {...item}
                                />
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
                    {props.descList.map((desc, i) => (
                        <span key={`detail-${i}`} className="desc-text">
                            {desc}
                        </span>
                    ))}
                </div>
            )}
            {props?.button && <Button {...props.button} />}
        </div>
    );
};
