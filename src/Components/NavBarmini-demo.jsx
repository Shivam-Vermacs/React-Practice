import { useState } from "react";

export function NavbarMiniDemo() {
  const [currentTab, setCurrentTab] = useState("Home");
  const tabs = ["Home", "Explore", "Search"];
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          style={{
            cursor: "pointer",
            padding: "5px",
            backgroundColor: currentTab === tab ? "#007BFF" : "transparent",
            color: currentTab === tab ? "white" : "black",
            fontWeight: currentTab === tab ? "bold" : "normal",
          }}
        >
          {" "}
          {tab}
        </button>
      ))}
    </div>
  );
}
