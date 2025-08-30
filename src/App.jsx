import React, { useState } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

// const style = {
//   width: 250,
//   backgroundColor: "white",
//   borderRadius: "8px",
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 16,
// };

// function PostComponent({ title, image, subtitle, description, timeago }) {
//   return (
//     <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img
//           src={image}
//           alt="Profile Picture"
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: 50,
//           }}
//         />

//         <div
//           style={{ fontSize: 12, color: "gray", marginLeft: 8, padding: 10 }}
//         >
//           <b style={{ color: "black" }}>{title}</b>
//           <div>{subtitle}</div>
//           {timeago !== undefined && <div>{timeago}</div>}
//         </div>
//       </div>

//       <div
//         style={{
//           fontSize: 17,
//           fontWeight: "normal",
//           marginLeft: 8,
//           padding: 10,
//         }}
//       >
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default App;

//  <div
//    style={{
//      display: "flex",
//      justifyContent: "center",
//      padding: "20px",
//      borderRadius: "8px",
//    }}
//  >
//    <div>
//      <div style={{ marginBottom: 20 }}>
//        {" "}
//        <PostComponent
//          title={"How to become a big dawg developer?"}
//          image={"https://images.unsplash.com/photo-1518717758536-85ae29035b6d"}
//          subtitle={"23,000 Followers"}
//          description={
//            "Want to Know how to become a big dawg developer? Join Dog Joe Devs and win bounties worth $10,000!"
//          }
//          timeago={"12m"}
//        />
//      </div>
//      <div>
//        {" "}
//        <PostComponent
//          title={"How to become a big dawg developer?"}
//          image={"https://images.unsplash.com/photo-1518717758536-85ae29035b6d"}
//          subtitle={"Promoted"}
//          description={
//            "Want to Know how to become a big dawg developer? Join Dog Joe Devs and win bounties worth $10,000!"
//          }
//        />
//      </div>
//    </div>
//  </div>;
