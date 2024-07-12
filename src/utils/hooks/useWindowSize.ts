import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const mapSizeToBreakpoint = {
    mobile: 480,
    tablet: 768,
    smallScreen: 1350,
    desktop: 1600,
};

export const useWindowSize = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= mapSizeToBreakpoint.mobile);
            setIsTablet(
                window.innerWidth > mapSizeToBreakpoint.mobile &&
                    window.innerWidth <= mapSizeToBreakpoint.tablet,
            );
            setIsSmallScreen(
                window.innerWidth > mapSizeToBreakpoint.tablet &&
                    window.innerWidth <= mapSizeToBreakpoint.smallScreen,
            );
        };
        handleResize();

        const debouncedHandleResize = debounce(handleResize, 150);
        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);

    return { height, width, isMobile, isTablet, isSmallScreen };
};

export default useWindowSize;
