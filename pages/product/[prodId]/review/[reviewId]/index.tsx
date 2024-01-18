import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { prodId, reviewId } = router.query;
  return (
    <h1>
      Review {reviewId} of product {prodId}
    </h1>
  );
};

export default ProductDetails;
