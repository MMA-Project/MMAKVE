-- Add displayName column to User table for storing the display name separate from the login username
ALTER TABLE "User" ADD COLUMN "displayName" TEXT NOT NULL DEFAULT '';
