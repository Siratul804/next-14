import Navbar from "../ui/Navbar/Navbar";
import { auth } from "@/app/auth";
const layout = async ({ children }) => {
  const { user } = await auth();
  // need to create admin & user layout
  return (
    <>
      <Navbar data={user} />
      <main>{children}</main>
    </>
  );
};

export default layout;
