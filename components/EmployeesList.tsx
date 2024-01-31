import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import { prisma } from "@/lib/prisma";

export default async function EmployeesList() {
    const employees = await prisma.employee.findMany({
        where: {
          role: 'employee',
        },
      });

    
    return (
        <Table>
  <TableCaption>A list of all of the employees.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>First Name</TableHead>
      <TableHead>Last Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {employees.map((employee) => (
        <TableRow key={employee?.id}>
            <TableCell className="font-medium">{employee?.id}</TableCell>
            <TableCell>{employee?.firstName}</TableCell>
            <TableCell>{employee?.lastName}</TableCell>
            <TableCell>{employee?.role}</TableCell>
            <TableCell className="text-right">pending</TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>

    )
}
