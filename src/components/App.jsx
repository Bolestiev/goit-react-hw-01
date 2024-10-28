import "../index.css";
import "modern-normalize";
import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../assets/user.Data.json";

const App = () => {
  console.log(userData);
  return (
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
  );
};

export default App;
