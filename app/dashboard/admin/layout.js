import { auth } from "@/app/auth";
const layout = async ({ children }) => {
  const { user } = await auth();
  return (
    <>
      {user.role === "grit" ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <>You Not Admin</>
      )}
    </>
  );
};

export default layout;
