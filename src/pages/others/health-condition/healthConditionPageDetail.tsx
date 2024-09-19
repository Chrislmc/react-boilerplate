import { Accordion } from "@/components/accordion";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { healthConditionDetailsAccordionItems } from "./healthConditionPageConstant";

export const HealthConditionPageDetail = () => {
    const t = i18nHelper("others");

    const translatedAccordionItems = healthConditionDetailsAccordionItems.map(
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
        <div className="detail-accordion-container">
            <ContainerX rightOnly>
                <Accordion content={translatedAccordionItems} />
            </ContainerX>
        </div>
    );
};
