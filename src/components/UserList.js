import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

export function UserList() {
    return (
        <Flex align="center" justify="space-between" gap="large">
            <Flex vertical="row" gap="small" className="top-user">
                <Flex align="center" justify="space-between">
                    <Typography.Title level={5} strong>
                        Top user
                    </Typography.Title>
                    <Button type="link">View All</Button>
                </Flex>
                <Card>
                    <Flex align="center" justify="space-evenly">
                        <Avatar.Group max={{count: 4}} size="large">
                            <Tooltip title="User 1" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl" />
                            </Tooltip>
                            <Tooltip title="User 2" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl?1" />
                            </Tooltip>
                            <Tooltip title="User 3" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl?2" />
                            </Tooltip>
                            <Tooltip title="User 4" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl?3" />
                            </Tooltip>
                            <Tooltip title="User 5" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl?4" />
                            </Tooltip>
                            <Tooltip title="User 6" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/girl?5" />
                            </Tooltip>
                        </Avatar.Group>
                        <Divider type="vertical" className="divider" />
                        <Flex vertical>
                            <Typography.Text type="secondary" strong>
                                1,369 products sold
                            </Typography.Text>
                            <Typography.Text type="secondary" strong>
                                400 orders
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>

            <Flex vertical="row" gap="small" className="featured-user">
                <Flex align="center" justify="space-between">
                    <Typography.Title level={5} strong>
                        Featured user
                    </Typography.Title>
                    <Button type="link">View All</Button>
                </Flex>
                <Card>
                    <Flex align="center" justify="space-evenly">
                        <Avatar.Group max={{count: 4}} size="large">
                            <Tooltip title="User 1" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy" />
                            </Tooltip>
                            <Tooltip title="User 2" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy?2" />
                            </Tooltip>
                            <Tooltip title="User 3" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy?3" />
                            </Tooltip>
                            <Tooltip title="User 4" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy?4" />
                            </Tooltip>
                            <Tooltip title="User 5" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy?5" />
                            </Tooltip>
                            <Tooltip title="User 6" placement="top">
                                <Avatar src="https://avatar.iran.liara.run/public/boy?6" />
                            </Tooltip>
                        </Avatar.Group>
                        <Divider type="vertical" className="divider" />
                        <Flex vertical>
                            <Typography.Text type="secondary" strong>
                                1,369 products sold
                            </Typography.Text>
                            <Typography.Text type="secondary" strong>
                                400 orders
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Flex>
    );
}
