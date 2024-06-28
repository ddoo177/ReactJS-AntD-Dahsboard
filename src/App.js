/* eslint-disable no-unused-vars */
import { Button, Flex, Layout, Switch } from "antd";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import { MyHeader } from "./components/MyHeader";
import { Dashboard } from "./components/Dashboard";

const { Sider, Header, Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider
                theme="light"
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="sider"
            >
                <Sidebar />

                <Button
                    type="text"
                    icon={
                        collapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    className="trigger-btn"
                />
            </Sider>
            <Layout>
                <Header className="header">
                    <MyHeader />
                </Header>
                <Content className="content">
                    <Dashboard/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
