
export default function Sidebar (){

    return(
        <div className="flex flex-col justify-between py-5 px-2 bg-black w-[15%] h-[100%]">
            <div className="text-2xl text-orange-500 font-bold my-5">Supa<span className="text-white">Menu</span></div>
            <div className="flex flex-col text-gray-500 text-lg my-10">
                <div><span>🗳️</span>Overview</div>
                <div><span>📊</span>Clients</div>
                <div><span>👥</span>Users</div>
            </div>
            <div className="flex flex-col text-gray-500 text-lg">
            <div><span>🎡</span>Settings</div>
            <div><span>🏅</span>My Account</div>
            </div>


        </div>
    );
}