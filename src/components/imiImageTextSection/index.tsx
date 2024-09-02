import { ReactNode } from "react";
import { IImiButtonProps, ImiButton } from "../imiButton";
import { ContainerX } from "../layout/containerX";
import { SectionContainerY } from "../layout/sectionContainerY";
import "./_image-text-section.scss";

interface Props {
    imgUrl: string;
    imgPosition?: "right" | "left";
    backgroundColor?: "white" | "blueish-green";
    header: string;
    descs?: string[];
    button?: IImiButtonProps;
    customSideComponent?: ReactNode;
}

export const ImiImageTextSection: React.FC<Props> = ({
    imgUrl,
    imgPosition = "right",
    backgroundColor = "white",
    header,
    descs,
    button,
    customSideComponent,
}) => {
    return (
        <div className={`imi-image-text-section mod__bg-${backgroundColor}`}>
            <ContainerX>
                <SectionContainerY size="small">
                    <div
                        className={`row${
                            imgPosition === "right" ? "" : "mod__reversed"
                        }`}
                    >
                        <div className="content-container">
                            <h3 className="header">{header}</h3>

                            {descs && (
                                <div className="desc-container">
                                    {descs.map((desc, i) => (
                                        <h6
                                            key={`desc-${i}`}
                                            className={"desc"}
                                        >
                                            {desc}
                                        </h6>
                                    ))}
                                </div>
                            )}

                            {button && <ImiButton {...button} />}

                            {customSideComponent && customSideComponent}
                        </div>

                        <div className="image-container">
                            <img src={imgUrl} />
                        </div>
                    </div>
                </SectionContainerY>
            </ContainerX>
        </div>
    );
};
