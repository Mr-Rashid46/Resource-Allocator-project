import { NavLink, useNavigate, useLocation } from "react-router-dom";
import head from "../image/Head_logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const hideNavbarRoutes = ["/login", "/register"];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
      style={{
        backgroundColor: "black",
        transition: "all 0.3s ease",
        padding: "0.5rem 1rem",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Brand */}
        <NavLink
          className="navbar-brand d-flex align-items-center fw-bold text-light"
          to="/"
          style={{ fontSize: "1.1rem" }}
        >
          <img
            src={head}
            alt="Dbatu Scholar Hub Logo"
            className="me-2"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ color: "#38bdf8", whiteSpace: "nowrap" }}>
            Dbatu Scholar Hub
          </span>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-light border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-lg-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Notes"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Study Material
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About-us"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-warning border-bottom border-2 border-warning px-3"
                        : "nav-link text-light px-3"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Logout button */}
          {token && (
            <div className="text-center mt-3 mt-lg-0">
              <button
                onClick={handleLogout}
                className="btn btn-danger fw-semibold px-4"
                style={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#dc2626")}
                onMouseLeave={(e) => (e.target.style.background = "#ef4444")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Responsive custom CSS */}
      <style>
        {`
        @media (max-width: 992px) {
          .navbar-brand span {
            font-size: 0.95rem;
          }
          .navbar-nav .nav-link {
            padding: 10px 0;
          }
          .navbar-nav {
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }
        }

        @media (max-width: 576px) {
          .navbar-brand img {
            width: 35px;
            height: 35px;
          }
          .navbar-brand span {
            font-size: 0.9rem;
          }
          .btn {
            padding: 8px 18px;
            font-size: 0.9rem;
          }
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;
