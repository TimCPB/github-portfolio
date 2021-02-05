function Twitter(props) {
  return (
    <div className="user">
      <h1>{props.userData.twitter_username}</h1>
    </div>
  );
}

export default Twitter;