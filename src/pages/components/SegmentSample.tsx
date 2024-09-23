import { Segment } from "@/components/molecules/segment";
import { useState } from "react";

export const SegmentSample = () => {
    const [segmentState, setSegmentState] = useState("segment1");

    return (
        <Segment
            options={[
                { text: "Segment 1", key: "segment1" },
                { text: "Segment 2", key: "segment2" },
                { text: "Segment 3", key: "segment3" },
            ]}
            selectedKey={segmentState}
            setSelectedKey={(e) => setSegmentState(e)}
        />
    );
};
