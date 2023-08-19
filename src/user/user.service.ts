import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserService = async () => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};

export const addUserService = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};
