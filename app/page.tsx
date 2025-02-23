"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Filters from "@/components/Filters";
import TourCard from "@/components/TourCard";
import { tours } from "@/utils/data";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    selectedTheme: "",
    maxPrice: 12500,
  });

  type FiltersType = {
    selectedTheme: string;
    maxPrice: number;
  };

  const applyFilters = (newFilters: FiltersType) => {
    console.log("Filtreler Güncellendi:", newFilters);
    setFilters(newFilters);
  };

  const filteredTours = tours.filter((tour) => {
    const tourPrice = tour.price ? parseInt(tour.price.replace(/[^0-9]/g, ""), 10) : 0;
    if (tourPrice > filters.maxPrice) return false;
    if (filters.selectedTheme && !tour.name?.includes(filters.selectedTheme)) return false;
    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar openFilters={() => setFiltersOpen(true)} />
      <Filters isOpen={filtersOpen} closeFilters={() => setFiltersOpen(false)} applyFilters={applyFilters} />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto gap-6">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">Bu kategoride tur bulunamadı.</p>
        )}
      </main>
    </div>
  );
}