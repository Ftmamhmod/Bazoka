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
    <div className=" rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative flex items-center justify-center p-1">
        <img
          src={image}
          alt={name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover px-1 sm:px-2"
        />
        {spicyLevel && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2  text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold">
            {spicyLevel}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className={`absolute top-1 sm:top-2 right-1 sm:right-2 p-1.5 sm:p-2 rounded-full transition-all duration-300 `}
        >
          <Heart size={14} className={`sm:w-4 sm:h-4`} />
        </button>
      </div>

      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg md:text-xl font-heading leading-tight flex-1 pr-2">
            {name}
          </h3>
          <span className="text-lg sm:text-xl md:text-2xl font-bold  flex-shrink-0">
            ${price}
          </span>
        </div>

        <p className=" mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs  px-2 sm:px-3 py-1 rounded-full">
            {category}
          </span>
          {/* Dynamic Button Area */}
          <button
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm 
              `}
          >
            <>
              <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
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
