import { Adventurer, AdventurerType } from "./adventurer.type";

export type Quest = {
  id: number;
  requester_id: number;
  title: string;
  description: string;
  date_limit: number;
  estimated_time: number;
  prime: number;
  status:
    | "waiting_approval"
    | "approved"
    | "in_progress"
    | "completed"
    | "failed";

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
