import { ImiAccordion } from "@/components/imiAccordion";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { naturopathyDetailsAccordionItems } from "./naturopathyPageConstant";

export const NaturopathyPageServiceDetailSection = () => {
    const t = i18nHelper("services");

    const translatedAccordionItems = naturopathyDetailsAccordionItems.map(
        (item) => ({
            ...item,
            header: t(item.header),
            details: item.details.map((detail) =>
                typeof detail === "string"
                    ? t(detail)
                    : {
                          ...(detail?.prefix && { prefix: t(detail.prefix) }),
                          boldText: t(detail.boldText),
                          ...(detail?.suffix && { suffix: t(detail.suffix) }),
                      }
            ),
        })
    );

    return (
        <ContainerX>
            <ImiAccordion content={translatedAccordionItems} />
        </ContainerX>
    );
};
