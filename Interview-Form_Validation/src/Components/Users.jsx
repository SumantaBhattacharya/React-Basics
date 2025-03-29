import React from "react";

const Users = ({ element }) => {
    return (
      <div className="bg-gray-800 p-3 rounded-md shadow-md">
        <p className="text-white font-semibold">{element.name}</p>
        <p className="text-gray-400 text-sm">{element.email}</p>
      </div>
    );
  };  

export default Users;
