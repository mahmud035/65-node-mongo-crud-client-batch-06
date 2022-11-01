import React, { useState } from 'react';

const AddUser = () => {
  const [user, setUser] = useState({});
  console.log(user);

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(user);

    e.target.reset();
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
