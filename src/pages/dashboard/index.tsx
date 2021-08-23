import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Section from "../../components"
import RoutesWrapper from "../../layout/Sections/Sections/Profile/Routes/Wrapper";


const Dashboard = () => {
  const location = useLocation()
  useEffect(()=>{
    console.log(location.pathname)
  },[])
  return (
    <>
      <Section backColor="#f2f2f2">
        <RoutesWrapper />
      </Section>
      <Typography>hello</Typography>
    </>
  );
};

export default Dashboard;
