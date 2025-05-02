export default function Login() {
  return (
    <>
      <div className="bg-orange-500 flex flex-row p-10 h-full">
        <div className="flex justify-center items-center text-4xl text-black font-bold w-[45%]">
          Supa<span className="text-white">Menu</span>
        </div>
        <div className="bg-white rounded-lg mx-5 px-3 py-8 flex flex-col items-center justify-center w-[45%]">
          <p className="text-gray-400 text-sm my-5 font-semibold">Welcome</p>
          <h1 className="font-bold text-lg text-black my-3">
            Login to SupaMenu
          </h1>
          <p className="text-gray-400 text-xs my-5 font-semibold">
            Enter your email and password below
          </p>
          <form action="" method="post" className="flex-col flex w-3/4">
            <label htmlFor="email" className="text-sm text-gray-400">EMAIL</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="border border-gray-200 px-5 py-3 my-3 rounded-md"
            />
            <label htmlFor="password" className="text-sm text-gray-400">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-200 px-5 py-3 my-3 rounded-md"
            />
            <button className="bg-orange-500 py-2 px-5 my-4 text-white text-sm shadow-md rounded-md">Log In</button>
          </form>
          <p className="text-gray-400 text-sm my-5 font-semibold">Don't have an account? <span className="text-blue-700">Sign up</span></p>
          <p className="text-gray-400 text-sm my-5 font-semibold">Forgot your password/login <span className="text-blue-700">RESET</span></p>
        </div>
      </div>
    </>
  );
}
