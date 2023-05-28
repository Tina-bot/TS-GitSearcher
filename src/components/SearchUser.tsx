import SearchIcon from "./icons/SearchIcon"

const SearchUser = () => {
    return (
        <><form className="flex flex-wrap items-center gap-2 bg-[#1f2a48] p-2 rounded-xl pl-6">
            <span className="min-w-[20px]"> <SearchIcon
                className="fill-blue-500" />
            </span>
            <input
                type="text"
                placeholder="Search github username"
                className="ring-sky-400 focus:outline-none focus:ring-2 placeholder:text-white flex-1 h-14 p-2 rounded-lg bg-transparent text-white" />
            <button className="bg-blue-600 rounded-lg py-4 px-4 text-white font-bold"> Search </button>
        </form></>
    )
}
export default SearchUser