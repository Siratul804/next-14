// import { auth } from "@/app/auth";
import Link from "next/link";
const page = async () => {
  // const { user } = await auth();

  // console.log(user);
  return (
    <>
      <div className="bg-white text-center py-4 lg:px-4  ">
        {/* {user.role === "grit" ? ( */}
        <>
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              New
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              Successfully Login To Admin
            </span>
          </div>
          <Link href="/dashboard/user"> See Users </Link>
          <br />
        </>
        {/* ) : ( */}
        <>
          <br />
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              New
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              Successfully Login To User
            </span>
          </div>
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default page;
