/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Avatar, Button, Flex, List, Typography } from "antd";
import { useEffect, useState } from "react";

export function Activity() {
    function randomAvatar() {
        return (
            "https://avatar.iran.liara.run/public/" +
            Math.floor(Math.random() * 100 + 1)
        );
    }

    function randomOrderNumber() {
        return "Ordered " + Math.floor(Math.random() * 25 + 25 ) + " products"
    }

    function randomDay() {
        return Math.floor(Math.random() * 6 + 1) + " days ago"
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            setUsers(data.users.slice(0,5));
        };
        fetchData();
    }, []);

    return (
        <Flex vertical gap="small">
            <Flex align="center" justify="space-between" gap="large">
                <Typography.Title level={3} strong>
                    Recent Activity
                </Typography.Title>
                <Button type="link">View All</Button>
            </Flex>
            <List
                pagination
                dataSource={users}
                renderItem={(users, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={randomAvatar()} />}
                            title={<a href="#">{users.firstName}</a>}
                            description={randomOrderNumber()}
                        ></List.Item.Meta>
                        <span>
                            {randomDay()}
                        </span>
                    </List.Item>
                )}
            />
        </Flex>
    );
}
