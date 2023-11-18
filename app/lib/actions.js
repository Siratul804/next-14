"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";

export const addUser = async (prevState, formData) => {
  const { username, nickname, email, password, role } =
    Object.fromEntries(formData);

  if (!username || !nickname || !email || !password || !role) {
    return "Please Fill The Form";
  }

  const user = await query({
    query: "SELECT email FROM users WHERE email = (?)",
    values: [email],
  });

  if (user[0]) {
    return "User Already Exits";
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const newUser = await query({
    query:
      "INSERT INTO users (email, password, username, nickname, role) VALUES (?, ?, ?, ?, ?)",
    values: [email, hasedPassword, username, nickname, role],
  });

  if (!newUser) {
    return "Faile to Singup";
  }
  if (newUser) {
    redirect("/login");
  }
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
};
