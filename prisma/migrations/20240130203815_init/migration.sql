-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "primaryHomeAddressId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkLocation" (
    "id" SERIAL NOT NULL,
    "addressType" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" CHAR(2) NOT NULL,
    "zipCode" CHAR(5) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WorkLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyDeclaration" (
    "id" SERIAL NOT NULL,
    "declarationMonth" TEXT NOT NULL,
    "workedDays" INTEGER NOT NULL,
    "mostWorkedFromAddressId" INTEGER NOT NULL,
    "distanceFromHome" DOUBLE PRECISION NOT NULL,
    "isEligibleForFMB" BOOLEAN NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "workLocationId" INTEGER,

    CONSTRAINT "MonthlyDeclaration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmployeeToWorkLocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WorkLocation_addressType_key" ON "WorkLocation"("addressType");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyDeclaration_declarationMonth_key" ON "MonthlyDeclaration"("declarationMonth");

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToWorkLocation_AB_unique" ON "_EmployeeToWorkLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToWorkLocation_B_index" ON "_EmployeeToWorkLocation"("B");

-- AddForeignKey
ALTER TABLE "MonthlyDeclaration" ADD CONSTRAINT "MonthlyDeclaration_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyDeclaration" ADD CONSTRAINT "MonthlyDeclaration_workLocationId_fkey" FOREIGN KEY ("workLocationId") REFERENCES "WorkLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToWorkLocation" ADD CONSTRAINT "_EmployeeToWorkLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToWorkLocation" ADD CONSTRAINT "_EmployeeToWorkLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
