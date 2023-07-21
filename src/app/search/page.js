const Search = () => {
  return (
    <div className="h-[100vh] w-[70%] mx-auto mt-16">
      <form>
        <label
          for="search products..."
          className="mb-2 text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <div className="relative flex gap-5 mt-28 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search Products..."
            required
          />
          <button
            type="submit"
            className="border outline-none  px-7 rounded-md hover:bg-white transition-all duration-300 ease-in-out  bg-[#c0c0c0] shadow-lg  focus:text-white focus:outline-none focus:bg-slate-800 font-medium  ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
