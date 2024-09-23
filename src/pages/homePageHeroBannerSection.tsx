import { Icons } from "@/assets/icons";
import { SearchIconComponent } from "@/assets/icons/shared/search.component";
import { Input } from "@/components/atoms/input";
import { ContainerX } from "@/components/layout/containerX";
import "./_home-page.scss";

export const HomePageHeroBannerSection = () => {
    return (
        <ContainerX>
            <div className="header-row">
                <div className="icon-container">
                    <img src={Icons.IconNoBackground} />
                </div>

                <div className="header-btn-row">
                    <button key="about" className="header-btn">
                        About
                    </button>
                    <button key="portfolio" className="header-btn">
                        Portfolio
                    </button>
                    <button key="context" className="header-btn">
                        Context
                    </button>
                </div>

                <div className="search-input-container">
                    <Input
                        placeholder={"Search"}
                        prefixIcon={<SearchIconComponent />}
                    />
                </div>
            </div>
            <div className="hero-banner-container"></div>
        </ContainerX>
    );
};
