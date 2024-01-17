"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

//server action using use server directive
export const shareMeal = async (prevState, formdata) => {
  const meal = {
    title: formdata.get("title"),
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
  };

  //returning a response in case of invalid inputs
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);
  // revalidatePath("/meals", "layout");
  revalidatePath("/meals");
  redirect("/meals");
};
