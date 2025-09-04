/*
  Warnings:

  - Added the required column `category` to the `titles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_titles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "wonYear" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_titles" ("description", "id", "imageUrl", "name", "wonYear") SELECT "description", "id", "imageUrl", "name", "wonYear" FROM "titles";
DROP TABLE "titles";
ALTER TABLE "new_titles" RENAME TO "titles";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
