// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { contactUsActions } from "../store/slices/contactusSlice";
// import signInSlice, { signInActions } from "../store/slices/signInSlice";

// function FormErrorNotification({ title, text, className }) {
//   const dispatch = useDispatch();
  

//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(contactUsActions.toggleErrorNotificationVisibility(),
      
//     );
//     }, [2000]);
//   }, [dispatch]);


 
  
//   return (
//     <div className={`error_notification_container  + ${className}`}>
//       <h4>{title}</h4>
//       <p>{text}</p>
//     </div>
//   );
// }

// export default FormErrorNotification;