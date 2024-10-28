export const throttle = (callback: () => void, limit: number) => {
    let timeout: number | null = null; // Initially, we're not waiting
    return function () {
        // We return a throttled function
        if (!timeout) {
            // If we're not waiting
            callback(); // Execute users function
            timeout = setTimeout(function () {
                // After a period of time
                timeout = null; // And allow future invocations
            }, limit);
        }
    };
};
