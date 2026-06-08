import type { IContact, IExperience, IFormation, IProject } from "./domain.types";

export type WithId<T> = T & { id: string };

export interface IFirestoreProject extends IProject {
  order: number;
}

export interface IFirestoreExperience extends IExperience {
  order: number;
}

export interface IFirestoreFormation extends IFormation {
  order: number;
}

/**
 * In Firestore, icons are stored as string names (e.g. "FaNodeJs")
 * and resolved to actual IconType components on the client via iconRegistry.
 */
export interface IFirestoreTechIcon {
  iconName: string;
  color: string;
  tooltip?: string;
  order: number;
}

export interface IFirestoreContact extends IContact {}
