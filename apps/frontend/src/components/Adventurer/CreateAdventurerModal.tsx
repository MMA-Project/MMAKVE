import { useState } from "react";
import { useCreateAdventurer } from "../../api/adventurerApi";
import { AdventurerForm } from "./AdventurerForm";
import type { AdventurerCreation } from "../../../../../packages/shared/src/types/adventurer.type";

interface CreateAdventurerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CreateAdventurerModal({ isOpen, onClose }: CreateAdventurerModalProps) {
    const createMutation = useCreateAdventurer();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (data: AdventurerCreation) => {
        try {
            setError(null);
            await createMutation.mutateAsync(data);
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                    Créer un nouvel aventurier
                </h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded text-red-100">
                        {error}
                    </div>
                )}

                <AdventurerForm
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                    isLoading={createMutation.isPending}
                />
            </div>
        </div>
    );
}
