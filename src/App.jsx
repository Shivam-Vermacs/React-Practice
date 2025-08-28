function App() {
  return (
    <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <PostComponent />
      </div>
    </div>
  );
}
const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: "8px",
  borderColor: "gray",
  borderWidth: 1,
  padding: 16,
};
function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
          alt="Profile Picture"
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
          }}
        />

        <div
          style={{ fontSize: 12, color: "gray", marginLeft: 8, padding: 10 }}
        >
          <b>Dog Joe Devs</b>
          <div>23,000 Followers</div>
          <div>12m</div>
        </div>
      </div>

      <div
        style={{
          fontSize: 17,
          fontWeight: "normal",
          marginLeft: 8,
          padding: 10,
        }}
      >
        <p>
          Want to Know how to become a big dawg developer? Join Dog Joe Devs and
          win bounties worth $10,000!
        </p>
      </div>
    </div>
  );
}

export default App;
