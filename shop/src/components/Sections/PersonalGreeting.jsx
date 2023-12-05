import { useSelector } from "react-redux";

function PersonalGreeting() {
  const loggedPersonName = useSelector((state) => state.signIn.name);

  return (
    <div className="personal_greeting_container">
      <p>Hello, {loggedPersonName}</p>
    </div>
  );
}

export default PersonalGreeting;
