import { useState } from "react";
import { useUpdateAdventurer } from "../../api/adventurerApi";
import { AdventurerForm } from "./AdventurerForm";
import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";

interface EditAdventurerModalProps {
    isOpen: boolean;
    adventurer: Adventurer | null;
    onClose: () => void;
}

export function EditAdventurerModal({ isOpen, adventurer, onClose }: EditAdventurerModalProps) {
    const updateMutation = useUpdateAdventurer();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (data: Partial<Adventurer>) => {
        if (!adventurer) return;
        try {
            setError(null);
            await updateMutation.mutateAsync({
                id: adventurer.id,
                updates: data,
            });
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        }
    };

    if (!isOpen || !adventurer) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                    Modifier {adventurer.user.name}
                </h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded text-red-100">
                        {error}
                    </div>
                )}

                <AdventurerForm
                    adventurer={adventurer}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                    isLoading={updateMutation.isPending}
                />
            </div>
        </div>
    );
}
