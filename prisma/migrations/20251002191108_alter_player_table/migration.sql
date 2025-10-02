/*
  Warnings:

  - Added the required column `birthDate` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthDate" TEXT NOT NULL
);
INSERT INTO "new_players" ("age", "height", "id", "imageUrl", "name", "number", "position") SELECT "age", "height", "id", "imageUrl", "name", "number", "position" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
