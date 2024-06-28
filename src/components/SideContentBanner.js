import { Card, Flex, Image, Typography } from "antd";
import src from "../imagecard.webp";

export function SideContentBanner() {
    return (
        <div>
            <Card className="card">
                <Flex vertical>
                    <Typography.Title
                        level={4}
                        strong
                        style={{ color: "#fff" }}
                    >
                        Today <br /> 27 orders
                    </Typography.Title>
                    <Typography.Title
                        level={4}
                        strong
                        style={{ color: "#fff" }}
                    >
                        This month <br /> 217 orders
                    </Typography.Title>
                </Flex>
                <Image
                    src={src}
                    style={{
                        position: "absolute",
                        transform: "scaleX(-1)",
                        bottom: -30,
                        left: 160,
                        height: 250,
                        width: "auto",
                    }}
                ></Image>
            </Card>
        </div>
    );
}
