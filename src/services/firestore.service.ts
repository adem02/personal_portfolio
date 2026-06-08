import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  query,
  type DocumentData,
  type QueryConstraint,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { WithId } from "../types";

export const listDocuments = async <T extends DocumentData>(
  col: string,
  constraints: QueryConstraint[] = []
): Promise<WithId<T>[]> => {
  const q = query(collection(db, col), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as WithId<T>));
};

export const getDocument = async <T extends DocumentData>(
  col: string,
  id: string
): Promise<WithId<T> | null> => {
  const snapshot = await getDoc(doc(db, col, id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as WithId<T>;
};

export const addDocument = async <T extends DocumentData>(
  col: string,
  data: T
): Promise<string> => {
  const ref = await addDoc(collection(db, col), data);
  return ref.id;
};

export const setDocument = async <T extends DocumentData>(
  col: string,
  id: string,
  data: T
): Promise<void> => {
  await setDoc(doc(db, col, id), data);
};

export const updateDocument = async <T extends DocumentData>(
  col: string,
  id: string,
  data: Partial<T>
): Promise<void> => {
  await updateDoc(doc(db, col, id), data as DocumentData);
};

export const deleteDocument = async (col: string, id: string): Promise<void> => {
  await deleteDoc(doc(db, col, id));
};
