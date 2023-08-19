import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const postUser = await prisma.profile.create({
    data: {
      bio: "Hey, This is Nurul Islam Rimon.",

      userId: 1,
    },
  });
  console.log(postUser);

  // const data = await prisma.user.findMany();
  // console.log(data);
}

main().catch((e) => console.log(e));
