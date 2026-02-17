import { db } from "./firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function saveFormSubmission(data) {
    try {
        const docRef = await addDoc(collection(db, "notifications"), {
            ...data,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        return { success: true, id: docRef.id };
    } catch (e) {
        console.error("Error adding document: ", e);
        return { success: false, error: e };
    }
}
