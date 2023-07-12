import { useState } from "react";

export function Profile() {
  const [username, setUsername] = useState("");

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}
