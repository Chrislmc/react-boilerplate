import { i18nHelper } from "@/utils/i18n-helper";
import { ImiButton } from "../imiButton";
import "./_product-button.scss";

export interface IImiProductButton {
    isOutOfStock: boolean;
    onlyAvailableInClinic: boolean;
    disabled?: boolean;
}

export const ImiProductButton: React.FC<IImiProductButton> = ({
    isOutOfStock,
    onlyAvailableInClinic,
    disabled,
}) => {
    const t = i18nHelper("shared");

    let btnText = "";
    let btnTheme = "";
    let isDisabled = false;
    if (isOutOfStock) {
        btnText = t("product.btn.outOfStock");
        btnTheme = "mod__out-of-stock";
        isDisabled = true;
    } else if (onlyAvailableInClinic) {
        btnText = t("product.btn.buyInClinic");
        btnTheme = "mod__buy-in-clinic";
    } else {
        btnText = t("product.btn.addToBasket");
        btnTheme = "mod__add-to-basket";
    }

    return (
        <div className="imi-product-button-component">
            <ImiButton
                text={btnText}
                buttonClassName={btnTheme}
                textClassName={btnTheme}
                disabled={isDisabled || disabled}
            />
        </div>
    );
};
