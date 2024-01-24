import Link from "next/link";

const index = () => {
  return (
    <>
      <h1>Home Page</h1>
      {/* now no new req to this pages will be created, initial load will contain chunk and json(if fetching data) for this routes */}

      <Link href={"/users"}>All Users</Link>
      <Link href={"/blog"}>All Blogs</Link>
    </>
  );
};

export default index;
