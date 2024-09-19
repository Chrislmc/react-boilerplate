import { ReactNode } from "react";
import { ContainerX } from "../layout/containerX";
import { SectionContainerY } from "../layout/sectionContainerY";
import { SectionHeader } from "../sectionHeader";
import { VideoPlayer } from "../videoPlayer";
import "./_desc-section.scss";

interface IHeroImgBaseProps {
    colorLayer?: boolean;
    smallHeader?: string;
    header1?: string;
    header2?: string;
}
interface IHeroImgProps extends IHeroImgBaseProps {
    imgUrl: string;
}
interface IHeroVideoProps extends IHeroImgBaseProps {
    videoUrl: string;
}
export type IHeroImg = IHeroImgProps | IHeroVideoProps;

interface Props {
    header?: string;
    subheader?: string;
    desc?: string[];
    shrinkDescWidth?: boolean;

    heroImg?: IHeroImg;
    customHeaderComponent?: {
        position: "left" | "center" | "right";
        Component: ReactNode;
    };
    customBottomComponent?: ReactNode;
    customFullWidthBottomComponent?: ReactNode;
    backButton?: boolean;

    style?: "normal" | "subsection" | "small-subsection";
}

export const DescSection: React.FC<Props> = (props: Props) => {
    return (
        <div className="desc-section-component">
            {!!props?.heroImg && (
                <div className="desc-section-hero-image">
                    {"imgUrl" in props.heroImg ? (
                        <img src={props.heroImg.imgUrl} />
                    ) : (
                        <VideoPlayer
                            url={props.heroImg.videoUrl}
                            controls={false}
                        />
                    )}
                    {props.heroImg?.colorLayer && (
                        <div className="desc-section-hero-color-layer" />
                    )}
                    <div className="desc-section-hero-image-content">
                        <ContainerX>
                            {props.heroImg?.smallHeader && (
                                <h2>
                                    {props.heroImg.smallHeader.toUpperCase()}
                                </h2>
                            )}
                            {props.heroImg?.header1 && (
                                <h1>{props.heroImg.header1?.toUpperCase()}</h1>
                            )}
                            {props.heroImg?.header2 && (
                                <h1>{props.heroImg.header2?.toUpperCase()}</h1>
                            )}
                        </ContainerX>
                    </div>
                </div>
            )}
            <SectionContainerY>
                <ContainerX>
                    <div
                        className={`desc-section-content ${
                            props?.header ? "mod__with-back-button" : ""
                        }`}
                    >
                        {props?.header && (
                            <div
                                className={`desc-section-header-container ${
                                    props?.header ? "mod__with-back-button" : ""
                                }`}
                            >
                                <SectionHeader
                                    header={props.header}
                                    style={props?.style}
                                />

                                {props?.customHeaderComponent && (
                                    <div className="desc-section-header-decoration-container">
                                        <div
                                            className={`desc-section-header-${props.customHeaderComponent.position}-container`}
                                        >
                                            {
                                                props.customHeaderComponent
                                                    .Component
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {props?.subheader && (
                            <h5 className="desc-section-subheader">
                                {props.subheader}
                            </h5>
                        )}

                        {props?.desc && (
                            <div
                                className={`desc-section-desc-column${
                                    props?.shrinkDescWidth
                                        ? " mod__shrink-width"
                                        : ""
                                }`}
                            >
                                {props?.desc?.map((desc, i) => (
                                    <h5
                                        key={`desc-section-desc-${i}`}
                                        className={`desc-section-desc desc-section-desc-${i}`}
                                    >
                                        {desc}
                                    </h5>
                                ))}
                            </div>
                        )}
                    </div>
                    {!!props?.customBottomComponent &&
                        props?.customBottomComponent}
                </ContainerX>

                {!!props?.customFullWidthBottomComponent &&
                    props?.customFullWidthBottomComponent}
            </SectionContainerY>
        </div>
    );
};
