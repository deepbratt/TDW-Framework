import { useLocation } from "react-router-dom";
import ProfileSideBarContext from "../ProfileSidebar/ProfileSideBarContext";
import Orders from "../Orders/History";
import Profile from "../Profile";
import Help from "../Help/Help";
import Favs from "../Favorites";
import Ads from "../Ads/Ads";
import { useEffect } from "react";
const Wrapper = () => {
  const location = useLocation();

  const handleRoute = () => {
    if (location.pathname === "/dashboard/orders") {
      return <Orders />;
    }
    if (location.pathname === "/dashboard/help") {
      return (
        <>
          <Help />
        </>
      );
    }
    if (location.pathname === "/dashboard/profile") {
      return <Profile />;
    }
    if (location.pathname === "/dashboard/favorites") {
      return (
        <>
          <Favs />
        </>
      );
    }
    if (location.pathname === "/dashboard/ads") {
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
    // console.log("location", location.pathname);
  }, [location.pathname]);


  return (
    <>
      <ProfileSideBarContext>{handleRoute()}</ProfileSideBarContext>
    </>
  );
};

export default Wrapper;
