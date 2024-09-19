import { DescSection } from "@/components/descSection";
import { Section } from "@/components/section";
import "./_components-page.scss";

export const ComponentsPage = () => {
    return (
        <div id="components-page">
            <Section className="components-page-desc-section">
                <DescSection
                    header="Components showcase page"
                    desc={["Try out all the components!"]}
                    customBottomComponent={
                        <div className="custom-bottom-component">
                            <div className="scroll-section"></div>
                            <div className="content-section"></div>
                        </div>
                    }
                />
            </Section>
        </div>
    );
};
