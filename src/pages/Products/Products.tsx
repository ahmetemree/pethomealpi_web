import React, { useState, useEffect } from 'react';
import ProductCard from "@/components/Card/ProductCard";
import { Grid,Loader } from "@mantine/core";
import "./products.scss"

const products = [
    {
        name: "Kedievi",
        title: "Kedievi tırmalama",
        image: "https://productimages.hepsiburada.net/s/66/375-375/110000008033466.jpg",
        description:"Güzel kedi evi tırmalama kedileriniz için birebir",
    },
    {
        name: "Kedievi",
        title: "Kedievi tırmalama",
        image: "https://productimages.hepsiburada.net/s/66/375-375/110000008033462.jpg",
        description:"Güzel kedi evi tırmalama kedileriniz için birebir",

    },
    {
        name: "Kedievi",
        title: "Kedievi tırmalama",
        image: "https://cdn-m.arabunu.com/resize/250/250/85/products/2004169.jpg",
        description:"Güzel kedi evi tırmalama kedileriniz için birebir",

    },
];

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='productPage'>
            {isLoading ? (
                <Loader className='loader'/>
            ) : (
                <Grid>
                    {products.map((product, index) => (
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index}>
                            <ProductCard product={product} />
                        </Grid.Col>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Products;
