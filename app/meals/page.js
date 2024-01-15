import React, { Suspense } from "react";
import Link from "next/link";
import Styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const FetchMeals = async () => {
  const meals = await getMeals();
  // throw new Error("Loading failed");
  return <MealsGrid meals={meals} />;
};

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
        <p className={Styles.cta}>
          <Link href={"meals/share"}>Share Your Faavorite Recipe</Link>
        </p>
      </header>
      <main className={Styles.main}>
        <Suspense
          fallback={<p className={Styles.loading}>Fetching Data ...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
