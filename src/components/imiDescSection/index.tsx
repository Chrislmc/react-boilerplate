import { ReactNode } from "react";
import { ImiSectionHeader } from "../imiSectionHeader";
import { ImiVideoPlayer } from "../imiVideoPlayer";
import { ContainerX } from "../layout/containerX";
import { SectionContainerY } from "../layout/sectionContainerY";

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
    desc?: string[];

    heroImg?: IHeroImg;
    customHeaderComponent?: {
        position: "left" | "center" | "right";
        Component: ReactNode;
    };
    customBottomComponent?: ReactNode;
    customFullWidthBottomComponent?: ReactNode;
    backButton?: boolean;
}

export const ImiDescSection: React.FC<Props> = (props: Props) => {
    return (
        <div className="imi-desc-section-component">
            {!!props?.heroImg && (
                <div className="imi-desc-section-hero-image">
                    {"imgUrl" in props.heroImg ? (
                        <img src={props.heroImg.imgUrl} />
                    ) : (
                        <ImiVideoPlayer
                            url={props.heroImg.videoUrl}
                            controls={false}
                        />
                    )}
                    {props.heroImg?.colorLayer && (
                        <div className="imi-desc-section-hero-color-layer" />
                    )}
                    <div className="imi-desc-section-hero-image-content">
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
                        className={`imi-desc-section-content ${
                            props?.header ? "mod__with-back-button" : ""
                        }`}
                    >
                        {props?.header && (
                            <div
                                className={`imi-desc-section-header-container ${
                                    props?.header ? "mod__with-back-button" : ""
                                }`}
                            >
                                <ImiSectionHeader header={props.header} />

                                {props?.customHeaderComponent && (
                                    <div className="imi-desc-section-header-decoration-container">
                                        <div
                                            className={`imi-desc-section-header-${props.customHeaderComponent.position}-container`}
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

                        {props?.desc && (
                            <div className="imi-desc-section-desc-column">
                                {props?.desc?.map((desc, i) => (
                                    <h6
                                        key={`imi-desc-section-desc-${i}`}
                                        className={`imi-desc-section-desc imi-desc-section-desc-${i}`}
                                    >
                                        {desc}
                                    </h6>
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
