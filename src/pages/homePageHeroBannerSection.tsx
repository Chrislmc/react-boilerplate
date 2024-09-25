import { Icons } from "@/assets/icons";
import { SearchIconComponent } from "@/assets/icons/shared/search.component";
import { Images } from "@/assets/images";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { ContainerX } from "@/components/layout/containerX";
import "./_home-page.scss";
import { contactMethods } from "./homePageConstant";

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
            <div className="hero-banner-container">
                <div className="desc-container">
                    <h1 className="header">
                        I'M <p className="header-highlight">Chris Lai</p>
                    </h1>

                    <h2 className="header-desc">Fullstack Developer</h2>

                    <Button text={"Contact Me"} />
                </div>

                <div className="image-container">
                    <img src={Images.Portrait1} />
                </div>

                <div className="contacts-container">
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <a href={method.redirectUrl} target="_blank">
                                <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </ContainerX>
    );
};
