import React from "react";
import Link from "next/link";
import Styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getMeals();
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
      <main className={Styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
