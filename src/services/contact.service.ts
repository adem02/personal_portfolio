import { getDocument, setDocument } from "./firestore.service";
import type { IFirestoreContact, WithId } from "../types";

const COLLECTION = "contact";
const DOC_ID = "main";

export const getContact = (): Promise<WithId<IFirestoreContact> | null> =>
  getDocument<IFirestoreContact>(COLLECTION, DOC_ID);

export const setContact = (data: IFirestoreContact): Promise<void> =>
  setDocument<IFirestoreContact>(COLLECTION, DOC_ID, data);
