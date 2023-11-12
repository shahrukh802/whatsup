import FilterSVG from "../../../../assets/svgs/FilterSVG";
import SearchSVG from "../../../../assets/svgs/SearchSVG";

const ChatSearch = () => {
  return (
    <div className="flex items-center justify-between px-3 py-2 gap-3">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <span className="cursor-pointer text-iconColor">
              <SearchSVG />
            </span>
          </button>
        </span>
        <input
          type="search"
          className="py-2 w-full text-sm bg-primary text-textLight rounded-[8px] pl-14 focus:outline-none"
          placeholder="Search or start new chat"
          autoComplete="off"
        />
      </div>
      <div className="flex">
        <span className="cursor-pointer text-iconColor">
          <FilterSVG />
        </span>
      </div>
    </div>
  );
};

export default ChatSearch;
