-- AlterEnum: Add WARRIOR and ROGUE to AdventurerType
ALTER TYPE "AdventurerType" ADD VALUE 'ROGUE';
ALTER TYPE "AdventurerType" ADD VALUE 'WARRIOR';

-- AlterEnum: Replace RETIRED with SLEEPING in AdventurerStatus
-- First, remove the default temporarily
ALTER TABLE "Adventurer" ALTER COLUMN status DROP DEFAULT;

-- Recreate the enum with SLEEPING instead of RETIRED
ALTER TYPE "AdventurerStatus" RENAME TO "AdventurerStatus_old";
CREATE TYPE "AdventurerStatus" AS ENUM ('AVAILABLE', 'ON_QUEST', 'INJURED', 'DEAD', 'SLEEPING');

-- Update the column, converting RETIRED to SLEEPING if any exist
ALTER TABLE "Adventurer" 
  ALTER COLUMN status TYPE "AdventurerStatus" 
  USING (
    CASE 
      WHEN status::text = 'RETIRED' THEN 'SLEEPING'::"AdventurerStatus"
      ELSE status::text::"AdventurerStatus"
    END
  );

-- Restore the default with the new enum
ALTER TABLE "Adventurer" ALTER COLUMN status SET DEFAULT 'AVAILABLE'::"AdventurerStatus";

DROP TYPE "AdventurerStatus_old";
