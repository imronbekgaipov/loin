import { useRef } from "react";
import SignupVideo from "../videos/signup-video.mp4";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogin } from "../hooks/useLogin";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const { spinner } = useGlobalContext();
  const { isPending, error, signup } = useSignUp();
  const { enterWithGoogle } = useLogin();
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    signup(name.current.value, email.current.value, password.current.value);
    e.preventDefault();
    form.current.reset();
  };
  const handleEnterWithGoogle = (e) => {
    e.preventDefault();
    enterWithGoogle();
  };

  return (
    <div
      className="relative h-screen
    "
    >
      <video
        className="absolute z-[-1] h-screen w-screen object-cover"
        src={SignupVideo}
        muted
        autoPlay
        loop
      ></video>
      <div className="grid h-screen w-full place-items-center bg-black bg-opacity-60">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className=" w-full max-w-[400px] rounded-[20px] bg-slate-100 bg-opacity-30"
        >
          <div className="p-[32px]">
            <h1 className="mb-4 text-[32px] text-gray-900">SignUp</h1>
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="email"
            >
              Your name
            </label>
            <input
              className="mb-4 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-lg text-gray-900 outline-[3px] focus:outline-dotted focus:outline-[3px] focus:outline-blue-600"
              type="text"
              id="email"
              autoComplete="off"
              required
              ref={name}
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" text-gray-900outline-[3px] mb-4  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-lg focus:outline-dotted focus:outline-[3px] focus:outline-blue-600 "
              type="email"
              id="email"
              autoComplete="off"
              required
              ref={email}
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-lg text-gray-900 focus:outline-dotted focus:outline-[3px] focus:outline-blue-600"
              type="password"
              id="password"
              required
              ref={password}
            />
            <button
              onClick={handleEnterWithGoogle}
              className="mb-6 flex w-full items-center
            justify-center gap-2 rounded-lg bg-neutral-100 py-3 text-lg font-medium text-black"
            >
              <FcGoogle /> Google
            </button>
            <button className="mb-6 w-full rounded-lg bg-blue-700 py-[14px] text-lg font-light text-white">
              <div className="flex items-center justify-center gap-3">
                {isPending ? spinner() : ""} Signup
              </div>
            </button>

            <div className="flex justify-center  gap-2">
              <span className="text-gray-900 ">Do you have an account?</span>
              <Link to={"/login"}>
                <button className="text-sky-600">Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
