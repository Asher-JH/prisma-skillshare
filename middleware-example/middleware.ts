import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export const encryptPassword: Prisma.Middleware = async (params, next) => {
  if (
    params.model === "User" &&
    (params.action === "create" || params.action === "update")
  ) {
    const { data, ...otherArgs } = params.args;
    const { password, ...otherDataArgs } = data;

    if (!password) {
      return next(params);
    }

    const encryptedPassword = await bcrypt.hash(
      password,
      Number(process.env.HASH_ROUNDS)
    );

    return next({
      ...params,
      args: {
        ...otherArgs,
        data: {
          ...otherDataArgs,
          password: encryptedPassword,
        },
      },
    });
  }

  return next(params);
};
