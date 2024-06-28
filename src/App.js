/* eslint-disable no-unused-vars */
import { Button, Layout } from "antd";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import { MyHeader } from "./components/MyHeader";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Dashboard from "./components/UI/Dashboard";
import Login from "./components/UI/Login";
import Order from "./components/UI/Order";
import Profile from "./components/UI/Profile";
import Setting from "./components/UI/Setting";
import Todo from "./components/UI/Todo";

const { Sider, Header, Content } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <BrowserRouter>
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
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/order" element={<Order />} />
                            <Route path="/todo" element={<Todo />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/setting" element={<Setting />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
