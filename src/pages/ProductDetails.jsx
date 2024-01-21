import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();

  return (
    <div>
      I am dynamic route - {title} <br />
      <Link to={"/products"}>go back </Link>
    </div>
  );
};

export default ProductDetails;
