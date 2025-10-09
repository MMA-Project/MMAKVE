import { cancel, create, getAll, getAllByUser, update, validate } from "../services/quest.service";

export const getAllQuests = async () => await getAll();
export const getAllQuestsByUser = async (userId: string) => await getAllByUser(userId);
export const createQuest = async (data: any) => await create(data);
export const updateQuest = async (id: string, data: any) => await update(id, data);
export const validateQuest = async (id: string) => await validate(id);
export const cancelQuest = async (id: string) => await cancel(id);