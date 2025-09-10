import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/about">AboutUs</Link>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const LandingHome = () => {
  return (
    <>
      <h1>WELCOME TO HOME PAGE</h1>
    </>
  );
};
const Contact = () => {
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }
  return (
    <>
      <h1>CONTACT PAGE</h1>
      <button onClick={redirect}>Back To Home</button>
    </>
  );
};
const AboutUs = () => {
  return (
    <>
      <h1>ABOUT US PAGE</h1>
    </>
  );
};

function Card({ children }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        margin: "20px",
        border: "1.5px solid #e6e6e7ff",
        color: "black",
        backgroundColor: "#ffffffff",
        borderRadius: "5px",
        padding: "20px",
        width: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default App;
