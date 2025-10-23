// src/Pages/Profile.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to update profile.");
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-3 object-cover border-2 border-indigo-500"
          />
          <p className="text-lg font-semibold">{user?.displayName || "No Name"}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Profile Image URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
