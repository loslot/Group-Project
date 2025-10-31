import React, { useState } from "react";
import {
  Package,
  Search,
  Filter,
  Calendar,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
  Download,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

export default function MyOrders() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    {
      id: "#ORD-12345",
      date: "2025-10-28",
      status: "Delivered",
      total: "$129.99",
      items: [
        {
          name: "Wireless Bluetooth Headphones",
          price: "$79.99",
          qty: 1,
          image: "🎧",
        },
        {
          name: "Phone Case - Premium Leather",
          price: "$29.99",
          qty: 1,
          image: "📱",
        },
        { name: "USB-C Cable (3 pack)", price: "$20.01", qty: 1, image: "🔌" },
      ],
      tracking: "TRK123456789",
      estimatedDelivery: "2025-10-28",
      shippingAddress: "123 Main Street, New York, NY 10001",
    },
    {
      id: "#ORD-12344",
      date: "2025-10-25",
      status: "In Transit",
      total: "$89.99",
      items: [
        { name: "Smart Watch Series 5", price: "$299.99", qty: 1, image: "⌚" },
        { name: "Watch Band - Sport", price: "$29.99", qty: 2, image: "⌚" },
      ],
      tracking: "TRK987654321",
      estimatedDelivery: "2025-11-01",
      shippingAddress: "123 Main Street, New York, NY 10001",
    },
    {
      id: "#ORD-12343",
      date: "2025-10-22",
      status: "Processing",
      total: "$199.99",
      items: [
        {
          name: "Laptop Stand - Aluminum",
          price: "$49.99",
          qty: 1,
          image: "💻",
        },
        { name: "Wireless Mouse", price: "$39.99", qty: 1, image: "🖱️" },
        {
          name: "Keyboard - Mechanical RGB",
          price: "$89.99",
          qty: 1,
          image: "⌨️",
        },
        { name: "Desk Mat - XL", price: "$20.02", qty: 1, image: "📋" },
      ],
      tracking: null,
      estimatedDelivery: "2025-11-05",
      shippingAddress: "456 Office Ave, New York, NY 10002",
    },
    {
      id: "#ORD-12342",
      date: "2025-10-18",
      status: "Cancelled",
      total: "$49.99",
      items: [
        { name: "Tablet Case - Folio", price: "$49.99", qty: 1, image: "📱" },
      ],
      tracking: null,
      estimatedDelivery: null,
      shippingAddress: "123 Main Street, New York, NY 10001",
    },
    {
      id: "#ORD-12341",
      date: "2025-10-15",
      status: "Delivered",
      total: "$349.99",
      items: [
        {
          name: "Noise Cancelling Headphones Pro",
          price: "$349.99",
          qty: 1,
          image: "🎧",
        },
      ],
      tracking: "TRK456789123",
      estimatedDelivery: "2025-10-20",
      shippingAddress: "123 Main Street, New York, NY 10001",
    },
    {
      id: "#ORD-12340",
      date: "2025-10-10",
      status: "Delivered",
      total: "$159.99",
      items: [
        {
          name: "Portable Charger 20000mAh",
          price: "$59.99",
          qty: 1,
          image: "🔋",
        },
        {
          name: "Travel Adapter Universal",
          price: "$24.99",
          qty: 1,
          image: "🔌",
        },
        { name: "Cable Organizer Set", price: "$15.00", qty: 5, image: "🎒" },
      ],
      tracking: "TRK789123456",
      estimatedDelivery: "2025-10-15",
      shippingAddress: "123 Main Street, New York, NY 10001",
    },
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case "Delivered":
        return {
          color: "text-green-700 bg-green-100 border-green-200",
          icon: CheckCircle,
        };
      case "In Transit":
        return {
          color: "text-blue-700 bg-blue-100 border-blue-200",
          icon: Truck,
        };
      case "Processing":
        return {
          color: "text-yellow-700 bg-yellow-100 border-yellow-200",
          icon: Clock,
        };
      case "Cancelled":
        return {
          color: "text-red-700 bg-red-100 border-red-200",
          icon: XCircle,
        };
      default:
        return {
          color: "text-gray-700 bg-gray-100 border-gray-200",
          icon: Package,
        };
    }
  };

  const filterOrders = () => {
    let filtered = orders;

    if (selectedFilter !== "all") {
      filtered = filtered.filter(
        (order) => order.status.toLowerCase() === selectedFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.items.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return filtered;
  };

  const filteredOrders = filterOrders();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">6</p>
                <p className="text-sm text-gray-600">Total Orders</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">In Transit</p>
              </div>
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Delivered</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$969.94</p>
                <p className="text-sm text-gray-600">Total Spent</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by order ID or product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto">
              {[
                { id: "all", label: "All Orders" },
                { id: "processing", label: "Processing" },
                { id: "in transit", label: "In Transit" },
                { id: "delivered", label: "Delivered" },
                { id: "cancelled", label: "Cancelled" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No orders found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;
              const isExpanded = expandedOrder === order.id;

              return (
                <div
                  key={order.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            {order.id}
                          </p>
                          <p className="text-sm text-gray-600">
                            Ordered on {order.date}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border ${statusConfig.color}`}
                      >
                        <StatusIcon className="w-5 h-5" />
                        <span className="font-medium">{order.status}</span>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Total Amount
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {order.total}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Items</p>
                        <p className="text-lg font-bold text-gray-900">
                          {order.items.length} item
                          {order.items.length > 1 ? "s" : ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Delivery Date
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {order.estimatedDelivery || "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button
                        onClick={() =>
                          setExpandedOrder(isExpanded ? null : order.id)
                        }
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        {isExpanded ? "Hide" : "View"} Details
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {order.tracking && (
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          Track Order
                        </button>
                      )}

                      {order.status === "Delivered" && (
                        <>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Invoice
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" />
                            Return
                          </button>
                        </>
                      )}

                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Contact Support
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="border-t border-gray-200 bg-gray-50 p-6">
                      {/* Items List */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-4">
                          Order Items
                        </h4>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 bg-white p-4 rounded-lg"
                            >
                              <div className="text-4xl">{item.image}</div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Quantity: {item.qty}
                                </p>
                              </div>
                              <p className="font-bold text-gray-900">
                                {item.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">
                            Shipping Address
                          </h4>
                          <p className="text-gray-700">
                            {order.shippingAddress}
                          </p>
                        </div>

                        {order.tracking && (
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-3">
                              Tracking Information
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              Tracking Number
                            </p>
                            <p className="font-mono text-gray-900 font-medium">
                              {order.tracking}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Order Timeline */}
                      {order.status !== "Cancelled" && (
                        <div className="mt-6 bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-4">
                            Order Timeline
                          </h4>
                          <div className="space-y-4">
                            <div className="flex gap-4">
                              <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">
                                  Order Placed
                                </p>
                                <p className="text-sm text-gray-600">
                                  {order.date}
                                </p>
                              </div>
                            </div>

                            {order.status !== "Processing" && (
                              <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">
                                    Order Confirmed
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {order.date}
                                  </p>
                                </div>
                              </div>
                            )}

                            {order.status === "In Transit" ||
                            order.status === "Delivered" ? (
                              <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">
                                    Shipped
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {order.date}
                                  </p>
                                </div>
                              </div>
                            ) : null}

                            {order.status === "Delivered" ? (
                              <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">
                                    Delivered
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {order.estimatedDelivery}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-500">
                                    Expected Delivery
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {order.estimatedDelivery}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}