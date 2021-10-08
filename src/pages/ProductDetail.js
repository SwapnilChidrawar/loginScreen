import { useParams, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const params1 = useLocation();
  console.log(params1.search);
  const params = useParams();
  console.log(params);
  return (
    <section>
      <h1> Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
