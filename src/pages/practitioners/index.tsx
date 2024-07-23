import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSelect } from "@/components/imiSelect";
import { i18nHelper } from "@/utils/i18n-helper";
import { practitionersPageFilterOption } from "./practitionersPageConstant";

export const PractitionersPage = () => {
    const t = i18nHelper("practitioners");

    const translatedFilterOption = practitionersPageFilterOption.map(
        (option) => ({ ...option, text: t(option.text) })
    );

    return (
        <ImiDescSection
            header={t("practitioners.header")}
            desc={[t("practitioners.desc")]}
            customFullWidthBottomComponent={
                <ImiSelect
                    options={translatedFilterOption}
                    placeholder={""}
                    defaultOption={translatedFilterOption[0]}
                    allOption={translatedFilterOption[0]}
                />
            }
        />
    );
};
