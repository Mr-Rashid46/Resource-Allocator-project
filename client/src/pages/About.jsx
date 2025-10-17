import React from "react";

const About = () => {
  return (
    <>
      {/* Inline CSS for responsiveness */}
      <style>{`
        /* Responsive Styles for About Page */

        @media (max-width: 992px) {
          .container-fluid {
            padding: 0 1rem;
          }
          .card {
            text-align: center;
          }
          .card h3 {
            font-size: 1.4rem;
          }
          .card p,
          .card ul li {
            font-size: 1rem;
          }
          .display-5 {
            font-size: 2rem !important;
          }
          img[alt="Dbatu Scholar Hub Logo"] {
            width: 140px !important;
          }
        }

        @media (max-width: 768px) {
          .row.g-4 .col-md-4 {
            width: 100%;
          }
          .fw-bold.display-5 {
            font-size: 1.8rem !important;
          }
          .fs-5 {
            font-size: 1rem !important;
          }
          .text-center.mb-5 p {
            font-size: 0.95rem !important;
          }
          .card-body {
            padding: 1rem;
          }
        }

        @media (max-width: 576px) {
          .fw-bold.display-5 {
            font-size: 1.5rem !important;
          }
          .fs-5 {
            font-size: 0.9rem !important;
          }
          img[alt="Dbatu Scholar Hub Logo"] {
            width: 120px !important;
          }
          h3.text-warning.mb-3 {
            font-size: 1.2rem !important;
          }
          .card {
            padding: 1rem !important;
          }
          ul.fs-5 li {
            margin-bottom: 6px;
          }
          .text-center.mt-5 h2 {
            font-size: 1.4rem !important;
          }
          .text-center.mt-5 p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      {/* Page Content */}
      <div className="container-fluid" style={{ background: "#1f2937" }}>
        <div className="container py-5 text-light">
          <div className="text-center mb-4">
            <img
              src="/images/Head_logo.png"
              alt="Dbatu Scholar Hub Logo"
              style={{
                width: "180px",
                height: "auto",
                borderRadius: "100px",
                filter: "drop-shadow(0px 0px 10px #facc15)",
              }}
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 text-warning">🌟 About Us</h1>
            <p className="text-secondary fs-5">
              Learn more about Dbatu Scholar Hub, our mission, vision, and the
              team behind this platform.
            </p>
          </div>

          {/* Who We Are */}
          <div
            className="card shadow-lg p-4 mb-5 border-0"
            style={{ background: "#0d1117", borderRadius: "15px" }}
          >
            <h3 className="text-warning mb-3">Who We Are</h3>
            <p className="fs-5 text-light">
              A student-led project called <strong>Dbatu Scholar Hub</strong>{" "}
              was established to make academic resources easier for{" "}
              <strong>
                Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere
              </strong>
              . Our platform consolidates previous year question papers (PYQs),
              assignments, and study materials into a single, conveniently
              located location.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div
                className="card shadow-lg p-4 border-0 h-100"
                style={{ background: "#0d1117", borderRadius: "15px" }}
              >
                <h3 className="text-warning mb-3">🎯 Our Mission</h3>
                <p className="fs-5 text-light">
                  To empower students with easy access to high-quality academic
                  resources, enabling them to excel in their studies and build a
                  strong foundation for their careers.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card shadow-lg p-4 border-0 h-100"
                style={{ background: "#0d1117", borderRadius: "15px" }}
              >
                <h3 className="text-warning mb-3">🚀 Our Vision</h3>
                <p className="fs-5 text-light">
                  To become the go-to academic portal for every DBATU student
                  and eventually expand to serve students across other
                  universities.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer */}
          <div
            className="card shadow-lg p-4 mb-5 border-0"
            style={{ background: "#0d1117", borderRadius: "15px" }}
          >
            <h3 className="text-warning mb-3">📚 What We Offer</h3>
            <ul className="fs-5">
              <li>✅ Well-structured lecture notes and study material.</li>
              <li>✅ Previous Year Question Papers (PYQs) with solutions.</li>
              <li>✅ Assignment repository for all semesters.</li>
              <li>✅ Contact and feedback system for better communication.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div
            className="card shadow-lg p-4 mb-5 border-0"
            style={{ background: "#0d1117", borderRadius: "15px" }}
          >
            <h3 className="text-warning mb-3">🤝 Why Choose Us?</h3>
            <p className="fs-5 text-light">
              Unlike scattered resources on WhatsApp groups, Telegram, or random
              Google Drives, Dbatu Scholar Hub provides a structured, reliable,
              and user-friendly platform dedicated to DBATU students.
            </p>
          </div>

          {/* Meet the Team */}
          <div className="mb-5">
            <h3 className="text-warning mb-4">👨‍💻 Meet the Team</h3>
            <div className="row g-4">
              {/* Abdullah */}
              <div className="col-md-4">
                <div
                  className="card shadow-lg border-0 h-100 text-center"
                  style={{ background: "#0d1117", borderRadius: "15px" }}
                >
                  <div className="card-body">
                    <h4 className="text-warning">Abdullah Asif Ali Hajwane</h4>
                    <p className="text-light mb-2">Topper Since 1st year</p>
                    <p className="text-secondary small">
                      Having good knowledge of each subject, also good in
                      Mathematics. Abdullah Asif-Ali Hajwane is the 1st ranker
                      with a pointer of{" "}
                      <strong className="text-danger">9+</strong>. All notes are
                      provided by himself.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aryan */}
              <div className="col-md-4">
                <div
                  className="card shadow-lg border-0 h-100 text-center"
                  style={{ background: "#0d1117", borderRadius: "15px" }}
                >
                  <div className="card-body">
                    <h4 className="text-warning">Aryan Mandhare</h4>
                    <p className="text-light mb-2">Full Stack Developer</p>
                    <p className="text-secondary small">
                      Passionate about building real-world projects. Handles the
                      frontend design and backend integration of Dbatu Scholar
                      Hub. Student of Computer Engineering. Languages known:{" "}
                      <strong className="text-warning">
                        C, Python, Java, JavaScript, PHP
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Rashid */}
              <div className="col-md-4">
                <div
                  className="card shadow-lg border-0 h-100 text-center"
                  style={{ background: "#0d1117", borderRadius: "15px" }}
                >
                  <div className="card-body">
                    <h4 className="text-warning">Rashid Khopatkar</h4>
                    <p className="text-light mb-2">Full Stack Developer</p>
                    <p className="text-secondary small">
                      Specializes in frontend development and database
                      management. Admin of Dbatu Scholar Hub. Ensures data
                      security. Languages known:{" "}
                      <strong className="text-warning">
                        C++, C, Python, JavaScript, PHP
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div
            className="card shadow-lg p-4 mb-5 border-0"
            style={{ background: "#0d1117", borderRadius: "15px" }}
          >
            <h3 className="text-warning mb-3">🌐 Future Goals</h3>
            <p className="fs-5 text-light">
              In the future, we plan to introduce:
            </p>
            <ul className="fs-5">
              <li>💡 AI-powered doubt solving & chatbots.</li>
              <li>💡 Online coding practice platform.</li>
            </ul>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-5">
            <h2 className="fw-bold text-warning">
              “Together, we learn. Together, we grow.”
            </h2>
            <p className="fs-5 text-secondary mt-3">
              Dbatu Scholar Hub is more than just a platform — it’s a community
              for learners, built by learners.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
