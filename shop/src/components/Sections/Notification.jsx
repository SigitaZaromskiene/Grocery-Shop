import { useEffect } from "react";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";

function Notification({ title, text, className }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.toggleNotificationVisibility());
    }, [2000]);
  }, [dispatch]);

  return (
    <div className={`notification_container + ${className}`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Notification;
