"use client";

import { createPetPost } from "@/actions";
import { PetPostForm } from "@/components";
import { toast } from "sonner";

export const NewPetPost = () => {
  return (
    <PetPostForm
      onSubmit={async (values) => {
        toast.promise(createPetPost(values), {
          loading: "Creando publicación...",
          success: (resp) => {
            return resp.message;
          },
          error: (error) => {
            console.log(error);
            return "Error al crear publicación";
          },
        });
      }}
    />
  );
};
