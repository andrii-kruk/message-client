import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/authOperations.js";

const MainPage = () => {
  const dispatch = useDispatch();

  const user = { email: "drop3r17@gmail.com", password: "123456789" };
  return (
    <section>
      <p>Content on main page.</p>
      <button onClick={() => dispatch(signIn(user))}>Click to login!</button>
    </section>
  );
};

export default MainPage;
