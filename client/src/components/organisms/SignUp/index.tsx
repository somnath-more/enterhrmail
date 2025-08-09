
import { useNavigate } from "react-router";
import IconComponent from "../../atoms/Icon";
import GithubLogo from "../../../../src/assets/githubLogo.svg";
import GoogleLogo from "../../../../src/assets/googleLogo.svg";
import CREATE_USER from "../../../services";
import { useState } from "react";
import Swal from "sweetalert2";
const SignUp = () => {
  const [formData, setFormData] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();
const handleSignUp = async () => {
  const { name, email, password } = formData;

  try {
    const res = await CREATE_USER({ name, email, password });
    console.log("User created:", res);
    Swal.fire("Success", "User created successfully", "success");
    navigate("/"); // redirect after success
  } catch (err) {
    console.error("Signup failed:", err);
  }
};

  const handleSignIn = () => {
    navigate("/");
  };
  const handleSignInWithGithub = () => {};
  const handleSignInWithGoogle = () => {};
  return (
    <div className="bg-gray-100 h-screen box-border overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="flex-center text-3xl font-bold text-gray-900 text-center">
            Sign Up
          </h1>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md -space-y-px">
              <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={handleSignUp}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>

          <button
            onClick={handleSignInWithGoogle}
            className="group relative w-full flex justify-center py-2 px-4 border border-rounded text-sm font-medium rounded-md text-black hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 gap-2"
          >
            <IconComponent src={GoogleLogo} />
            Sign In with Google
          </button>
          <button
            onClick={handleSignInWithGithub}
           className="group relative w-full flex justify-center py-2 px-4 border border-rounded text-sm font-medium rounded-md text-black hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 gap-2"
            >
            <IconComponent src={GithubLogo} />
            Sign In with Github
          </button>
          <div>
            {/* sign already have an account */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                onClick={handleSignIn}
                className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
