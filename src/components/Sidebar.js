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
import { Link } from "react-router-dom";

const items = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: "Dashboard",
        link: "/",
    },
    {
        key: "2",
        icon: <CarryOutOutlined />,
        label: "My Orders",
        link: "/order",
    },
    {
        key: "3",
        icon: <OrderedListOutlined />,
        label: "Todo",
        link: "/todo",
    },
    {
        key: "4",
        icon: <ProfileOutlined />,
        label: "Profile",
        link: "/profile",
    },
    {
        key: "5",
        icon: <SettingOutlined />,
        label: "Settings",
        link: "/setting",
    },
    {
        key: "6",
        icon: <LogoutOutlined />,
        label: "Log out",
        link: "/login",
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
                items={items}
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
}
