import Link from "next/link";

export default function Page() {
    return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg text-gray-700 mb-8">This is the dashboard page.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go to Landing Page
            </Link>
        </div>
    );
}