/*
  Warnings:

  - Added the required column `year` to the `legends` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_legends" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "shortText" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);
INSERT INTO "new_legends" ("id", "imageUrl", "name", "number", "position", "shortText") SELECT "id", "imageUrl", "name", "number", "position", "shortText" FROM "legends";
DROP TABLE "legends";
ALTER TABLE "new_legends" RENAME TO "legends";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
