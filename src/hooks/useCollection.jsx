import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection(c) {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const ref = collection(db, c);
  useEffect(() => {
    setIspending(true);
    const insup = onSnapshot(
      ref,
      (snapshot) => {
        const results = [];
        snapshot.docs.forEach((item) => {
          results.push({ id: item.id, ...item.data() });
        });
        setIspending(false);
        setError(null);
        setDocuments(results);
      },
      (error) => {
        isPending(false);
        setError(error);
        console.log(error);
      }
    );

    return () => insup();
  }, [c]);

  return { documents, error, isPending };
}
