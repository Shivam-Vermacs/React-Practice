import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const ErrorPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </>
  );
};
const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link>|<Link to="/contact">Contact</Link>|
      <Link to="/about">AboutUs</Link>
      <Outlet />
      <br />
      <strong>Footer</strong>
    </>
  );
};

const LandingHome = () => {
  return (
    <>
      <h1>Why can't orphans play baseball? They never find ‘HOME'</h1>
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
      <h1>About us: sleep is good, but eternal rest? Even better</h1>
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
