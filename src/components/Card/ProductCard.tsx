import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Product } from './product_type'; // Arayüzü içe aktarın

interface ProductCardProps {
  product: Product;
}
function ProductCard({product}: ProductCardProps)  {
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className='productCard'>
      <Card.Section>
        <Image
          src={product?.image}
          height={160}
          alt="Norway"
          style={{objectFit:"contain"}}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product?.name}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {product?.description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px",backgroundColor:"green"}}>
        <span>Whatsapp'tan sor!</span>
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="" style={{width:"25px",height:"25px",marginLeft:"40px"}}/>
      </Button>
    </Card>
  );
}

export default ProductCard