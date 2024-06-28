/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import { Flex, Menu } from "antd";
import { SiAlby } from "react-icons/si";
import {
    UserOutlined,
    ProfileOutlined,
    LogoutOutlined,
    OrderedListOutlined,
    CarryOutOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const items = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: "Dashboard",
        key: "/",
    },
    {
        key: "2",
        icon: <CarryOutOutlined />,
        label: "My Orders",
        key: "/order",
    },
    {
        key: "3",
        icon: <OrderedListOutlined />,
        label: "Todo",
        key: "/Todo",
    },
    {
        key: "4",
        icon: <ProfileOutlined />,
        label: "Profile",
        key: "/profile",
    },
    {
        key: "5",
        icon: <SettingOutlined />,
        label: "Settings",
        key: "/setting",
    },
    {
        key: "6",
        icon: <LogoutOutlined />,
        label: "Log out",
        key: "/login",
    },
];

export function Sidebar() {
    return (
        <>
            <Flex align="center" justify="center">
                <div className="logo">
                    <SiAlby />
                </div>
            </Flex>
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                className="menu-bar"
                selectable="false"
                items={items}
            />
        </>
    );
}
