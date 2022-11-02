import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );
    console.log(agree);

    if (agree) {
      // console.log(`deleting user with id: ${user._id}`);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('User deleted successfully');
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }

          // console.log(data);
        });
    }
  };

  console.log(users);

  return (
    <div>
      <h2>Users: {displayUsers.length} </h2>
      <div>
        {displayUsers.map((user, index) => (
          <p key={index}>
            {user.name}, {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
