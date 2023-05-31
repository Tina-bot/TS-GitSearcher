import BuildingIcon from "./icons/BuildingIcon"
import LinkIcon from "./icons/LinkIcon"
import LocationIcon from "./icons/LocationIcon"
import TwitterIcon from "./icons/TwitterIcon"

type User = {
    avatar_url: string;
    login: string;
    bio: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    twitter_username: string;
    blog: string;
    company: string;
}
type CardUserProps = {
    user: User;
};

const CardUser = ({ user }: CardUserProps) => {
    return (
        <div className="bg-[#1f2a48] p-8 rounded-xl text-gray-300 mt-4 flex w-full">

            <img className="rounded-full w-[100px] h-[100px] mt-2" src={user.avatar_url} />
            <div className=" w-full px-4 mt-0">
                <h1 className="text-white text-xl "> {user.login} </h1>
                <div className="flex justify-between my-1">
                    <small className="text-blue-500">@{user.login}</small>
                    <small className="">Joined {user.created_at}</small>
                </div>

                <p className="my-4 text-gray-400"> {!user.bio === null ?
                    (user.bio) :
                    "This profile has no bio "
                }</p>
                <div className="bg-gray-900 rounded-2xl p-4 px-8 grid grid-cols-3 mt-8 mb-4">
                    <h3 className="text-gray-400 text-sm">Repos</h3>
                    <h3 className="text-gray-400 text-sm">Followers</h3>
                    <h3 className="text-gray-400 text-sm">Following</h3>
                    <p className="font-bold text-xl">{user.public_repos}</p>
                    <p className="font-bold text-xl">{user.followers}</p>
                    <p className="font-bold text-xl">{user.following}</p>
                </div>
                <div className="small grid grid-cols-2 pt-4">
                    <h3 className="flex p-2"> <span className="mr-3"> <LocationIcon className="w-[16px] fill-white" /> </span>
                    {!user.location === length>3 ?
                        (user.location) :
                        "not available"
                    }
                     </h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <TwitterIcon className="w-[20px] fill-white" /> </span>
                    {!user.twitter_username === length>3 ?
                        (user.twitter_username) :
                        "not available"
                    }
                    </h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <LinkIcon className="w-[20px] fill-white" /> </span>
                     {!user.blog === length>3 ?
                        (user.blog) :
                        "not available"
                    }
                     </h3>
                    <h3 className="flex p-2"> <span className="mr-3"> <BuildingIcon className="w-[16px] fill-white" /> </span> 
                    {!user.company === length>3 ?
                        (user.company) :
                        "not available"
                    }
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default CardUser