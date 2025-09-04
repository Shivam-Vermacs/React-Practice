import { TodoList } from "./Components/TodoList";
import { NavbarMiniDemo } from "./Components/NavBarmini-demo";

function App() {
  return (
    <div style={{ backgroundColor: "#dadbdbff", minHeight: "100vh" }}>
      <Card>
        <div>
          <h1>Card</h1>
          <textarea style={{ width: "400px" }} type="text" />
        </div>
      </Card>{" "}
      {/*passing the inside content as children*/}
    </div>
  );
}

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
