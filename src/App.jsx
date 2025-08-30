import React, { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const postComponent = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "John Doe",
        subtitle: "Software Engineer",
        time: "2 hours ago",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Japan landscape
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ]);
  }

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <button onClick={addPost}>Add Post</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          color: "white",
          padding: 20,
        }}
      >
        {postComponent}
      </div>
    </div>
  );
}

export default App;
