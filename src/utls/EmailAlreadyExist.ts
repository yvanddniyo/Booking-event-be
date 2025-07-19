import prisma from "../config/db";

export const EmailAlreadyExist = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
    if(user){
      return true;
    }
  return false;
};