import { useState } from "react";
import { useCreateAdventurer } from "../../api/adventurerApi";
import { AdventurerForm } from "./AdventurerForm";
import { Modal } from "../common/Modal";
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

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Créer un nouvel aventurier" size="md">
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
        </Modal>
    );
}
