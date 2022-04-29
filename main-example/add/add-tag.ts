import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addTag = async () => {
  // Code goes here

  console.log("Tag added ✅");

  // Code goes here

  console.log("Tags added ✅");
};

addTag()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
