export default function Projects() {
    return (
        <div className="p-6 text-black">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ul className="mt-4 space-y-2">
                <li>
                    <strong>Portfolio Website:</strong> A personal website built with React and Tailwind CSS.
                </li>
                <li>
                    <strong>Task Manager App:</strong> A full stack application for managing daily tasks.
                </li>
                {/* Add more projects as needed */}
            </ul>
        </div>
    );
}
