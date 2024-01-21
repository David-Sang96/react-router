import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nesciunt",
  },
  {
    id: 2,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nesciunt",
  },
  {
    id: 3,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nesciunt",
  },
];

const Product = () => {
  return (
    <div>
      <div>Products Page</div>
      <div className="space-y-3">
        {PRODUCTS.map((item) => (
          <div className="border shadow-lg p-3" key={item.id}>
            <Link to={`/product/${item.title}`}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
