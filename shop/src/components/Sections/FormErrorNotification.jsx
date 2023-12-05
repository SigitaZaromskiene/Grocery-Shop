import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactUsActions } from "../store/slices/contactusSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function FormErrorNotification({ title, text, className }) {
  const dispatch = useDispatch();

  const errorMessageStatus = useSelector(
    (state) => state.contactUs.formNotification?.status
  );

  useEffect(() => {
    setTimeout(() => {
      if (errorMessageStatus === "error") {
        dispatch(
          contactUsActions.formNotificationToggle({
            title: "",
            message: "",
            status: "",
          })
        );
      }
    }, [2000]);
  }, [dispatch, errorMessageStatus]);

  return (
    <div className={`error_notification_container  + ${className}`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default FormErrorNotification;
