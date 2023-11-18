import { auth } from "@/app/auth";
const layout = async ({ children }) => {
  const { user } = await auth();
  // need to create admin & user layout
  return (
    <>
      {user.role === "gym" ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <>Your are not User</>
      )}
    </>
  );
};

export default layout;
