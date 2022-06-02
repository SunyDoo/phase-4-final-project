function WelcomePage({ currentUser }) {
  return (
    <div>
      <h1>Welcome {currentUser.username}</h1>
    </div>
  );
}

export default WelcomePage;
