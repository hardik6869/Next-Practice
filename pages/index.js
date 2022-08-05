export default function Home(props) {
  const { products } = props;
  console.log(products);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}> {product.title} </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
};
