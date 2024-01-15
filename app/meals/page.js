import React from "react";
import Link from "next/link";
import Styles from "./page.module.css";

const MealsPage = () => {
  return (
    <>
      <header className={Styles.header}>
        <h1>
          Delicious meals, created
          <span className={Styles.highlight}>by you</span>
        </h1>

        <p>
          Choose your favourite recipe and cook it yourself.It is easy and fun!
        </p>
        <p className="Styles cta">
          <Link href={"meals/share"}>Share Your Faavorite Recipe</Link>
        </p>
      </header>
      <main className={Styles.main}></main>
    </>
  );
};

export default MealsPage;
