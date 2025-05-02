
export default function LandingPage() {

    return(
        <>
        <div className="bg-black flex-col flex p-6 ">
        <nav className="flex flex-row justify-between">
            <h1 className="text-4xl text-white font-bold">Supa<span className="text-orange-500">Menu</span></h1>
            <div className="flex flex-row justify-between">
                <span className="mx-2">🔍</span>
                <span className="mx-2">🔔</span>
                <span className="mx-2 text-gray-200">|</span>
                <span className="mx-2 text-gray-300">Jacques Kagabo</span>
                <span className="mx-2">🧑🏽</span>
            </div>
        </nav>
        <header className="flex flex-col items-center p-5 m-5">
            <h1 className="text-2xl text-white mt-2">Register your restaurant on SupaMenu</h1>
            <h4 className="text-base font-light text-white mb-4">for free and get more revenue!</h4>
            <div>
                <button className="bg-orange-500 mx-5 px-8 py-3 rounded-md">Register</button>
                <button className="border text-white mx-5 px-5 py-3 rounded-md">Already registered? Signin</button>
            </div>
        </header>
        </div>
        <div className="flex flex-col p-6 bg-blue-50 items-center">
            <h1 className="font-semibold text-2xl">How it works</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center border-gray-200 border-2 my-10 mx-20 py-5 px-7 bg-white rounded-md">
                    <span className="text-4xl my-2">✍🏽</span>
                    <p className="text-lg font-semibold">Step 1</p>
                    <p className="text-gray-700 text-sm">Register your restaurant</p>
                </div>
                <div className="flex flex-col items-center border-gray-200 border-2 my-10 mx-20 p-5 px-6 bg-white rounded-md">
                    <span className="text-4xl my-2">🍽️</span>
                    <p className="text-lg font-semibold">Step 2</p>
                    <p className="text-gray-700 text-sm">Create profile and menu</p>
                </div>
                <div className="flex flex-col items-center border-gray-200 border-2 my-10 mx-20 p-5 px-6 bg-white rounded-md">
                    <span className="text-4xl my-2">📃</span>
                    <p className="text-lg font-semibold">Step 3</p>
                    <p className="text-gray-700 text-sm">Start receiving order</p>
                </div>
            </div>

        </div>
        </>
    )
    
} 