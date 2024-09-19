import { Icons } from "@/assets/icons";

interface Props {
    type: "location" | "appointment-type";
    text: string;
}

export const PractitionerTag: React.FC<Props> = ({ type, text }) => {
    let imgUrl;
    switch (type) {
        case "appointment-type":
            imgUrl = Icons.Online;
            break;
        case "location":
        default:
            imgUrl = Icons.Location;
            break;
    }

    return (
        <div className="practitioner-tag-component">
            <div className="icon-container">
                <img src={imgUrl} />
            </div>

            <span>{text}</span>
        </div>
    );
};
