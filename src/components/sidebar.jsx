
export default function Sidebar (){

    return(
        <div className="flex flex-col justify-between py-5 px-2 bg-black w-[12%] h-[100%] border-l border-orange-500">
            <div>
            <div className="text-2xl text-orange-500 font-bold my-5">Supa<span className="text-white">Menu</span></div>
            <div className="flex flex-col text-gray-500 text-lg mt-16 mb-5">
                <div className="py-3 pr-2 hover:bg-gray-900 hover:border-l-2"><span>🗳️</span>Overview</div>
                <div className="py-3 pr-2 hover:bg-gray-900 hover:border-l-2"><span>📊</span>Clients</div>
                <div className="py-3 pr-2 hover:bg-gray-900 hover:border-l-2"><span>👥</span>Users</div>
            </div>
            </div>
            <div className="flex flex-col text-gray-500 text-lg">
            <div className="py-3 pr-2 hover:bg-gray-900 hover:border-l-2"><span>🎡</span>Settings</div>
            <div className="py-3 pr-2 hover:bg-gray-900 hover:border-l-2"><span>🏅</span>My Account</div>
            </div>
        </div>
    );
}