import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section>
      <div className="container">
        <p>Welcome to our App!</p>

        <div>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
