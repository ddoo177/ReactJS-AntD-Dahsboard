import { Button, Card, Flex, Image, Typography } from "antd";
import { useEffect, useState } from "react";

const { Meta } = Card;

export function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products.slice(0, 4));
        };
        fetchData();
    }, []);

    return (
        <>
            <Flex align="center" justify="space-between">
                <Typography.Title level={3} strong>
                    Product List
                </Typography.Title>
                <Button type="link">View All</Button>
            </Flex>

            <Flex align="center" gap="large">
                {products.map((product) => (
                    <Card key={product.id} hoverable className="plant-card">
                        <Image
                            src={product.images[0]}
                            style={{ width: "200px", height: "200px" }}
                        />
                        <Meta
                            title={product.title}
                            style={{ marginTop: "1rem" }}
                        />
                    </Card>
                ))}
            </Flex>
        </>
    );
}
