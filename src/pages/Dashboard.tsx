import { useDashboardStore } from "../store/useDashboardStore";

export const Dashboard = () => {
    const tasks = useDashboardStore((state) => state.tasks);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Developer Analytics Dashboard</h1>

            <pre className="mt-4 bg-gray-100 p-4 rounded">
                {JSON.stringify(tasks, null, 2)}
            </pre>
        </div>
    );
}