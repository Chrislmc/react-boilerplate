import { BoldText, IBoldTextProps } from "../boldText";
import { ILinkTextProps, LinkText } from "../linkText";

export type ITextProps =
    | ILinkTextProps
    | IBoldTextProps
    | {
          desc: string;
      };

export const Text: React.FC<ITextProps> = (props) => {
    if ("desc" in props) {
        return <span className="text-component">{props.desc}</span>;
    } else if ("linkText" in props) {
        return <LinkText {...props} />;
    } else if ("boldText" in props) {
        return <BoldText {...props} />;
    } else {
        return null;
    }
};
