"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = ({ openFilters }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 shadow-md w-full sm:px-6 md:px-8 lg:px-10">
            <button className="text-gray-700 dark:text-white font-semibold" onClick={openFilters}>
                ☰ Traveller's Local Market
            </button>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <div className="flex items-center gap-4">
                <span className="text-black dark:text-white text-xl">🌍</span>
                <span className="text-red-500 text-xl">❤️</span>
                <span className="text-gray-700 dark:text-white text-xl">🛒</span>
                <Image src="/profile.jpg" alt="User" width={30} height={30} className="rounded-full cursor-pointer" />
                <button onClick={toggleDarkMode} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
                    {isDarkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;