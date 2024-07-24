import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const ArticlesAndVideosSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <ImiDescSection
            header={t("meetOurPractitioners.articlesAndVideos")}
            style="subsection"
        />
    );
};
