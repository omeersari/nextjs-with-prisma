import Link from "next/link";
import prisma from "../lib/prisma";

const Page = async () => {
  return (
    <div className="max-w-[600px] mx-auto mt-10">
      <form
        action=""
        className="flex flex-col gap-4 justify-center border-2 p-4 border-teal-300 border-solid rounded-md"
      >
        <h2 className="text-center">Welcome to the Next.js Auth with Prisma</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button
          type="submit"
          className="border border-teal-300 rounded-lg px-4 py-1 mx-auto hover:bg-teal-600 hover:text-white"
        >
          Login
        </button>
      </form>
      <div className="flex flex-col items-center gap-4 border-2 p-4 border-teal-300 mt-10 rounded-md">
        <p>
          Forgot your password?{" "}
          <Link href="/reset-password" className="text-blue-500">
            Reset it here.
          </Link>
        </p>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
