export default function Signup() {
  return (
    <>
      <div className="bg-orange-500 flex flex-row p-10">
        <div className="flex justify-center items-center text-4xl text-black font-bold w-[45%]">
          Supa<span className="text-white">Menu</span>
        </div>
        <div className="bg-white rounded-lg mx-5 px-3 py-5 flex flex-col items-center justify-center w-[45%]">
          <h1 className="font-bold text-lg text-black my-3">Signup </h1>

          <form action="" method="post" className="flex-col flex w-3/4">
            <label htmlFor="first_name" className="text-sm text-gray-400">
              FIRST NAME
            </label>
            <input
              type="first_name"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              className="border border-gray-200 px-5 py-2 my-3 rounded-md"
            />
            <label htmlFor="last_name" className="text-sm text-gray-400">
              LAST NAME
            </label>
            <input
              type="last_name"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              className="border border-gray-200 px-5 py-2 my-3 rounded-md"
            />
            <label htmlFor="phone" className="text-sm text-gray-400">
              PHONE
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone number"
              className="border border-gray-200 px-5 py-2 my-3 rounded-md"
            />
            <label htmlFor="email" className="text-sm text-gray-400">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="border border-gray-200 px-5 py-2 my-3 rounded-md"
            />
            
            <label htmlFor="password" className="text-sm text-gray-400">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-200 px-5 py-2 my-3 rounded-md"
            />
            <button className="bg-orange-500 py-2 px-5 my-4 text-white text-sm shadow-md rounded-md">
              Sign Up
            </button>
          </form>
          <p className="text-gray-400 text-sm my-2 font-semibold">
            Already have an account?{" "}
            <span className="text-blue-700">Login</span>
          </p>
        </div>
      </div>
    </>
  );
}
