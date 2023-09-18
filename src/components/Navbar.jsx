import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link hrefLang="/" className="toolbar">
        #➊ 🅢🅣🅞🅟 & 🅢🅗🅞🅟
      </Link>
      <ul>
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>

        <li>
          <a href="/Signup">SignUp</a>
        </li>
      </ul>
    </nav>
  );
}
