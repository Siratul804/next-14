import { GetData } from "@/app/lib/data";
const User = async () => {
  const data = await GetData();
  return (
    <>
      {data.map((val) => (
        <>
          <h1>{val.username}</h1>
          <h2>{val.email}</h2>
          <h3>{val.role}</h3>
          <h4>{val.id}</h4>
        </>
      ))}
    </>
  );
};

export default User;
