import { hash } from "bcryptjs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  
  await prisma.petPost.deleteMany();
  await prisma.user.deleteMany();
  const password = await hash("Gordaluna123", 10);
  // Crear usuario de prueba
  const user = await prisma.user.create({
    data: {
      name: "Fer Dev",
      email: "fer@mail.com",
      password,
      role: "ADMIN",
      isBlocked: false,
    }
  });

   await prisma.petPost.createMany({
    data: [
      {
        title: 'Perro encontrado en el parque',
        description: 'Labrador negro con collar rojo, muy amigable.',
        type: 'FOUND',
        location: 'Plaza San Martín, CABA',
        image: 'https://placekitten.com/400/300',
        status: 'ACTIVE',
        userId: user.id,
      },
      {
        title: 'Busco hogar para gatita',
        description: 'Gatita rescatada de la calle, tiene 3 meses y es muy dulce.',
        type: 'ADOPTION',
        location: 'Rosario, Santa Fe',
        image: 'https://placekitten.com/401/300',
        status: 'ACTIVE',
        userId: user.id,
      },
      {
        title: 'Se perdió mi perro Max',
        description: 'Golden retriever, responde al nombre Max. Se perdió el 15/05.',
        type: 'LOST',
        location: 'Villa Urquiza, CABA',
        image: 'https://placekitten.com/402/300',
        status: 'ACTIVE',
        userId: user.id,
      },
    ],
  });
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Fer Dev',
  //     email: 'fer@example.com',
  //     password: password,
  //     role: 'ADMIN'
  //      // en un proyecto real, debería estar hasheado
  //   },
  // });

  // Crear publicaciones de mascotas
  // await prisma.petPost.createMany({
  //   data: [
  //     {
  //       title: 'Perro perdido en el parque',
  //       description: 'Es un labrador negro, muy amistoso.',
  //       image: 'https://images.unsplash.com/photo-1', // imagen fake
  //       status: 'lost',
  //       petType: 'dog',
  //       location: 'Córdoba Capital',
  //       userId: user.id,
  //     },
  //     {
  //       title: 'Gatito encontrado',
  //       description: 'Tiene collar rojo y es muy cariñoso.',
  //       image: 'https://images.unsplash.com/photo-2',
  //       status: 'found',
  //       petType: 'cat',
  //       location: 'Palermo, Buenos Aires',
  //       userId: user.id,
  //     },
  //   ],
  // });

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