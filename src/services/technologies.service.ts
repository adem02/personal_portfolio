import { orderBy } from "firebase/firestore";
import type { IconType } from "react-icons";
import { addDocument, deleteDocument, listDocuments, updateDocument } from "./firestore.service";
import type { IFirestoreTechIcon, ITechIcon, WithId } from "../types";
import { iconRegistry } from "../lib/iconRegistry";

const COLLECTION = "technologies";

export const getTechnologies = (): Promise<WithId<IFirestoreTechIcon>[]> =>
  listDocuments<IFirestoreTechIcon>(COLLECTION, [orderBy("order", "asc")]);

export const addTechnology = (data: IFirestoreTechIcon): Promise<string> =>
  addDocument<IFirestoreTechIcon>(COLLECTION, data);

export const updateTechnology = (id: string, data: Partial<IFirestoreTechIcon>): Promise<void> =>
  updateDocument<IFirestoreTechIcon>(COLLECTION, id, data);

export const deleteTechnology = (id: string): Promise<void> =>
  deleteDocument(COLLECTION, id);

/** Resolves Firestore tech icons to UI-ready ITechIcon (with actual IconType). */
export const resolveTechIcons = (items: WithId<IFirestoreTechIcon>[]): ITechIcon[] =>
  items.reduce<ITechIcon[]>((acc, { iconName, color, tooltip }) => {
    const icon = iconRegistry[iconName] as IconType | undefined;
    if (icon) acc.push({ icon, color, tooltip });
    return acc;
  }, []);
