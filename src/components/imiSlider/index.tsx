import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import "./_slider.scss";

interface Props extends SliderProps {}

export const ImiSlider: React.FC<Props> = ({ ...props }: Props) => {
    return (
        <div className={`imi-slider-component`}>
            <Slider {...props}></Slider>
        </div>
    );
};
