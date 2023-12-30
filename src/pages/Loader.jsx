import React from "react";
import { useCollection } from "../hooks/useCollection";
import Recipes from "../components/Recipes";
import Loader from "./Loader";

function Home() {
  const { documents: recipies, isPending, error } = useCollection("resipies");
  console.log(isPending);
  return (
    <div className="max-container">
      {isPending && <Loader />}
      <Recipes recipies={recipies} />
    </div>
  );
}

export default Home;
