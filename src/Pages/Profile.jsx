import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import toast, { Toaster } from 'react-hot-toast';
import { HiPencil, HiUserCircle } from 'react-icons/hi';
import { deleteUser } from 'firebase/auth';

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(name || user.displayName, photoURL || user.photoURL)
      .then(() => {
        toast.success('Profile updated successfully!');

        setName('');
        setPhotoURL('');
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to update profile.');
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Toaster position="top-center" />

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          />
          <h2 className="text-3xl font-bold text-white mt-4">
            {user?.displayName || 'No Name'}
          </h2>
          <p className="text-white opacity-90">{user?.email}</p>

          <button
            onClick={() => setOpenEdit(!openEdit)}
            className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto"
          >
            <HiPencil /> Edit Profile
          </button>
        </div>

        {openEdit && (
          <div className="p-6 border-t bg-gray-50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <HiUserCircle /> Update Your Information
            </h3>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder={user?.displayName || 'Enter name'}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Profile Photo URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  placeholder={user?.photoURL || 'Enter image URL'}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition ${
                  loading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Updating...' : 'Save Changes'}
              </button>
            </form>
          </div>
        )}

        <div className="p-6 space-y-4 border-t">
          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                'Are you sure you want to delete your account? This cannot be undone!'
              );
              if (!confirmDelete) return;

              deleteUser(user)
                .then(() => {
                  toast.success('Account deleted successfully!');
                  setTimeout(() => {
                    window.location.href = '/login';
                  }, 1500);
                })
                .catch((error) => {
                  if (error.code === 'auth/requires-recent-login') {
                    toast.error('Please login again before deleting account.');
                  } else {
                    toast.error(error.message);
                  }
                });
            }}
            className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
