import { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Toast from '../../../../../components/Toast';
// import AppointmentsTableRows from '../../../../../sections/AppointmentsTableRows';
import { Pagination } from "@material-ui/lab";
import { paths, Title, appointmentsTitle } from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../../components/Loader';
import { API_ENDPOINTS } from '../../../../../Utils/API/endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useStyles } from '../useStyles';
import Actions from '../useFunctions';

function Appointments() {
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

  const headings = [
    "Car Id",
    "City",
    "Inspection Date",
    "Status"
  ];

  const getMyAppointments = (pageValue = page) => {
    fetchData(
      `${API_ENDPOINTS.APPOINTMENTS}${API_ENDPOINTS.MY_APPOINTMENTS}?limit=${dataLimit}&page=${pageValue}`
    );
  };

  useEffect(() => {
    getMyAppointments(1);
  }, []);

  return (
    <Grid container>
      <MetaTags
        title={PageMeta.myAppointments.title}
        canonical={PageMeta.myAppointments.canonical}
      />
      <Loader isBackdrop={true} open={isLoading} />
      <Paper elevation={4} className={layoutType === 'list' ? box : layout}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar key={appointmentsTitle} Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">{appointmentsTitle}</Typography>
          </section>
        </Grid>
        {(!data || data.length === 0) && (
          <Typography variant="h2" className={loading}>
            No Result Found
          </Typography>
        )}
        {data && data.length > 0 && (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {headings.map((heading: string, index: number) => (
                    <TableCell key={heading + index}>{heading}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {data.map((row: any, index: number) => (
                  <AppointmentsTableRows
                    data={row}
                    resultArray={result}
                    setResultArray={setResult}
                    key={index + row._id}
                  />
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Grid item container xs={12} justifyContent="flex-end">
          <Pagination
            count={pageCount}
            onChange={(event, value) => getMyAppointments()}
            color="secondary"
          />
        </Grid>
      </Paper>
      <Toast
        open={open}
        onClose={() => setOpen(false)}
        type={responseMessage.status}
        message={responseMessage.message}
      />
    </Grid>
  );
}

export default Appointments;