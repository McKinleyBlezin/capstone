import { Link } from "react-router-dom";

export default function Toolbar() {
  return (
    <nav className="Toolbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
