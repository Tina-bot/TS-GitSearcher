import BuildingIcon from "./icons/BuildingIcon"
import LinkIcon from "./icons/LinkIcon"
import LocationIcon from "./icons/LocationIcon"
import TwitterIcon from "./icons/TwitterIcon"

const CardUser = () => {
    const url = "https://avatars.githubusercontent.com/u/72955349?v=4"
    return (
        <div className="bg-[#1f2a48] p-8 rounded-xl text-gray-300 mt-4 flex w-full">

            <img className="rounded-full w-[100px] h-[100px] mt-2" src={url} />
            <div className=" w-full px-4 mt-0">
                <h1 className="text-white text-xl "> UserName </h1>
                <div className="flex justify-between">
                    <small className="text-blue-500">@username</small>
                    <small className="">Joined xx/xx/xx</small>
                </div>

                <p className="m-2"> bio </p>
                <div className="bg-gray-900 rounded-3xl p-4 grid grid-cols-3 ">
                    <h3>Repos</h3>
                    <h3>Followers</h3>
                    <h3>Following</h3>
                    <p>8</p>    
                    <p>2456</p>
                    <p>9</p>
                </div>
                <div className="small grid grid-cols-2 pt-4">
                    <h3 className="flex p-2"> <span className="mr-3"> <LocationIcon className="w-[16px] fill-white" /> </span> San Francisco</h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <LinkIcon className="w-[16px] fill-white"  /> </span> www.git.com</h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <BuildingIcon className="w-[16px] fill-white" /> </span> not available</h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <TwitterIcon className="w-[16px] fill-white" /> </span>@github</h3>
                </div>
         </div>
        </div>
    )
}
export default CardUser