import { useHistory, useLocation, useParams } from "react-router-dom";
import ProfileSideBarContext from "../ProfileSidebar/ProfileSideBarContext";
import Orders from "../Orders/History";
import Profile from "../Profile";
import Help from "../Help/Help";
import Favs from "../Favorites";
import Ads from "../Ads/Ads";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
const Wrapper = () => {
  const location = useLocation();
  const history = useHistory()
  const {user} = useSelector((state:RootState)=>state.auth)
  const {id} = useParams<{id:string}>()

  const handleRoute = () => {
    if (id === "orders") {
      return <Orders />;
    }
    if (id === "help") {
      return (
        <>
          <Help />
        </>
      );
    }
    if (id === "profile") {
      return <Profile />;
    }
    if (id === "favorites") {
      return (
        <>
          <Favs />
        </>
      );
    }
    if (id === "ads") {
      return (
        <>
          <Ads />
        </>
      );
    } else {
      return "no page found";
    }
  };

  useEffect(() => {
    console.log("location", location.pathname);
  }, [location.pathname]);


  return (
    <>
      <ProfileSideBarContext>{handleRoute()}</ProfileSideBarContext>
    </>
  );
};

export default Wrapper;
