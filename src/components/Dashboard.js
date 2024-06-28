import { Flex } from "antd";
import { MainContent } from "./MainContent";
import { SideContent } from "./SideContent";

export function Dashboard() {
    return (
        <Flex gap="large">
            <MainContent />
            <SideContent />
        </Flex>
    );
}
