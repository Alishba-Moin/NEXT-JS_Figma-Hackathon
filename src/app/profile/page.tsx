"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data: session }: any = useSession();

  // Determine the provider name
  const provider = session?.user?.image?.includes("github")
    ? "GitHub"
    : session?.user?.image?.includes("google")
    ? "Google"
    : "Email";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center">
          <Image
            src={session?.user?.image || "/default-avatar.jpg"}
            width={100}
            height={100}
            className="rounded-full border border-gray-300 shadow-lg"
            alt="Profile Avatar"
          />
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            {session ? session.user?.name || "User" : "Guest"}
          </h2>
          <p className="text-gray-600">{session?.user?.email || "No email"}</p>
          {session && (
            <p className="text-sm text-gray-500 mt-1">
              Logged in with: <span className="font-semibold">{provider}</span>
            </p>
          )}
        </div>

        {/* Profile Actions */}
        <div className="mt-6 flex flex-col gap-4">
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Log out
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block text-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
