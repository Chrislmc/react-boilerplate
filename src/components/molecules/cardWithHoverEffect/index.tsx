import { Button, IButtonProps } from "@/components/atoms/button";
import "./_card-with-hover-effect.scss";
import classNames from "classnames";

interface Props {
    className?: string;
    priorImgUrl: string;
    afterImgUrl?: string;
    header?: string;
    descs?: string[];
    button?: IButtonProps;
}

export const CardWithHoverEffect: React.FC<Props> = ({
    className,
    priorImgUrl,
    afterImgUrl,
    header,
    descs,
    button,
}) => {
    return (
        <div
            className={classNames(
                `card-with-hover-effect-component`,
                className
            )}
        >
            <div className="img-container prior-img">
                <img src={priorImgUrl} />
            </div>

            {afterImgUrl && (
                <div className="img-container after-img">
                    <img src={afterImgUrl} />
                </div>
            )}

            <div className="content-container-background" />

            <div className="content-container">
                <div className="content-column">
                    {header && <p className="header">{header}</p>}
                    {descs && (
                        <div className="desc-list">
                            {descs.map((desc) => (
                                <p className="desc">{desc}</p>
                            ))}
                        </div>
                    )}
                    {button && <Button {...button} />}
                </div>
            </div>
        </div>
    );
};
