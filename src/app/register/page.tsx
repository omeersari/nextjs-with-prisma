import Link from "next/link";

const Register = () => {
  return (
    <div className="max-w-[600px] mx-auto mt-10">
      <form
        action=""
        className="flex flex-col gap-4 justify-center border-2 p-4 border-teal-300 border-solid rounded-md"
      >
        <h2 className="text-center">Register</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button
          type="submit"
          className="border border-teal-300 rounded-lg px-4 py-1 mx-auto hover:bg-teal-600 hover:text-white"
        >
          Register
        </button>
      </form>
      <p className="mt-4"><Link href='/' className="text-blue-500 mt-10"> Back to login</Link></p>
      
    </div>
  );
};

export default Register;
