import { orderBy } from "firebase/firestore";
import { addDocument, deleteDocument, listDocuments, updateDocument } from "./firestore.service";
import type { IFirestoreProject, WithId } from "../types";

const COLLECTION = "projects";

export const getProjects = (): Promise<WithId<IFirestoreProject>[]> =>
  listDocuments<IFirestoreProject>(COLLECTION, [orderBy("order", "asc")]);

export const addProject = (data: IFirestoreProject): Promise<string> =>
  addDocument<IFirestoreProject>(COLLECTION, data);

export const updateProject = (id: string, data: Partial<IFirestoreProject>): Promise<void> =>
  updateDocument<IFirestoreProject>(COLLECTION, id, data);

export const deleteProject = (id: string): Promise<void> =>
  deleteDocument(COLLECTION, id);

