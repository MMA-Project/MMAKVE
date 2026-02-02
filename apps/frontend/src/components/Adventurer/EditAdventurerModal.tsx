import { useState } from "react";
import { useUpdateAdventurer } from "../../api/adventurerApi";
import { AdventurerForm } from "./AdventurerForm";
import { Modal } from "../common/Modal";
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

    if (!adventurer) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`Modifier ${adventurer.user.name}`}
            size="md"
        >
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
        </Modal>
    );
}
