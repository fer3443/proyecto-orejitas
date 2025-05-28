"use client";

import { createUpdatePetPost } from "@/actions";
import { PetPostForm } from "@/components";
import { toast } from "sonner";

export const NewPetPost = () => {
  return (
    <PetPostForm
      onSubmit={async (values) => {
        toast.promise(createUpdatePetPost(values), {
          loading: "Creando publicación...",
          success: "Publicacion creada con éxito",
          error: (error) => {
            console.log(error);
            return "Error al crear publicación";
          },
        });
      }}
    />
  );
};
