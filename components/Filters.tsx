import { useState } from "react";

type FiltersType = {
    selectedTheme: string;
    selectedActivities: string[];
    maxPrice: number;
    startTime: number;
    groupSize: number;
    selectedVehicle: string;
};


interface FiltersProps {
    isOpen: boolean;
    closeFilters: () => void;
    applyFilters: (filters: FiltersType) => void;
}

const Filters: React.FC<FiltersProps> = ({ isOpen, closeFilters, applyFilters }) => {

    const [selectedTheme, setSelectedTheme] = useState<string>("");
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(10000);
    const [startTime, setStartTime] = useState<number>(12);
    const [groupSize, setGroupSize] = useState<number>(25);
    const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    if (!isOpen) return null;

    const themes = ["Island Tour", "Land Tour", "Safari"];
    const activities = ["Swimming", "Running", "Elephant Care", "Snorkelling"];
    const vehicles = ["Yacht", "Speedboat", "Safari", "Catamaran", "Speedcatamaran"];


    const toggleSelection = (item: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
        setState((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    const resetFilters = () => {
        setSelectedTheme("");
        setSelectedActivities([]);
        setMaxPrice(10000);
        setStartTime(12);
        setGroupSize(25);
        setSelectedVehicle(null);
        setSelectedFeatures([]);
    };

    const searchTours = () => {
        applyFilters({ selectedTheme: selectedTheme || "", selectedActivities, maxPrice, startTime, groupSize, selectedVehicle: selectedVehicle || "", });
        closeFilters();
    };



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="filters-popup bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg relative w-[90vw] max-w-[400px] max-h-[90vh] overflow-auto border border-gray-300 dark:border-gray-600 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
                <button className="absolute top-3 right-3 text-gray-500 dark:text-white" onClick={closeFilters}>✖</button>

                <div className="flex items-center justify-between mb-4">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                        TOURS
                    </button>
                    <span className="text-gray-600 dark:text-white border-b-2 border-gray-600 dark:border-white pb-1 text-center">
                        Filter
                    </span>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Location</label>
                    <div className="relative">
                        <input type="text" className="w-full p-2 border rounded pl-10 dark:bg-gray-700 dark:text-white dark:border-gray-500" placeholder="Where you wanna visit?" />
                        <span className="absolute left-3 top-3 text-gray-500">🔍</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Theme</label>
                    <div className="flex gap-2 flex-wrap">
                        {themes.map((theme) => (
                            <button
                                key={theme}
                                className={`px-3 py-1 rounded-lg text-sm ${selectedTheme === theme ? "bg-orange-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`}
                                onClick={() => setSelectedTheme(theme)}
                            >
                                {theme} (43)
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Activity</label>
                    <div className="flex gap-2 flex-wrap">
                        {activities.map((activity) => (
                            <button
                                key={activity}
                                className={`px-3 py-1 rounded-lg text-sm ${selectedActivities.includes(activity) ? "bg-orange-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`}
                                onClick={() => toggleSelection(activity, setSelectedActivities)}
                            >
                                {activity} (43)
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Price</label>
                    <div className="flex items-center">
                        <input type="range" min="0" max="20000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-orange-500" />
                        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="ml-2 p-1 w-20 border text-center rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Start Time</label>
                    <div className="flex items-center">
                        <input type="range" min="0" max="23" value={startTime} onChange={(e) => setStartTime(Number(e.target.value))} className="w-full accent-orange-500" />
                        <input type="text" value={`${startTime}:00`} onChange={(e) => setStartTime(Number(e.target.value.replace(":00", "")))} className="ml-2 p-1 w-20 border text-center rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Group Size</label>
                    <div className="flex items-center">
                        <input type="range" min="1" max="50" value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))} className="w-full accent-orange-500" />
                        <input type="number" value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))} className="ml-2 p-1 w-20 border text-center rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Vehicle</label>
                    <div className="flex gap-2 flex-wrap">
                        {vehicles.map((vehicle) => (
                            <button
                                key={vehicle}
                                className={`px-3 py-1 rounded-lg text-sm ${selectedVehicle === vehicle ? "bg-orange-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`}
                                onClick={() => setSelectedVehicle(vehicle)}
                            >
                                {vehicle} (43)
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={resetFilters} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-white rounded-lg font-semibold">RESET</button>
                    <button onClick={searchTours} className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;