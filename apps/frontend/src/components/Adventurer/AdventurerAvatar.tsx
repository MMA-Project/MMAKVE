import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import {
    adventurerImages,
    typeLabels,
    statusColors,
    statusLabels,
} from "../../utils/adventurerImages";

interface AdventurerAvatarProps {
    type: AdventurerType;
    status: string;
    name: string;
}

export function AdventurerAvatar({ type, status }: AdventurerAvatarProps) {
    return (
        <div className="relative">
            <img
                src={adventurerImages[type]}
                alt={typeLabels[type]}
                className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover bg-slate-800"
            />
            <span
                className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${statusColors[status]}`}
                title={statusLabels[status]}
            />
        </div>
    );
}
