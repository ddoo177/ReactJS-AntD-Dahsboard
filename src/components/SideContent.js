import { Flex } from "antd";
import { SideContentBanner } from "./SideContentBanner";
import { Activity } from "./Activity";

export function SideContent() {
    return (
        <Flex vertical gap="2.3rem" style={{ width: 400 }}>
            <SideContentBanner />
            <Activity />
        </Flex>
    );
}
