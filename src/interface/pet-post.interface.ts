import { User } from "./user.interface";

export interface PetPost {
  id:string;
  title:string;
  description:string;
  image: string;
  status: PostStatus;
  petType:PetType;
  location:string;
  resolved:boolean;
  user:User;
  createdAt:string;
}

export type PostStatus = "lost" |"found" |"adoption";
export type PetType = "dog" | "cat" | "other";