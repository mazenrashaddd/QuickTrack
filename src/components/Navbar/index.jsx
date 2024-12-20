import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg cBgColor">
      <div className="container">
        <a className="navbar-brand cLogoTitle" href="#">
          QuickTrack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 px-3 cMenuItemText">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button formAction={"#cta"} className="btn cBtn" type="submit">
              GET THE APP
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
