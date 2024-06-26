import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["John Wick", "Jason Bourne", "James Bond"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <p>Welcome to the homepage</p>

      <LikeButton />
    </div>
  );
}
