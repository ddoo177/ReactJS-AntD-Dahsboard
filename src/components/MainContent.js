import { Flex } from "antd";
import { Banner } from "./Banner";
import { ProductList } from "./ProductList";
import { UserList } from "./UserList";

export function MainContent() {
    return (
        <div style={{ flex: 1 }}>
            <Flex vertical gap="1rem">
                <Banner />
                <ProductList />
                <UserList />
            </Flex>
        </div>
    );
}
