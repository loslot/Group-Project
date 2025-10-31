import React, { useState } from "react";
import {
  User,
  Package,
  MapPin,
  CreditCard,
  Heart,
  Clock,
  Edit2,
  Trash2,
  Eye,
} from "lucide-react";

export default function MyAccount() {
  const [activeSection, setActiveSection] = useState("overview");

  const recentOrders = [
    {
      id: "#12345",
      date: "2025-10-25",
      status: "Delivered",
      total: "$129.99",
      items: 3,
    },
    {
      id: "#12344",
      date: "2025-10-20",
      status: "In Transit",
      total: "$89.99",
      items: 2,
    },
    {
      id: "#12343",
      date: "2025-10-15",
      status: "Processing",
      total: "$199.99",
      items: 5,
    },
    {
      id: "#12342",
      date: "2025-10-10",
      status: "Delivered",
      total: "$49.99",
      items: 1,
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      zip: "10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Office Ave",
      city: "New York",
      zip: "10002",
      isDefault: false,
    },
  ];

  const paymentMethods = [
    { id: 1, type: "Visa", last4: "4242", expiry: "12/25", isDefault: true },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "09/26",
      isDefault: false,
    },
  ];

  const wishlistItems = [
    { id: 1, name: "Wireless Headphones", price: "$199.99", image: "🎧" },
    { id: 2, name: "Smart Watch", price: "$299.99", image: "⌚" },
    { id: 3, name: "Laptop Stand", price: "$49.99", image: "💻" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-700 bg-green-100";
      case "In Transit":
        return "text-blue-700 bg-blue-100";
      case "Processing":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="mt-2 text-gray-600">
            Manage your orders, addresses, and account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Username</h2>
                <p className="text-gray-600">user@example.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  Member since October 2023
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-600">Total Orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Active Orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Wishlist Items</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Saved Addresses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: "overview", label: "Overview", icon: User },
                { id: "orders", label: "Orders", icon: Package },
                { id: "addresses", label: "Addresses", icon: MapPin },
                { id: "payments", label: "Payment Methods", icon: CreditCard },
                { id: "wishlist", label: "Wishlist", icon: Heart },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                      activeSection === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Order #12345 Delivered
                        </p>
                        <p className="text-sm text-gray-600">
                          Your order has been delivered successfully
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Added 3 items to wishlist
                        </p>
                        <p className="text-sm text-gray-600">
                          New items saved for later
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">5 days ago</span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Payment Method Added
                        </p>
                        <p className="text-sm text-gray-600">
                          Mastercard ending in 8888
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Account Security
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="font-medium text-gray-900 mb-2">Password</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Last changed 3 months ago
                      </p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Change Password
                      </button>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="font-medium text-gray-900 mb-2">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-gray-600 mb-3">Not enabled</p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Section */}
            {activeSection === "orders" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Order History
                  </h3>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                    <option>All time</option>
                  </select>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-lg font-bold text-gray-900">
                            {order.id}
                          </p>
                          <p className="text-sm text-gray-600">
                            Placed on {order.date}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700">
                            <span className="font-medium">
                              {order.items} items
                            </span>{" "}
                            • Total:{" "}
                            <span className="font-bold text-gray-900">
                              {order.total}
                            </span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                          {order.status === "Delivered" && (
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Buy Again
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Section */}
            {activeSection === "addresses" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Saved Addresses
                  </h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border border-gray-200 rounded-lg p-6 relative"
                    >
                      {address.isDefault && (
                        <span className="absolute top-4 right-4 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          Default
                        </span>
                      )}

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-500 mb-2">
                          {address.type}
                        </p>
                        <p className="font-bold text-gray-900">
                          {address.name}
                        </p>
                        <p className="text-gray-700">{address.address}</p>
                        <p className="text-gray-700">
                          {address.city}, {address.zip}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="flex-1 px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Methods Section */}
            {activeSection === "payments" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Payment Methods
                  </h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add New Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="border border-gray-200 rounded-lg p-6 relative"
                    >
                      {method.isDefault && (
                        <span className="absolute top-4 right-4 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          Default
                        </span>
                      )}

                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">
                              {method.type}
                            </p>
                            <p className="text-sm text-gray-600">
                              •••• {method.last4}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Expires {method.expiry}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="flex-1 px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Section */}
            {activeSection === "wishlist" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    My Wishlist
                  </h3>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="text-6xl mb-4 text-center">
                        {item.image}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-xl font-bold text-blue-600 mb-4">
                        {item.price}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Add to Cart
                        </button>
                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}