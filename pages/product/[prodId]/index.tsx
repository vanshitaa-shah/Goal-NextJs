import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const prodId = router.query.prodId;

  return <h1>Details of Product {prodId}</h1>;
};

export default ProductDetails;
