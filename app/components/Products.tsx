import React from 'react';

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  featuredImage: string;
  images: string[];
};

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.featuredImage} alt={product.name} />

          <h3>Additional Images:</h3>
          <div>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
              />
            ))}
          </div>
          <p>Slug: {product.slug}</p>
        </div>
      ))}
    </div>
  );
}
