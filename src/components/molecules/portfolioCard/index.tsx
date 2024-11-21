import { Button, IButtonProps } from "@/components/atoms/button";
import classNames from "classnames";
import "./_portfolio-card.scss";

interface Props {
    imgUrls: string[];
    type: "1" | "2" | "3";
    header?: string;
    descs?: string[];
    button?: IButtonProps;
}

export const PortfolioCard: React.FC<Props> = ({
    imgUrls,
    type,
    header,
    descs,
    button,
}) => {
    const parseClassName = (classN: string) => {
        return classNames([classN, `type-${type}`]);
    };

    return (
        <div className="portfolio-card-component">
            <div className={parseClassName("image-container")}>
                {imgUrls.map((imgUrl) => (
                    <img src={imgUrl} key={`portfolio-img-${imgUrl}`} />
                ))}
            </div>

            <div className={parseClassName("content-container")}>
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
    );
};
