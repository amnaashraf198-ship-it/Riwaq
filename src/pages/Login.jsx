// TODO: teammates implement Formik + Yup here.
// On submit: dispatch(login(values))
import classImage from '../assets/class.jpg';


export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg w-full">
        
        {/* الصورة */}
        <img
          src={classImage}
          alt="class"
          className="w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0 md:rounded-r-none"
        />

        {/* الفورم */}
        <div className="w-full md:w-1/2 md:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome to lorem..!</h2>

          <div className="flex justify-center mb-6 space-x-4">
            <button
              className="px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#4cb4bb' }}
            >
              Login
            </button>
            <button
              className="px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#c8f5f5ff', color: '#4cb4bb' }}
            >
              Register
            </button>
          </div>

          <p className="text-center text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <form className="space-y-4">
            <label>
              User name
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-lg px-4 py-2 mt-1 focus:outline-none transition"
                style={{
                  border: '1px solid #4cb4bb',
                  boxShadow: '0 0 0 2px transparent',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4cb4bb'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg px-4 py-2 mt-1 focus:outline-none transition"
                style={{
                  border: '1px solid #4cb4bb',
                  boxShadow: '0 0 0 2px transparent',
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4cb4bb'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 0 2px transparent'}
              />
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#4cb4bb] no-underline hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-full font-semibold hover:bg-teal-500 transition"
              style={{
                backgroundColor: '#4cb4bb',
                fontSize: '16px',
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
