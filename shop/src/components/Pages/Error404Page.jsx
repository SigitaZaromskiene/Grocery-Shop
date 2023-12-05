import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error404Page() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <div className="no_page_container">
      <p className="no_page_container_heading">404</p>
      <p>Sorry, page not found</p>
    </div>
  );
}

export default Error404Page;
