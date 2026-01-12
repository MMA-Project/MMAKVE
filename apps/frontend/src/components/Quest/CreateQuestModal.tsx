import { useNavigate } from "react-router-dom";
import { useCreateQuest } from "../../api/quest.api";
import { useAuth } from "../../context/AuthContext";
import { useFormik } from "formik";
import * as yup from "yup";
import type { QuestCreation } from "../../../../../packages/shared/src/types/quest.type";

const validationSchema = yup.object({
    title: yup.string().required("Le titre est requis"),
    description: yup.string().required("La description est requise"),
    deadline: yup
        .date()
        .min(new Date(), "La date limite doit être dans le futur")
        .required("La date limite est requise"),
    reward: yup
        .number()
        .min(1, "La récompense doit être d'au moins 1")
        .required("La récompense est requise"),
});

interface CreateQuestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CreateQuestModal({ isOpen, onClose }: CreateQuestModalProps) {
    const { user } = useAuth();
    const { createQuest } = useCreateQuest();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            deadline: "",
            reward: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            const questData: QuestCreation = {
                requester: user!,
                title: values.title,
                description: values.description,
                deadline: new Date(values.deadline),
                reward: Number(values.reward),
            };
            const quest = await createQuest(questData);
            formik.resetForm();
            onClose();
            navigate("/quest/" + quest.id);
        },
    });

    if (!isOpen || !user) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
                <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-slate-100">Créer une nouvelle quête</h2>
                    <button
                        onClick={() => {
                            formik.resetForm();
                            onClose();
                        }}
                        className="text-slate-400 hover:text-slate-100 text-2xl font-bold"
                    >
                        ×
                    </button>
                </div>
                <form className="flex flex-col gap-4 p-6" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-100">
                            Titre
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-100 p-2"
                            placeholder="Titre de la quête"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-slate-100"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-100 p-2"
                            placeholder="Description de la quête"
                            rows={4}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-slate-100"
                        >
                            Date limite
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-100 p-2"
                            value={formik.values.deadline}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.deadline && formik.errors.deadline && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.deadline}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="reward"
                            className="block text-sm font-medium text-slate-100"
                        >
                            Récompense
                        </label>
                        <input
                            type="number"
                            id="reward"
                            name="reward"
                            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-100 p-2"
                            placeholder="Montant de la récompense"
                            value={formik.values.reward}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.reward && formik.errors.reward && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.reward}</p>
                        )}
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button
                            type="button"
                            onClick={() => {
                                formik.resetForm();
                                onClose();
                            }}
                            className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-md"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                        >
                            Créer la quête
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
