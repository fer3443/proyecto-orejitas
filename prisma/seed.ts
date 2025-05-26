import { hash } from "bcryptjs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.imagePets.deleteMany();
  await prisma.petPost.deleteMany();
  await prisma.user.deleteMany();
  
  const password = await hash("Gordaluna123", 10);
  // Crear usuario de prueba
  const user = await prisma.user.create({
    data: {
      name: "Fer Dev",
      email: "fer@mail.com",
      password,
      role: "USER",
      isBlocked: false,
    }
  });

  // Creamos una publicación de mascota en adopción
  await prisma.petPost.create({
    data: {
      title: "Cachorrita busca hogar",
      description: "Encontramos esta perrita cerca del parque, es muy dulce y está en buen estado.",
      type: "FOUND",
      species: "PERRO",
      breed: "Labrador",
      age: "6 meses",
      location: "Buenos Aires, Palermo",
      status: "ACTIVE",
      userId: user.id,
      image: {
        create: [
          {
            url: "https://placedog.net/500", // Imagen de prueba
          },
          {
            url: "https://placedog.net/501",
          },
        ],
      },
    },
  });

  // Otro usuario admin con post de adopción
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
      password: "adminhashedpassword",
      role: "ADMIN",
    },
  });

  await prisma.petPost.create({
    data: {
      title: "Gatito para adopción",
      description: "Fue rescatado de la calle, es muy cariñoso y limpio.",
      type: "ADOPTION",
      species: "GATO",
      breed: "Siamés",
      age: "1 año",
      location: "CABA, Villa Urquiza",
      status: "ACTIVE",
      userId: admin.id,
      image: {
        create: [
          {
            url: "https://placekitten.com/500/500",
          },
        ],
      },
    },
  });

  console.log('🌱 Seed completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });