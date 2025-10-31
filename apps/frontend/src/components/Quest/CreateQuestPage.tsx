import { useNavigate } from "react-router-dom";
import { useCreateQuest } from "../../api/quest.api";
import { useAuth } from "../../context/AuthContext";
import ReturnButton from "../Nav/ReturnButton";
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

export function CreateQuestPage() {
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
            navigate("/quest/" + quest.id);
        },
    });
    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-3xl w-full">
                <ReturnButton />
                <h1 className="text-3xl font-bold">Create a New Quest</h1>
                <form
                    className="flex flex-col gap-4 mt-6 bg-slate-700 p-6 rounded-lg shadow-md"
                    onSubmit={formik.handleSubmit}
                >
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-slate-100"
                            placeholder="Quest title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-red-500 text-sm">{formik.errors.title}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-slate-100"
                            placeholder="Quest description"
                            rows={4}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-red-500 text-sm">{formik.errors.description}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="deadline" className="block text-sm font-medium">
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-slate-100"
                            value={formik.values.deadline}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.deadline && formik.errors.deadline && (
                            <p className="text-red-500 text-sm">{formik.errors.deadline}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="reward" className="block text-sm font-medium">
                            Reward
                        </label>
                        <input
                            type="number"
                            id="reward"
                            name="reward"
                            className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-slate-100"
                            placeholder="Reward amount"
                            value={formik.values.reward}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.reward && formik.errors.reward && (
                            <p className="text-red-500 text-sm">{formik.errors.reward}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Create Quest
                    </button>
                </form>
            </div>
        </div>
    );
}
