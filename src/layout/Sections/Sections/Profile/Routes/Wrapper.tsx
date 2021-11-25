import { useParams } from 'react-router-dom';
import ProfileSideBarContext from '../ProfileSidebar/ProfileSideBarContext';
// import Orders from '../Orders/History';
import Profile from '../Profile';
import Help from '../Help/Help';
import Favs from '../Favorites';
import Ads from '../Ads/Ads';
import Stats from '../Stats/Stats';

const Wrapper = () => {
  const { id } = useParams<{ id: string }>();

  const handleRoute = () => {
    // if (id === "orders") {
    //   return <Orders />;
    // }
    if (id === 'help') {
      return (
        <>
          <Help />
        </>
      );
    }
    if (id === 'profile') {
      return <Profile />;
    }
    if (id === 'favorites') {
      return (
        <>
          <Favs />
        </>
      );
    }
    if (id === 'ads') {
      return (
        <>
          <Ads />
        </>
      );
    }
    if (id === 'stats') {
      return (
        <>
          <Stats />
        </>
      );
    } else {
      return <Profile />;
    }
  };

  return (
    <>
      <ProfileSideBarContext>{handleRoute()}</ProfileSideBarContext>
    </>
  );
};

export default Wrapper;
