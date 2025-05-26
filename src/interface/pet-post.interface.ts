import { User } from "./user.interface";

export interface PetPost {
  id:string;
  title:string;
  description:string;
  type:PostType;
  species: Species;
  breed?: string | null;
  age?: string | null;
  location:string;
  image: string[];
  status: PostStatus;
  user: {
    name:string;
    id:string;
  };
}

export interface PetImages {
  id:number;
  url:string;
}

export type PostType = "LOST" |"FOUND" |"ADOPTION";
export type Species = "PERRO" | "GATO" | "OTRO";
export type PostStatus = "ACTIVE" | "RESOLVED" | "CLOSED";