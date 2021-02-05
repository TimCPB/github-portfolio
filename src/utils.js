 const fetchUserData = async () => {
  const response = await fetch("https://api.github.com/users/timcpb")
  const json = await response.json();
    return json;
}

export default fetchUserData
