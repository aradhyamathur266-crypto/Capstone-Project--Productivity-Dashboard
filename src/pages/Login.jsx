import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-sub">Stay focused. Stay productive.</p>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;