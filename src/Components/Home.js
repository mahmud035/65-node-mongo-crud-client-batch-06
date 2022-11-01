import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const users = useLoaderData();

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );
    console.log(agree);

    if (agree) {
      console.log(`deleting user with id: ${user._id}`);
    }
  };

  console.log(users);

  return (
    <div>
      <h2>Users: {users.length} </h2>
      <div>
        {users.map((user, index) => (
          <p key={index}>
            {user.name}, {user.email}
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
