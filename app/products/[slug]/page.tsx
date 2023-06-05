import { getDirectusClient } from 'directus';

export default function Products({ products }) {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h1>Product: {product.name}</h1>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    );
  }
  

export async function getStaticProps() {
    const directus = await getDirectusClient();
    const response = await directus.items("products")
    const formattedProducts = response.data.map((product) => {
      return {
        ...product,
      };
    });
  
    return {
      props: {
        products,
      },
    };
  }