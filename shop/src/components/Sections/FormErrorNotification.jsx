import { useEffect } from "react";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";

function FormErrorNotification({ title, text, className }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.toggleRegisterFormVisibility(),
    );
    }, [2000]);
  }, [dispatch]);

 
  
  return (
    <div className={`error_notification_container + ${className}`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default FormErrorNotification;