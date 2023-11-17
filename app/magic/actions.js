"use server";

import { query } from "@/app/lib/db";

export async function Create(formData) {
  try {
    const value = formData.get("email");
    console.log(value);

    const user = await query({
      query: "INSERT INTO users (email) VALUES (?)",
      values: [value],
    });

    if (user) {
      console.log(user);
    }
    if (!user) {
      console.log("user issue");
    }
  } catch (e) {
    console.log(e);
  }
}

export async function Get() {
  "use server";
  const users = await query({
    query: "SELECT * FROM users",
    values: [],
  });

  return (
    <>
      <div className="flex justify-evenly ">
        {users.map((val) => (
          <span className="p-5" key={val.id}>
            <p>{val.id}</p>
            <p>{val.email}</p>
          </span>
        ))}
      </div>
    </>
  );
}
