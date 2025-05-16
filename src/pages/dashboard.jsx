import { FaEye, FaFilter, FaSort } from "react-icons/fa";
import Sidebar from "../components/sidebar";
import { items } from "../components/items";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <nav className="bg-blue-50 p-5 flex justify-between items-center">
          <h1 className="text-2xl text-black font-semibold">Overview</h1>
          <div className="flex items-center">
            <span className="mx-2">🔍</span>
            <span className="mx-2">🔔</span>
            <span className="mx-2 text-black">|</span>
            <span className="mx-2 text-black font-medium">Jacques Kagabo</span>
            <span className="mx-2">🧑🏽</span>
          </div>
        </nav>
        
        {/* Main Content Area */}
        <div className="flex-1 p-5 overflow-y-auto">
          {/* New Client Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              New Client
            </h2>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Add a new client"
                className="border border-gray-300 rounded-md px-4 py-2 w-1/3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                Add
              </button>
            </div>
            <hr className="mt-4 border-gray-300" />
          </div>

          {/* View All Clients Section */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                View all clients
              </h2>
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-gray-600 cursor-pointer">
                  <FaSort />
                  <span>Sort</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 cursor-pointer">
                  <FaFilter />
                  <span>Filter</span>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-700 text-left">
                  <tr>
                    <th className="py-3 px-4 font-medium">Client Details</th>
                    <th className="py-3 px-4 font-medium">Sales</th>
                    <th className="py-3 px-4 font-medium">Detailed Report</th>
                    <th className="py-3 px-4 font-medium">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-800">
                  {items.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-4 px-4">{item.name}</td>
                      <td className="py-4 px-4">
                        <div>
                          <p>{item.price}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <FaEye className="text-orange-500 cursor-pointer" />
                      </td>
                      <td className="py-4 px-4">
                        <button className="bg-gray-400 text-white font-bold px-3 py-1 rounded-full text-xs">
                          {item.category}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}