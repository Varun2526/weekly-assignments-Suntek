import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../store/authStore';
import { useNavigate } from 'react-router';

function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4002/admin-api/users", { withCredentials: true });
      if (res.status === 200) {
        setUsers(res.data.payload);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleUserStatus = async (user) => {
    const newStatus = !user.isuseractive;
    try {
      const res = await axios.put("http://localhost:4002/admin-api/users", {
        userId: user._id,
        isActive: newStatus
      }, { withCredentials: true });

      if (res.status === 200) {
        toast.success(`User ${newStatus ? 'unblocked' : 'blocked'} successfully`);
        // Update user state locally
        setUsers(users.map(u => u._id === user._id ? { ...u, isuseractive: newStatus } : u));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update user status");
    }
  };

  if (loading) {
    return <div className="text-center mt-20 text-gray-500">Loading users...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {/* PROFILE HEADER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          {currentUser?.profileImageUrl ? (
            <img src={currentUser.profileImageUrl} className="w-16 h-16 rounded-full object-cover border border-gray-200" alt="profile" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
              {currentUser?.firstName?.charAt(0).toUpperCase() || 'A'}
            </div>
          )}
          <div>
            <p className="text-sm text-gray-500">Welcome back</p>
            <h2 className="text-xl font-bold text-gray-800">{currentUser?.firstName || 'Admin'}</h2>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white text-sm px-5 py-2 rounded-full hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Dashboard</h2>
      
      <div className="bg-white rounded shadow overflow-hidden border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 text-gray-700 font-bold">Profile</th>
              <th className="py-3 px-4 text-gray-700 font-bold">Name</th>
              <th className="py-3 px-4 text-gray-700 font-bold">Role</th>
              <th className="py-3 px-4 text-gray-700 font-bold">Status</th>
              <th className="py-3 px-4 text-gray-700 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  {user.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt="profile" className="w-10 h-10 rounded-full border border-gray-300" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 font-bold flex items-center justify-center">
                      {user.firstName[0]}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="font-bold text-gray-800">{user.firstName} {user.lastName}</div>
                  <div className="text-gray-600">{user.email}</div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-sm ${user.role === 'AUTHOR' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {user.isuseractive ? (
                     <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">
                     Active
                   </span>
                  ) : (
                    <span className="px-2 py-1 rounded text-sm bg-red-100 text-red-800">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleUserStatus(user)}
                    className={`px-3 py-1 rounded text-white ${
                      user.isuseractive 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {user.isuseractive ? 'Block User' : 'Unblock User'}
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">
                  No users or authors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProfile;