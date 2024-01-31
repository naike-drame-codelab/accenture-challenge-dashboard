import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuVote } from "react-icons/lu";

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
                                <IoHomeOutline /> 
                                <span className="ml-4">Home</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/dashboard/employees">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <IoPersonOutline /> 
                                <span className="ml-4">Employees</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/dashboard/calendar">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <CiCalendarDate /> 
                                <span className="ml-4">Calendar</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/dashboard/clients">
                            <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                {/* ... */}
                                <LuVote /> 
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
