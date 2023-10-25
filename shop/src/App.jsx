import "./UI/App.scss";
import Nav from "./components/Sections/Nav";
import PageRoutes from "./components/PageRoutes";
import Notification from "./components/Sections/Notification";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "./components/Sections/Cart";


function App() {

  
  
  const showNotification = useSelector((state) => state.ui.notification);
  const showCart = useSelector(state=>state.ui.isCartVisible)

  return (
    <div className="app_container">
      {showCart && <Cart/>}
      {showNotification && (
        <Notification
          title={showNotification.title}
          text={showNotification.message}
          className={showNotification.status}
        />
      )}
      <Nav />
      <PageRoutes />
    </div>
  );
}

export default App;
