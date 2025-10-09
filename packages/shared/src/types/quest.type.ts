import { Adventurer, AdventurerType } from "./adventurer.type";

export enum QuestStatus {
  WAITING_APPROVAL = "waiting_approval",
  APPROVED = "approved",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  FAILED = "failed",
}

export type Quest = {
  id: string;
  requester_id: string;
  title: string;
  description: string;
  date_limit: number;
  estimated_time: number;
  prime: number;
  status: QuestStatus;

  options?: {
    profils: AdventurerType[];
    start_date: number;
    end_date: number;
    xp_required: number;
    assignements: QuestAssignement[];
  };
};

export type QuestCreation = Omit<Quest, "id" | "status">;

export type QuestAssignement = {
  id: number;
  items: number[];
  adventurer: Adventurer;
};
