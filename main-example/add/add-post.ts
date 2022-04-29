import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addPost = async () => {
  // Code goes here

  console.log("Post added ✅");

  // Code goes here

  console.log("Posts with tags added ✅");
};

addPost()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
