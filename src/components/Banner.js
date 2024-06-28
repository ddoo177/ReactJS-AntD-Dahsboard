import { Button, Card, Flex, Typography } from "antd";

export function Banner() {
    return (
        <Card style={{ padding: 20 }}>
            <Flex vertical gap="30px">
                <Flex vertical align="flex-start">
                    <Typography.Title level={2} strong>
                        Welcome back, Ddoo
                    </Typography.Title>
                    <Typography.Text type="secondary" strong>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </Typography.Text>
                </Flex>
                <Flex gap="large">
                    <Button type="primary" size="large">
                        My profile
                    </Button>
                    <Button size="large">My Orders</Button>
                </Flex>
            </Flex>
        </Card>
    );
}
