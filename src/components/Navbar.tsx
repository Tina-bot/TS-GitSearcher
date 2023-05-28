import LightIcon from "./icons/LightIcon"

const Navbar = () => {
    return (
        <div className="flex items-center align-middle gap-1 p-2">
            <h1 className="flex-grow text-2xl font-bold text-blue-500">
                Devfinder
            </h1>
            <span className="uppercase text-white"> Light </span>
            <button className="w-4 fill-white"> <LightIcon /> </button>
        </div>
    )
}
export default Navbar