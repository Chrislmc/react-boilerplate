import { IImiButtonProps, ImiButton } from "../imiButton";
import "./_gradient-banner.scss";

export interface IImiGradientBannerProps {
    colorTheme: string;
    imgUrl?: string;
    header?: string;
    subheader?: string;
    descList?: string[];
    button?: IImiButtonProps;
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
                    {(props?.header || props?.subheader) && (
                        <div className="header-column">
                            {props?.header && (
                                <h1 className="header">
                                    {props.header.toUpperCase()}
                                </h1>
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
                    {props?.customComponent && props.customComponent}
                </div>
            </div>
        </div>
    );
};
