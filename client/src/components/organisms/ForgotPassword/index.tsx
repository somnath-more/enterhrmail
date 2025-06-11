
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleForgotPassword = () => {};


  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="flex-center text-3xl font-bold text-gray-900 text-center">
            Sign In
          </h1>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
     
          </div>

      

       

          <div>
            <button
              onClick={handleForgotPassword}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot Password 
            </button>
          </div>
    
          <div>
            <p className="text-center text-gray-500">
              Don't have an account?{" "}
              <a
                onClick={handleSignUp}
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
