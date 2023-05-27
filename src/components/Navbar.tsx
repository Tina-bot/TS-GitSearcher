import LightIcon from "./icons/LightIcon"

const Navbar = () => {
    return (
        <div className="flex items-center">
            <h1 className=" text-2xl font-bold text-blue-500">
                Devfinder
            </h1>
            <span className="uppercase text-white"> Light </span>
            <button className="w-7 fill-white"> <LightIcon /> </button>
        </div>
    )
}
export default Navbar