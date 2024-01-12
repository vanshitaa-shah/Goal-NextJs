import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Meal page</div>
      <p>
        <Link href="meals/share">share</Link>
      </p>
      <p>
        <Link href={"/"}>Go to Home</Link>
      </p>
      <div className="meals">
        <span>
          <Link href={"meals/meal-1"}>meal-1</Link>
        </span>
        <span>
          <Link href={"meals/meal-2"}>meal-2</Link>
        </span>
      </div>
    </>
  );
};

export default page;
