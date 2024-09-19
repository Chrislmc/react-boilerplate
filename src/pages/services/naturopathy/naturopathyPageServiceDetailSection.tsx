import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { Accordion } from "@/components/molecules/accordion";
import { i18nHelper } from "@/utils/i18n-helper";
import { naturopathyDetailsAccordionItems } from "./naturopathyPageConstant";

export const NaturopathyPageServiceDetailSection = () => {
    const t = i18nHelper("services");

    const translatedAccordionItems = naturopathyDetailsAccordionItems.map(
        (item) => ({
            ...item,
            header: t(item.header),
            details: item.details.map((detail) =>
                "desc" in detail
                    ? { desc: t(detail.desc) }
                    : {
                          ...(detail?.prefix && { prefix: t(detail.prefix) }),
                          boldText: t(detail.boldText),
                          ...(detail?.suffix && { suffix: t(detail.suffix) }),
                      }
            ),
        })
    );

    return (
        <SectionContainerY size="small">
            <ContainerX>
                <Accordion content={translatedAccordionItems} />
            </ContainerX>
        </SectionContainerY>
    );
};
