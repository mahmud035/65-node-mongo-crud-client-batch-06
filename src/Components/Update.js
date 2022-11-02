import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const storedUser = useLoaderData();
  console.log(storedUser);

  const [user, setUser] = useState(storedUser);
  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    // console.log(user);

    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('User updated');
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // When the user leaves an input field, update the user object with the new value.
  const handleInputChange = (e) => {
    const inputFieldName = e.target.name;
    const inputFieldValue = e.target.value;
    const newUser = { ...user };
    newUser[inputFieldName] = inputFieldValue;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please Update: {storedUser.name}</h2>

      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.email}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
