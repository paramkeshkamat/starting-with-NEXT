import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <h1 style={{ color: "#000" }}>Logo</h1>
          </a>
        </Link>
        <div>
          <Link href="/">
            <a className="nav-links">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-links">About</a>
          </Link>
          <Link href="/users">
            <a className="nav-links">Users</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
