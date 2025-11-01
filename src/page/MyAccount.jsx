import React, { useState, useRef } from "react";
import {
  User,
  Edit2,
  Camera,
  Save,
  X,
  LogOut,
  Shield,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function MyAccount() {
  const { user, updateProfile, logout, deleteUser } = useUser();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || "");
  const [editPhone, setEditPhone] = useState(user?.phone || "");
  const [editEmail, setEditEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const fileInputRef = useRef(null);


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // Validate password change if attempting
    if (showPasswordFields && newPassword) {
      if (newPassword !== confirmPassword) {
        toast.error("New passwords do not match!");
        return;
      }
      if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters long!");
        return;
      }
      // Check if current password is provided (for security)
      if (!currentPassword) {
        toast.error("Please enter your current password!");
        return;
      }
    }

    const updates = {
      name: editName,
      phone: editPhone,
      email: editEmail,
      profileImage
    };

    // Only include password if user is changing it during profile edit
    if (newPassword) {
      if (newPassword !== confirmPassword) {
        toast.error("New passwords do not match!");
        return;
      }
      if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters long!");
        return;
      }
      if (!currentPassword) {
        toast.error("Please enter your current password!");
        return;
      }
      updates.password = newPassword;
    }

    const result = updateProfile(updates);
    if (result.success) {
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.error(result.error || "Failed to update profile");
    }
  };

  const handleSavePasswordOnly = () => {
    // Validate password change
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields!");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!currentPassword) {
      toast.error("Please enter your current password!");
      return;
    }

    const result = updateProfile({ password: newPassword });
    if (result.success) {
      toast.success("Password changed successfully!");
      setShowPasswordFields(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.error(result.error || "Failed to change password");
    }
  };


  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Delete the user from the users array and logout
      deleteUser(user.id);
      toast.success("Account deleted successfully");
      navigate("/signup");
    }
  };

  const handleCancelEdit = () => {
    setEditName(user?.name || "");
    setEditPhone(user?.phone || "");
    setEditEmail(user?.email || "");
    setProfileImage(user?.profileImage || null);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordFields(false);
    setIsEditing(false);
  };


  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      logout();
      toast.success("Successfully signed out!");
      navigate("/login");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Account
              </h1>
              <p className="mt-3 text-gray-600 text-lg">
                Manage your personal information and account settings
              </p>
            </div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
            <div className="relative group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-white/50">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-white" />
                )}
              </div>
              {isEditing && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <Camera className="w-4 h-4" />
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <div className="flex-1 text-center lg:text-left w-full">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 border-2 border-blue-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-center lg:text-left"
                    placeholder="Enter your name"
                  />
                  <p className="text-gray-600 text-base sm:text-lg">{user?.email}</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{user?.name || "User"}</h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-3">{user?.email}</p>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 w-full sm:w-auto">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveProfile}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 font-semibold hover:shadow-md"
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* User Information Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Account Information
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Edit2 className="w-5 h-5" />
              {isEditing ? 'Cancel Edit' : 'Edit Information'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium"
                  placeholder="Enter your name"
                />
              ) : (
                <p className="text-gray-900 font-semibold text-lg bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                  {user?.name || "Not provided"}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium"
                  placeholder="Enter your phone number"
                />
              ) : (
                <p className="text-gray-900 font-semibold text-lg bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                  {user?.phone || "Not provided"}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium"
                  placeholder="Enter your email"
                />
              ) : (
                <p className="text-gray-900 font-semibold text-lg bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                  {user?.email || "Not provided"}
                </p>
              )}
            </div>
            {isEditing && (
              <div className="group md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Change Password (Optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-200 text-gray-900 font-medium"
                    placeholder="Current password"
                  />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-900 font-medium"
                    placeholder="New password (min 6 chars)"
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Password Change Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Password & Security</h4>
                  <p className="text-sm text-gray-600">Keep your account secure with a strong password</p>
                </div>
              </div>
              <button
                onClick={() => setShowPasswordFields(!showPasswordFields)}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Shield className="w-4 h-4" />
                {showPasswordFields ? 'Cancel Change' : 'Change Password'}
              </button>
            </div>

            {showPasswordFields && (
              <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 sm:p-6 lg:p-8 rounded-3xl border border-orange-200 mb-6 shadow-inner">
                <div className="mb-4 sm:mb-6">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4 flex items-center gap-2">
                    <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600" />
                    Update Your Password
                  </h5>
                  <p className="text-gray-600 text-sm sm:text-base">Enter your current password and choose a new secure password.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Shield className="w-4 h-4 text-orange-500" />
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-4 pl-12 border-2 border-orange-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-200 text-gray-900 font-medium bg-white/80 backdrop-blur-sm"
                        placeholder="Enter current password"
                        required
                      />
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-4 pl-12 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-900 font-medium bg-white/80 backdrop-blur-sm"
                        placeholder="Enter new password (min 6 chars)"
                        required
                      />
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" />
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-4 pl-12 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium bg-white/80 backdrop-blur-sm"
                        placeholder="Confirm new password"
                        required
                      />
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                  <button
                    onClick={handleSavePasswordOnly}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Save className="w-4 sm:w-5 h-4 sm:h-5" />
                    Update Password
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordFields(false);
                      setCurrentPassword("");
                      setNewPassword("");
                      setConfirmPassword("");
                    }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold hover:shadow-md"
                  >
                    <X className="w-4 sm:w-5 h-4 sm:h-5" />
                    Cancel
                  </button>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 border border-yellow-200 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-yellow-100 rounded-full">
                      <Shield className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-yellow-800 mb-2">Password Security Guidelines</h5>
                      <ul className="text-sm text-yellow-700 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Minimum 6 characters long
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          New password must be different from current
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Passwords must match in both fields
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          Current password is required for verification
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isEditing && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleSaveProfile}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 font-semibold hover:shadow-md"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Additional Features */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Account Actions</h4>

            {/* Account Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex justify-center">
                <button
                  onClick={handleDeleteAccount}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto"
                >
                  <Trash2 className="w-4 sm:w-5 h-4 sm:h-5" />
                  Delete Account
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSignOut}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <LogOut className="w-4 sm:w-5 h-4 sm:h-5" />
                  Sign Out
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center">
              You will be redirected to the login page after signing out
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}