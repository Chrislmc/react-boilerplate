import RcSlider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import "./_slider.scss";

interface Props extends SliderProps {}

export const Slider: React.FC<Props> = ({ ...props }: Props) => {
    return (
        <div className={`imi-slider-component`}>
            <RcSlider {...props}></RcSlider>
        </div>
    );
};
