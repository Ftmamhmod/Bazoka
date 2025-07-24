import { useState } from "react";
import { Search, X } from "lucide-react";
import MenuCard from "../../combonents/ui/MenuCard";
import { menuData, categories } from "../../data/data";
interface DishType {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  category: string;
  image: string;
  spicyLevel?: string;
}
type MenuCategory =
  | "all"
  | "friedChicken"
  | "sandwiches"
  | "meals"
  | "sides"
  | "appetizers";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredDishes = () => {
    let dishes =
      activeCategory === "all"
        ? Object.values(menuData).flat()
        : menuData[activeCategory] || [];

    if (searchTerm.trim()) {
      dishes = dishes.filter(
        (dish: DishType) =>
          dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return dishes;
  };

  const filteredDishes = getFilteredDishes();

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      {/* Search Bar */}
      <section className="py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2  w-5 h-5" />
              <input
                type="text"
                placeholder="Search for explosive dishes, chicken, sandwiches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" w-full pl-12 pr-12 py-3 lg:py-4 text-sm lg:text-lg  border-2 border-gray-200 rounded-full focus:outline-none 
                 focus:ring-2  transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200"
                  aria-label="Clear search"
                >
                  ``
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="mt-3 text-center">
                <span className="text-sm ">
                  {filteredDishes.length} dishes found for "{searchTerm}"
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=" py-8 shadow-sm  top-14 lg:top-20 z-40 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.key as MenuCategory)}
                className={`px-3 lg:px-6 py-3 rounded-full font-semibold text-xs md:text-xl transition-all duration-300 ${
                  activeCategory === category.key
                    ? " text-white shadow-lg"
                    : "  hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDishes.length > 0 ? (
            <>
              {/* Results Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-yellow-primary ">
                  {searchTerm ? (
                    <>Found {filteredDishes.length} explosive dishes</>
                  ) : (
                    <>
                      {activeCategory === "all"
                        ? "All Our Explosive Dishes"
                        : categories.find((cat) => cat.key === activeCategory)
                            ?.name}
                    </>
                  )}
                </h2>
                {searchTerm && (
                  <p className=" mt-2">
                    Searching for:{" "}
                    <span className="font-semibold">"{searchTerm}"</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDishes.map((dish: DishType) => (
                  <MenuCard key={dish.id} dish={dish} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              {searchTerm ? (
                <div>
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold  mb-2">
                    No explosive dishes found
                  </h3>
                  <p className="text-xl  mb-6">
                    Try searching for "chicken", "sandwich", "spicy", or "rice"
                  </p>
                  <button
                    onClick={clearSearch}
                    className="px-6 py-3  text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    Clear Search & Show All
                  </button>
                </div>
              ) : (
                <p className="text-xl ">No dishes found in this category.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 explosive-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white mb-8">
            Call us now for the ultimate explosive chicken experience!
          </p>
        </div>
      </section>
    </>
  );
};

export default Menu;
