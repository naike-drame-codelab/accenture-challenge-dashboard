import Link from "next/link";

export default function SideNav() {
    return (
        <nav className="flex flex-col w-64 bg-gray-100 border-r dark:bg-gray-800 dark:border-gray-600">
            {/* ... */}
            <div className="flex flex-col items-center justify-between flex-1 mt-6">
                <ul className="flex flex-col items-center flex-1 w-full">
                    <li className="relative">
                        <Link href="/dashboard">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <span className="ml-4">Home</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/dashboard/calendar">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <span className="ml-4">Calendar</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/dashboard/clients">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <span className="ml-4">Requests</span>
                            </span>
                        </Link>
                    </li>
                    {/* ... */}
                </ul>
            </div>
        </nav>
    );
}
