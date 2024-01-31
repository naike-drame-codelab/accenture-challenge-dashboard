import { prisma } from "@/lib/prisma";

export default async function Test() {
  const employee = await prisma.employee.findFirst({
    where: {
      role: 'employee',
    },
  });

  return (
    <div>
      <h1>Hello {employee?.firstName} {employee?.lastName}</h1>
      <p>Email: {employee?.email}</p>
      <p>You have the role of: {employee?.role}.</p>
    </div>
  );
}
