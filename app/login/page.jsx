const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-bgSoft">
       <div className="w-full max-w-md bg-bg shadow-md rounded-lg p-6 mx-4">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="flex flex-col">
          <label htmlFor="username" className="mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="input mb-3"
            placeholder="Username"
            required
          />
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input mb-3"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="btn bg-teal-700 text-white hover:bg-teal-600 hover:opacity-80 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
