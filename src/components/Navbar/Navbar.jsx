import "./Navbar.css";
export default function Navbar() {
    return(
        <nav className="navbar">
          <div className="logo">
            NGO
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>News</li>
            <li>Work With Us</li>
          </ul>
          <div className="donation">
            <button className="don-btn">Donate</button>
          </div>
        </nav>
    )
}