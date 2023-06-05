import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="max-w-[600px] mx-auto mt-10">
      <form
        action=""
        className="flex flex-col gap-4 justify-center border-2 p-4 border-teal-300 border-solid rounded-md"
      >
        <h2>Reset your password</h2>
        <input type="text" placeholder="Enter your email" />
        <button type="submit" className="border border-teal-300 rounded-lg px-4 py-1 mx-auto hover:bg-teal-600 hover:text-white">Send</button>
      </form>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 mt-10">
          {" "}
          Back to login
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
