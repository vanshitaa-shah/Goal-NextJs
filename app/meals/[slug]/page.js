import { getMeal } from "@/lib/meals";
import Styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealsDetailPage = ({ params }) => {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={Styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={Styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={Styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={Styles.instructions}>{meal.instructions}</p>
      </main>
    </>
  );
};

export default MealsDetailPage;
