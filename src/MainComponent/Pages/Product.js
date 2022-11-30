function Products(props) {
  const [products, setProduct] = useState([
    { id: 1, title: "p1" },
    {
      id: 2,
      title: "p2",
    },
  ]);
  return (
    <>
     {
    //      <h1>
    //     {products.map((prod) => {
    //       return <>{prod.title}</>;
    //     })}
    //   </h1>
    }
    </>
  );
}
export default Products;
