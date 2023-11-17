"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <h1 className="py-2 font-bold font-serif ">Sign In </h1>
          <form className="" action={formAction}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email"
              name="email"
            />
            <div className="py-2"></div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="password"
              name="password"
            />
            <div className="py-2"></div>
            <main className="flex items-center justify-center ">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </main>
            {state && state}
            <Link href="/sign">
              <p className="text-red-500 text-sm py-2"> Did't SignUp? </p>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
