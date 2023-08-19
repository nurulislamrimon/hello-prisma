import { PrismaClient, profile } from "@prisma/client";

const prisma = new PrismaClient();

export const getProfileService = async () => {
  const result = await prisma.profile.findMany({
    include: { user: true },
  });
  return result;
};

export const addProfileService = async (data: profile): Promise<profile> => {
  const result = await prisma.profile.create({ data });
  return result;
};
