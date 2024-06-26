import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["John Wick", "Jason Bourne", "James Bond"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <p>Welcome to the homepage</p>

      <button onClick={handleClick} type="button">
        Click me {likes} {likes === 1 ? "time" : "times"}
      </button>
    </div>
  );
}
