import { useEffect, useState } from "react";
import Usercount from "./Usercount";

function Users() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [count, setCount] = useState(0);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      console.log("api rendered")
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let userlist = await res.json();
        setUsers(userlist);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const addUser = () => {
    setCount(count + 1);
  };

  if (loading) {
    return <h1 className="text-center text-2xl p-10">Loading...</h1>;
  }

  if (error !== null) {
    return (
      <h1 className="text-center text-2xl text-red-500 p-10">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold mb-4">Users List</h1>

      <Usercount count={count} />

      <div className="grid grid-cols-4 gap-4 p-4">
        {users.map((userObj) => (
          <div
            key={userObj.id}
            className="border border-gray-400 p-4 text-center"
          >
            <p className="font-bold">{userObj.name}</p>
            <p>{userObj.email}</p>
            <button
              onClick={addUser}
              className="mt-2 px-4 py-2 bg-blue-500 text-white"
            >
              Add User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
