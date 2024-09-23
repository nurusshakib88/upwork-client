import React from "react";
import { useLogin } from "../context/LoginContext";

function Home() {
  const { user, logout } = useLogin();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1>Welcome, {user.fullName}</h1>
      <h1>Welcome, {user.id}</h1>
      <h2>Email: {user.email}</h2>
      <h3>Client Name: {user.client.clientName}</h3>

      <h2>Your Stores:</h2>
      <ul>
        {user.userStores.map((store) => (
          <li key={store.id}>{store.storeName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
