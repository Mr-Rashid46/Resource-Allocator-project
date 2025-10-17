import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NotesPage from "./Notespage";
import AssignmentsPage from "./Assignmentpage";
import PYQsPage from "./PYQpage";
import UsersPage from "./Userpage";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hoverCard, setHoverCard] = useState(null);
  const [cardAnimate, setCardAnimate] = useState(false);

  const [stats, setStats] = useState([
    { title: "Total Users", value: 0, bg: "#2563eb", icon: "👤" },
    { title: "Assignments", value: 0, bg: "#1e40af", icon: "📄" },
    { title: "Notes", value: 0, bg: "#3b82f6", icon: "📝" },
    { title: "PYQs", value: 0, bg: "#60a5fa", icon: "📄" },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const usersRes = await axios.get(
          "https://resource-allocator-project.onrender.com/api/admin/users/count",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const assignmentsRes = await axios.get(
          "https://resource-allocator-project.onrender.com/api/admin/assignments/count",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const notesRes = await axios.get(
          "https://resource-allocator-project.onrender.com/api/admin/notes/count",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const pyqsRes = await axios.get(
          "https://resource-allocator-project.onrender.com/api/admin/pyqs/count",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setStats([
          { title: "Total Users", value: usersRes.data.count, bg: "#2563eb", icon: "👤" },
          { title: "Assignments", value: assignmentsRes.data.count, bg: "#1e40af", icon: "📄" },
          { title: "Notes", value: notesRes.data.count, bg: "#3b82f6", icon: "📝" },
          { title: "PYQs", value: pyqsRes.data.count, bg: "#60a5fa", icon: "📄" },
        ]);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };
    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  useEffect(() => {
    setCardAnimate(true);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Users", icon: "👥" },
    { name: "Assignments", icon: "📄" },
    { name: "Notes", icon: "📝" },
    { name: "PYQs", icon: "📄" },
  ];

  const handleMenuClick = (menuName) => setActiveMenu(menuName);

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f3f6f9",
      overflowX: "hidden",
    },
    sidebar: {
      flexShrink: 0,
      width: sidebarOpen ? "240px" : "60px",
      background: "linear-gradient(to bottom, #1d4ed8, #2563eb)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "25px",
      boxShadow: "5px 0 20px rgba(0,0,0,0.2)",
      transition: "width 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    },
    sidebarToggleBtn: {
      position: "absolute",
      top: "20px",
      right: "-15px",
      background: "#fbbf24",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease-in-out",
    },
    sidebarTitle: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "35px",
      opacity: sidebarOpen ? 1 : 0,
      transition: "opacity 0.3s ease",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    menuItem: (isActive) => ({
      padding: "12px 15px",
      marginBottom: "12px",
      borderRadius: "12px",
      cursor: "pointer",
      backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
      transition: "all 0.3s ease",
      fontWeight: isActive ? "600" : "500",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      position: "relative",
      overflow: "hidden",
      transform: isActive ? "scale(1.05)" : "scale(1)",
    }),
    mainContent: {
      flex: 1,
      padding: "30px 40px",
      transition: "margin-left 0.5s ease-in-out",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      flexWrap: "wrap",
    },
    mainTitle: { fontSize: "28px", fontWeight: "700", color: "#333" },
    logoutBtn: {
      padding: "10px 18px",
      background: "#ef4444",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    cardContainer: {
      display: "flex",
      gap: "25px",
      marginBottom: "30px",
      flexWrap: "wrap",
    },
    statCard: (bgColor) => ({
      flex: "1 1 200px",
      background: bgColor,
      color: "#fff",
      padding: "25px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      opacity: 0,
      transform: "translateY(20px)",
      animation: cardAnimate
        ? "slideInUp 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards"
        : "none",
    }),
    statIcon: { fontSize: "30px", marginBottom: "10px" },
    statTitle: { fontSize: "18px", fontWeight: "600" },
    statValue: { fontSize: "22px", fontWeight: "700", marginTop: "5px" },
    placeholder: {
      background: "#fff",
      padding: "25px",
      borderRadius: "20px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
      minHeight: "350px",
      transition: "all 0.3s ease",
    },
  };

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes slideInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      /* ✅ Responsive Styling */
      @media (max-width: 992px) {
        body {
          overflow-x: hidden;
        }
        div[style*="display: flex"][style*="min-height: 100vh"] {
          flex-direction: column !important;
        }
        div[style*="width: 240px"] {
          width: 100% !important;
          flex-direction: row !important;
          justify-content: space-between !important;
          padding: 15px !important;
        }
        div[style*="padding: 30px 40px"] {
          padding: 20px !important;
        }
        div[style*="display: flex"][style*="gap: 25px"] {
          flex-direction: column !important;
          gap: 15px !important;
        }
        button[style*="width: 30px"] {
          top: 10px !important;
          right: 10px !important;
        }
        h1 {
          font-size: 22px !important;
        }
        button {
          font-size: 14px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <button
          style={{
            ...styles.sidebarToggleBtn,
            transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
          }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "◀️" : "▶️"}
        </button>
        <h2 style={styles.sidebarTitle}>Admin Panel</h2>
        <div style={{ marginTop: "20px" }}>
          {menuItems.map((menu) => (
            <div
              key={menu.name}
              style={styles.menuItem(activeMenu === menu.name)}
              onClick={() => handleMenuClick(menu.name)}
            >
              <span style={{ fontSize: "1.2rem" }}>{menu.icon}</span>
              {sidebarOpen && <span>{menu.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>{activeMenu}</h1>
          <button
            style={styles.logoutBtn}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.target.style.background = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.background = "#ef4444")}
          >
            Logout
          </button>
        </header>

        {/* Dashboard Stats */}
        {activeMenu === "Dashboard" && (
          <div style={styles.cardContainer}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.statCard(stat.bg),
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={() => setHoverCard(idx)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div style={styles.statIcon}>{stat.icon}</div>
                <h3 style={styles.statTitle}>{stat.title}</h3>
                <p style={styles.statValue}>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Render Pages */}
        <div style={styles.placeholder}>
          {activeMenu === "Users" && <UsersPage />}
          {activeMenu === "Assignments" && <AssignmentsPage />}
          {activeMenu === "Notes" && <NotesPage />}
          {activeMenu === "PYQs" && <PYQsPage />}
          {activeMenu === "Dashboard" && (
            <p>
              Welcome to your Admin Dashboard! Use the menu on the left to manage
              Users, Assignments, Notes, and PYQs.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
