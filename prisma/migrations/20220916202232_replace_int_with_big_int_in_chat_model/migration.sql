/*
  Warnings:

  - The primary key for the `Chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `telegramId` on the `Chat` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chat" (
    "telegramId" BIGINT NOT NULL PRIMARY KEY,
    "username" TEXT
);
INSERT INTO "new_Chat" ("telegramId", "username") SELECT "telegramId", "username" FROM "Chat";
DROP TABLE "Chat";
ALTER TABLE "new_Chat" RENAME TO "Chat";
CREATE UNIQUE INDEX "Chat_telegramId_key" ON "Chat"("telegramId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
