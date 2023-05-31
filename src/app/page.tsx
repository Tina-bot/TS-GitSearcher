"use client"
import CardUser from "@/components/CardUser"
import SearchUser from "@/components/SearchUser"
import { useState } from "react";
import { getUser } from "../fetch/getUser"


const Home = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username: string) => {
    const userData = await getUser(username);
    setUser(userData);
  };

  return (
    <>
      <SearchUser onSearch={handleSearch} />
      {user && <CardUser user={user} />}
    </>
  );
};
export default Home;