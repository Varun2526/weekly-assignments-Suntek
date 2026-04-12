import { useState } from "react";

function Usercount({ count }) {
  return (
    <div className="p-4 m-4 border border-gray-400 text-center">
      <h2 className="text-xl font-bold">User Count: {count}</h2>
    </div>
  );
}

export default Usercount;
