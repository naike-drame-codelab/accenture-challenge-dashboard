import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const employee = await prisma.employee.upsert({
    where: { email: "johndoe@employee.com" },
    update: {},
    create: {
      email: "johndoe@employee.com",
      firstName: "John",
      lastName: "Doe",
      password: "password",
      role: "EMPLOYEE",
      primaryHomeAddressId: 1,
      },
    });
  console.log({ employee });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });