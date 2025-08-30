const style = {
  display: "flex",
  flexDirection: "column",
  width: 320,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <img
          src={image}
          alt="profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 12,
          }}
        />
        <div style={{ fontSize: 14, color: "#222" }}>
          <b>{name}</b>
          <div style={{ fontSize: 12, color: "#555" }}>{subtitle}</div>
          {time !== undefined ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 11,
                color: "#888",
              }}
            >
              <div>{time}</div>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                alt="clock"
                style={{ width: 12, height: 12, marginLeft: 4 }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ fontSize: 13, color: "#333" }}>{description}</div>
    </div>
  );
}
