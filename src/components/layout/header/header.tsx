import { Images } from "@/assets/images";
import { ContainerX } from "../containerX";
import "./_header.scss";

export const Header = () => {
    return (
        <div className="site-header">
            <div className="site-header-content-container">
                <ContainerX>
                    <div className="site-header-container">
                        <div className="site-header-logo-container">
                            <img src={Images.ImageImiLogo} />
                        </div>
                        <div className="site-header-content-container"></div>
                    </div>
                </ContainerX>
            </div>
            <div className="site-header-link-ribbon">
                <ContainerX>\</ContainerX>
            </div>
        </div>
    );
};
