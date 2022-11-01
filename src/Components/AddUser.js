import React, { useState } from 'react';

const AddUser = () => {
  const [user, setUser] = useState({});
  console.log(user);

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('user added successfully');
          e.target.reset();
        }
        setUser(data);
      })
      .catch((error) => console.log(error.message));
  };

  // When the user leaves an input field, update the user object with the new value.
  const handleInputBlur = (e) => {
    const inputFieldName = e.target.name;
    const inputFieldValue = e.target.value;
    const newUser = { ...user };
    newUser[inputFieldName] = inputFieldValue;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please Add a New User</h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
