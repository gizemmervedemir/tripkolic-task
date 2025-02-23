import Image from "next/image";

const TourCard = ({ tour }) => {
    const tourPrice = parseFloat(tour.price.replace(/[^0-9.]/g, ""));
    const discountRate = parseFloat(tour.discount.replace(/[^0-9]/g, "")) / 100;
    const oldPrice = tourPrice / (1 - discountRate);
    const formattedOldPrice = oldPrice.toFixed(2);

    return (
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden w-full max-w-[320px] mx-auto">
            <div className="relative">
                <Image src={tour.image} alt={tour.name} width={320} height={200} className="w-full h-[200px] object-cover" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {tour.discount} OFF
                </div>
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-600 p-1 rounded-full shadow-md cursor-pointer">
                    ❤️
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm mb-1">
                    ⭐ {tour.rating.toFixed(1)} <span className="ml-1">({tour.reviews})</span>
                    <span className="ml-2">📍 {tour.location}</span>
                </div>
                <h3 className="text-lg font-bold dark:text-white">{tour.name}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-red-500 line-through">${formattedOldPrice}</span>
                    <span className="text-primary-500 font-bold text-lg">${tourPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <button className="text-orange-500 font-semibold">Details →</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;