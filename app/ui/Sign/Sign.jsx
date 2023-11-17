"use client";
import { addUser } from "@/app/lib/actions";
import { useFormState } from "react-dom";
const Sign = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div>
      <>
        <section className="flex justify-center items-center h-screen">
          <div className="w-full max-w-xs">
            <h1 className="py-2 font-bold font-serif ">Sign Up </h1>
            <form className="" action={formAction}>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="username"
                name="username"
              />
              <div className="py-2"></div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="nickname"
                name="nickname"
              />
              <div className="py-2"></div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="email"
                name="email"
              />
              <div className="py-2"></div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="password"
                name="password"
              />
              <div className="py-2"></div>
              <select name="role" className="p-2">
                <option value="grit">grit</option>
                <option value="gym">gym</option>
              </select>
              <div className="py-2"></div>
              <main className="flex items-center justify-center ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </main>
              <div className="flex justify-center py-2 text-red-700 ">
                {state && state}
              </div>
            </form>
          </div>
        </section>
      </>
    </div>
  );
};

export default Sign;
