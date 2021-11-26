import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { paths, Title, statsTitle } from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../../components/Loader';
import { API_ENDPOINTS } from '../../../../../Utils/API/endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useStyles } from '../useStyles';
import Actions from '../useFunctions';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function Stats() {
  const { heading, box, loading, layout } = useStyles();

  const {
    isLoading,
    data,
    page,
    pageCount,
    dataLimit,
    fetchData,
    setResponseMessage,
    responseMessage,
    open,
    setOpen
  } = Actions();

  const { layoutType } = useSelector((state: RootState) => state.layout);

  const getAllCarsData = () => {
    fetchData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.MY_CARS}`
    );
  };

  // Fetch All cars' data associated to an individual's / dealer's account:
  useEffect(() => {
    getAllCarsData();
  }, []);

  // Process with the fetched data:
  const soldUnsold = data.map((car: any) => car.isSold);
  const carMakes = data.map((car: any) => car.make);
  const totalCars = data.length;
  const soldCars = soldUnsold.filter((sold: any) => sold === true).length;
  const unsoldCars = soldUnsold.filter((sold: any) => sold === false).length;

  // Dataset for Pie Chart showing sold & unsold cars ratio:
  const soldUnsoldData = [
    { name: "Sold", value: soldCars },
    { name: "Unsold", value: unsoldCars }
  ]

  const COLORS = ['#00C49F', '#FF8042'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    name,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Dataset for Pie Chart showing different car makes:

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}% ${name}`}
      </text>
    );
  };




  return (
    <Grid container>
      <MetaTags
        title={PageMeta.stats.title}
        canonical={PageMeta.stats.canonical}
      />
      <Loader isBackdrop={true} open={isLoading} />
      <Paper elevation={4} className={layoutType === 'list' ? box : layout}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar key={statsTitle} Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">{statsTitle}</Typography>
          </section>
        </Grid>
        {data.length === 0 ? (
          <Typography variant="h2" className={loading}>
            No Result Found
          </Typography>
        ) : (
          <>
            <Grid container spacing={2}>
              <p>{JSON.stringify(carMakes)}</p>
              <p>{JSON.stringify(soldUnsold)}</p><br />
            </Grid>
            <Grid container spacing={2}>
              <p><strong>Total Cars: </strong>{totalCars} <br />
                <strong>Cars Sold: </strong>{soldCars} <br />
                <strong>Cars Unsold: </strong>{unsoldCars}</p>
              <PieChart width={800} height={800}>
                <Pie
                  data={soldUnsoldData}
                  cx={100}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {soldUnsoldData.map((entry: any, index: any) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Grid>
            <Grid container spacing={2}></Grid>
          </>
        )}
        {/* <Grid className={pagination} item xs={12}>
        <Pagination
          count={pageCount}
          onChange={(event, value) => getFavs(value)}
          color="secondary"
        />
      </Grid> */}
      </Paper>
    </Grid>
  );
}

export default Stats;
