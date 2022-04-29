import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.user.create({
    data: {
      email: "superadmin@work.com",
      password: "a-hashed-password",
      role: UserRole.superadmin,
    },
  });
};

seed()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
