import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; 

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  return session?.user || null;
}
