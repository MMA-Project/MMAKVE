import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";

export default function QuestStatusBanner({ status }: { status: QuestStatus }) {
    return (
        <div className="flex items-center gap-2">
            {status === QuestStatus.PENDING && (
                <span
                    className="px-2 py-1 text-xs font-medium text-yellow-500 bg-yellow-900 rounded"
                    title="Pending"
                >
                    ⏳
                </span>
            )}
            {status === QuestStatus.APPROVED && (
                <span
                    className="px-2 py-1 text-xs font-medium text-green-500 bg-green-900 rounded"
                    title="Approved"
                >
                    ✅
                </span>
            )}
            {status === QuestStatus.IN_PROGRESS && (
                <span
                    className="px-2 py-1 text-xs font-medium text-blue-500 bg-blue-900 rounded"
                    title="In Progress"
                >
                    🚀
                </span>
            )}
            {status === QuestStatus.COMPLETED && (
                <span
                    className="px-2 py-1 text-xs font-medium text-green-500 bg-green-900 rounded"
                    title="Completed"
                >
                    🏆
                </span>
            )}
            {status === QuestStatus.FAILED && (
                <span
                    className="px-2 py-1 text-xs font-medium text-red-500 bg-red-900 rounded"
                    title="Failed"
                >
                    ❌
                </span>
            )}
            {status === QuestStatus.CANCELED && (
                <span
                    className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-800 rounded"
                    title="Canceled"
                >
                    🛑
                </span>
            )}
        </div>
    );
}
