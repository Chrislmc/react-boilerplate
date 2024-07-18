import ReactHtmlParser from "react-html-parser";
import { Props } from ".";

export const ImiCardWithImageContent: React.FC<Props> = ({
    mode = "vertical",
    header,
    desc,
    imgUrl,
    onClick,
    remark,
    tag,
    colorTheme = "primary",
    customComponent,
}) => {
    const isHorizontal = mode === "horizontal";
    const isOverlay = mode === "overlay";

    const parseClassName = (className: string, customClassName?: string) =>
        [
            className,
            isHorizontal ? "mod__horizontal" : "",
            isOverlay ? "mod__overlay" : "",
            colorTheme ? `mod__${colorTheme}` : "",
            customClassName,
        ].join(" ");

    return (
        <ImiBaseCard
            style={{
                height: isOverlay ? "inherit" : "100%",
                maxHeight: "inherit",
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                className={parseClassName(
                    "k4k-card-with-image-content",
                    onClick ? "mod__on-click" : ""
                )}
                onClick={onClick}
            >
                {!isOverlay && imgUrl && (
                    <div
                        className={parseClassName(
                            "k4k-card-with-image-content-image-container"
                        )}
                    >
                        <img src={imgUrl} />
                    </div>
                )}
                <div
                    className={parseClassName(
                        "k4k-card-with-image-content-content-container"
                    )}
                >
                    {!!tag && <K4kTag {...tag} />}

                    <div
                        className={parseClassName(
                            "k4k-card-with-image-content-header-container"
                        )}
                    >
                        <p className="k4k-card-with-image-content-header">
                            {header}
                        </p>
                        {remark && (
                            <span className="k4k-card-with-image-content-remark">
                                {remark}
                            </span>
                        )}
                    </div>
                    <div
                        className={`k4k-card-with-image-content-desc-container`}
                    >
                        {desc?.map((content, i) => (
                            <span
                                key={`desc-${i}`}
                                className={parseClassName(
                                    "k4k-card-with-image-content-desc"
                                )}
                            >
                                {ReactHtmlParser(content)}
                            </span>
                        ))}
                    </div>
                    {customComponent && customComponent}
                </div>
            </div>
        </ImiBaseCard>
    );
};
