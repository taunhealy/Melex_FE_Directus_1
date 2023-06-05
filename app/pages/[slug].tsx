import React from 'react';
import { useRouter } from 'next/router';
import { getDirectusClient } from 'directus';
import Image from 'next/image';

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  featuredImage: string;
  images: string[];
};

type ProductPageProps = {
  product: Product;
};

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();

  // Render a loading state if the product data is being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Image
        src={product.featuredImage}
        alt={product.name}
        width={500}
        height={300}
      />

      <h2>Additional Images:</h2>
      <div>
        {product.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${product.name} - Image ${index + 1}`}
            width={500}
            height={300}
          />
        ))}
      </div>
      <p>Slug: {product.slug}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const directus = await getDirectusClient();
  const { slug } = params;  

  // Fetch the specific product data based on the slug from your Directus backend
  const response = await directus.items('products').read({
    filter: { slug: { _eq: slug } },
    limit: 1,
  });

  const product = response.data[0];

  return {
    props: {
      product,
    },
  };
}
