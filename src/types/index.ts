import type { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  name: string;
  email: string;
  imgUrl: string;
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}