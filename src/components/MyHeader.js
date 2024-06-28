import { Avatar, Flex } from "antd";
import {
    MessageOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import React from "react";

export function MyHeader() {
    return (
        <Flex align="center" justify="end">
            <Flex align="center" gap="3rem">
                <Search placeholder="Search" />
                <Flex align="center" gap="10px">
                    <MessageOutlined className="header-icon"/>
                    <NotificationOutlined className="header-icon"/>
                    <Avatar icon={<UserOutlined />} />
                </Flex>
            </Flex>
        </Flex>
    );
}
