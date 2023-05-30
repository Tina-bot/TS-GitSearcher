export const getUser = async (user: string) => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    return data;
};