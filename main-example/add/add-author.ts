import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addAuthor = async () => {
  // Code goes here

  console.log("Author added ✅");

  // Code goes here

  console.log("Author with posts added ✅");

  // Code goes here

  console.log("Author with posts & tags added ✅");
};

addAuthor()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
