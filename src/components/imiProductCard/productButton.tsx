import { i18nHelper } from "@/utils/i18n-helper";
import { ImiButton } from "../imiButton";

export interface IProductButton {
    isOutOfStock: boolean;
    onlyAvailableInClinic: boolean;
}

export const ProductButton: React.FC<IProductButton> = ({
    isOutOfStock,
    onlyAvailableInClinic,
}) => {
    const t = i18nHelper("shared");

    let btnText = "";
    let btnTheme = "";
    if (isOutOfStock) {
        btnText = t("product.btn.outOfStock");
        btnTheme = "mod__outOfStock";
    } else if (onlyAvailableInClinic) {
        btnText = t("product.btn.buyInClinic");
        btnTheme = "mod__buyInClinic";
    } else {
        btnText = t("product.btn.addToBasket");
        btnTheme = "mod__addToBasket";
    }

    return (
        <ImiButton
            text={btnText}
            buttonClassName={btnTheme}
            textClassName={btnTheme}
        />
    );
};
