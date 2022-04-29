import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthors = async () => {
  // Code goes here

  console.log("Author only");

  // Code goes here

  console.log("Author with certain fields only");

  // Code goes here

  console.log("Author with posts");

  // Code goes here

  console.log("Author with posts & tags");
};

getAuthors()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
