import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
export function useAddedDoc() {
  const navigate = useNavigate();
  const addNewDoc = (document, col) => {
    addDoc(collection(db, col), {
      ...document,
    })
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return { addNewDoc };
}
