import Link from "next/link";

const index = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/users"}>All Users</Link>
    </>
  );
};

export default index;
