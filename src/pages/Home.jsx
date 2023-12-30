import React from "react";
import { useCollection } from "../hooks/useCollection";
import Recipes from "../components/Recipes";
import Loader from "./Loader";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();
  console.log(user);
  const {
    documents: recipies,
    isPending,
    error,
  } = useCollection("resipies", ["userId", "==", user.uid]);
  console.log(isPending);
  return (
    <div className="max-container">
      {isPending && <Loader />}
      <Recipes recipies={recipies} />
    </div>
  );
}

export default Home;
