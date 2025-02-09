import { client } from "@/sanity/lib/client"; 
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  // Check if user already exists in Sanity
  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email]`,
    { email }
  );

  if (existingUser.length > 0) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user document in Sanity
  const newUser = {
    _type: 'user', // Reference to the schema type
    email,
    password: hashedPassword, // Store hashed password
  };

  try {
    // Create the user in Sanity
    await client.create(newUser);
    return new NextResponse("User registered successfully", { status: 200 });
  } catch (err) {
    return new NextResponse("Error registering user", { status: 500 });
  }
};
