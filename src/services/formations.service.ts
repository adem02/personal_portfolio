import { orderBy } from "firebase/firestore";
import { addDocument, deleteDocument, listDocuments, updateDocument } from "./firestore.service";
import type { IFirestoreFormation, WithId } from "../types";

const COLLECTION = "formations";

export const getFormations = (): Promise<WithId<IFirestoreFormation>[]> =>
  listDocuments<IFirestoreFormation>(COLLECTION, [orderBy("order", "asc")]);

export const addFormation = (data: IFirestoreFormation): Promise<string> =>
  addDocument<IFirestoreFormation>(COLLECTION, data);

export const updateFormation = (id: string, data: Partial<IFirestoreFormation>): Promise<void> =>
  updateDocument<IFirestoreFormation>(COLLECTION, id, data);

export const deleteFormation = (id: string): Promise<void> =>
  deleteDocument(COLLECTION, id);
