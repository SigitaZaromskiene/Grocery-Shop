import "./UI/App.scss";
import Nav from "./components/Sections/Nav";
import PageRoutes from "./components/PageRoutes";
import Notification from "./components/Sections/Notification";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "./components/Sections/Cart";
import { onPageLoad } from "./components/store/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const showNotification = useSelector((state) => state.ui.notification);
  const showCart = useSelector((state) => state.ui.isCartVisible);

  const cartData = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onPageLoad());
  }, []);

  return (
    <div className="app_container">
      {showCart && <Cart />}

      <Nav />
      {showNotification && (
        <Notification
          title={showNotification.title}
          text={showNotification.message}
          className={showNotification.status}
        />
      )}
      <PageRoutes />
    </div>
  );
}

export default App;
