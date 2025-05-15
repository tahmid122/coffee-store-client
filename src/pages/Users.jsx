import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);
  const handleDelete = (id) => {
    fetch(`https://coffee-store-server-chi-eight.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted successfully");
          const filteredUsers = users.filter((user) => user._id !== id);
          setUsers(filteredUsers);
        }
      });
  };
  return (
    <div className="my-20 px-10">
      <table className="table text-base">
        <thead className="text-xl">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.photo}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    onClick={() => handleDelete(user._id)}
                    className="cursor-pointer"
                  >
                    <MdDelete size={20} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Users;
