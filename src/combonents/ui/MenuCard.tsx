import { Heart, ShoppingCart } from "lucide-react";

interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spicyLevel?: string;
}

const MenuCard = ({ dish }: { dish: Dish }) => {
  const { name, description, price, image, category, spicyLevel } = dish;

  return (
    <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 shadow-yellow-200   ">
      <div className="relative flex items-center justify-center p-1">
        <img
          src={image}
          alt={name}
          className="w-full h-28 sm:h-36 md:h-44 object-cover px-1 sm:px-2 rounded-3xl"
        />
        {spicyLevel && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2 text-white px-1 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
            {spicyLevel}
          </div>
        )}

        <button className="absolute top-1 sm:top-2 right-1 sm:right-2 p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300">
          <Heart size={12} className="sm:w-4 md:w-5 sm:h-4 md:h-5" />
        </button>
      </div>

      <div className="p-2 sm:p-3 md:p-4">
        <div className="flex justify-between items-start mb-1 sm:mb-2">
          <h3 className="text-sm sm:text-base md:text-lg font-heading leading-tight flex-1 pr-2">
            {name}
          </h3>
          <span className="text-base sm:text-lg md:text-xl font-bold flex-shrink-0">
            ${price}
          </span>
        </div>

        <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full">
            {category}
          </span>

          <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-300 text-[10px] sm:text-xs md:text-sm cursor-pointer bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
            <>
              <ShoppingCart size={12} className="sm:w-4 md:w-5 sm:h-4 md:h-5" />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
