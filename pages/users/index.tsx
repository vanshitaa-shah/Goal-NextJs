import React from "react";
// function hasNameProperty(user: User): user is User & { name: string } {
//   return user.name !== undefined;
// }
const Users = ({ users }: { users: [{ name: string }] }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user, idx) => (
        <p key={idx}>{user.name}</p>
      ))}
    </>
  );
};

//will run only on server side, no data will be included in JS bundle. Production : run only at build time not on every

//only allowed in pages folder, not anywhere else
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data: [{ name: string }] = await response.json();
  console.log(data);

  //returns an object with props key
  return {
    props: {
      users: data,
    },
  };
};

export default Users;
