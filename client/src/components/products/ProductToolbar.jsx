import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import Button from "../ui/Button";

export default function ProductToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  onClearSearch,
}) {
  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row">

        <div className="flex flex-1 gap-3">

          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={onSearchChange}
            />
          </div>

          {search.trim() !== "" && (
            <Button
              variant="secondary"
              onClick={onClearSearch}
            >
              Clear
            </Button>
          )}

        </div>

        <CategoryFilter
          value={category}
          onChange={onCategoryChange}
        />

      </div>
    </section>
  );
}