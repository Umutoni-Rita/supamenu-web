import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar />
      <div className="w-full bg-blue-50 p-3">
        <nav className="flex flex-row justify-between mb-5">
          <h1 className="text-2xl text-black font-semibold">OverView</h1>
          <div className="flex flex-row justify-between">
            <span className="mx-2">🔍</span>
            <span className="mx-2">🔔</span>
            <span className="mx-2 text-black">|</span>
            <span className="mx-2 text-black font-medium">Jacques Kagabo</span>
            <span className="mx-2">🧑🏽</span>
          </div>
        </nav>
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-2xl text-black font-semibold">New Client</h1>
          <div className="border-b-gray-300 border-b-2 px-3 py-2 text-gray-400 flex flex-row justify-between w-[30%] my-5">
            <p>Add a new client</p>
            <button>➕</button>
          </div>
        </div>
        <div className="bg-white mx-4 my-5 border border-gray-300 rounded-lg p-5">
            <div className="flex flex-row justify-between">
                <p className="text-xl text-black font-semibold">All Clients</p>
                <div className="flex justify-between">
                <h1 className="mx-3 text-lg"><span>📃</span>Sort</h1>
                <h1 className="mx-3 text-lg"><span>📂</span>Filter</h1>
                </div>
            </div>
            <table>
                <thead>
                <th>Clients details</th>
                <th>Sales</th>
                <th>Detailed Report</th>
                <th>Category</th>
                </thead>
                <tbody>
                    <tr>Soy Restaurant</tr>
                    <tr>638203820Frw</tr>
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
