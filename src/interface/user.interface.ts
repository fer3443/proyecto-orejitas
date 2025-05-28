import { PetPost } from "./pet-post.interface";

export interface User {
  id:string;
  name:string
  email:string;
  password:string;
  role:UserRole; // Enum: ADMIN o USER
  isBlocked:boolean; // para suspender cuentas
  posts: PetPost[]  // relación 1:N con PetPost
  createdAt: string;
}

enum UserRole {
  ADMIN = "admin",
  USER = "user"
}