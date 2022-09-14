-- CreateTable
CREATE TABLE "Chat" (
    "telegramId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_telegramId_key" ON "Chat"("telegramId");
