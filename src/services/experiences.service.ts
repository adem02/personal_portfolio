import { orderBy } from "firebase/firestore";
import { addDocument, deleteDocument, listDocuments, updateDocument } from "./firestore.service";
import type { IFirestoreExperience, WithId } from "../types";

const COLLECTION = "experiences";

export const getExperiences = (): Promise<WithId<IFirestoreExperience>[]> =>
  listDocuments<IFirestoreExperience>(COLLECTION, [orderBy("order", "asc")]);

export const addExperience = (data: IFirestoreExperience): Promise<string> =>
  addDocument<IFirestoreExperience>(COLLECTION, data);

export const updateExperience = (id: string, data: Partial<IFirestoreExperience>): Promise<void> =>
  updateDocument<IFirestoreExperience>(COLLECTION, id, data);

export const deleteExperience = (id: string): Promise<void> =>
  deleteDocument(COLLECTION, id);
