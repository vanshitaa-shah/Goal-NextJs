import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Share page</div>
      <p>
        <Link href="/meals">Go to Meals</Link>
      </p>
    </>
  );
};

export default page;
