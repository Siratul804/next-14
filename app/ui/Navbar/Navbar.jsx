import { auth, signOut } from "@/app/auth";
const Navbar = async () => {
  const { user } = await auth();
  // console.log(user);
  return (
    <>
      <section className="flex justify-evenly ">
        <div className="text-purple-500">{user.username}</div>
        <i>{user.role}</i>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="bg-red-500 p-2 rounded-full ">logout</button>
        </form>
      </section>
    </>
  );
};

export default Navbar;
