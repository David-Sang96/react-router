import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-3xl text-purple-600 text-center">
      404 Not Found WTF <br />
      <button
        className="border-2 border-purple-500"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
