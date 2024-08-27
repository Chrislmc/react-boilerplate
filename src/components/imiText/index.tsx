import { IImiBoldTextProps, ImiBoldText } from "../imiBoldText";
import { IImiLinkTextProps, ImiLinkText } from "../imiLinkText";

export type IImiTextProps =
    | IImiLinkTextProps
    | IImiBoldTextProps
    | {
          desc: string;
      };

export const ImiText: React.FC<IImiTextProps> = (props) => {
    if ("desc" in props) {
        return <span className="imi-text-component">{props.desc}</span>;
    } else if ("linkText" in props) {
        return <ImiLinkText {...props} />;
    } else if ("boldText" in props) {
        return <ImiBoldText {...props} />;
    } else {
        return null;
    }
};
