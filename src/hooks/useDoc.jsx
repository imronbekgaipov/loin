import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
export function useDoc(id) {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getRecipe = async () => {
      setIspending(true);
      const docRef = doc(db, "resipies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRecipe(docSnap.data());
        setIspending(false);
        setError(null);
      } else {
        toast.error("No such document!");
        setIspending(false);
        setError("No such document!");
      }
    };
    getRecipe();
  }, [id]);

  return { recipe, isPending, error };
}
