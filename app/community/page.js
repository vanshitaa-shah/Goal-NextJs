import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>community page</div>
      <p>
        <Link href="/meals">meals</Link>
      </p>

      <p>
        <Link href="/">home</Link>
      </p>
    </>
  );
};

export default page;
