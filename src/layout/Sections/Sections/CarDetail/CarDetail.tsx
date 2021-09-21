import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { useStyles } from "./useStyles";
import { Colors } from "../../Utils/color.constants";
import SellerDetail from "./SellerDetail";
import { ACTIVE, INACTIVE, SOLD, UNSOLD } from "../../../../Utils/constants/language/en/buttonLabels";
import { EditOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useState } from "react";
import { useHistory } from "react-router";
import { routes } from "../../../../routes/paths";
import { updateData } from "../../../../Utils/API/API";
import { API_ENDPOINTS } from "../../../../Utils/API/endpoints";
import Toast from "../../../../components/Toast";
import Loader from "../../../../components/Loader";
import ConfirmationDialog from "../../../../components/ConfirmationDialog";
import { SOLD_HERE_DIALOG_MESSAGE, SOLD_HERE_DIALOG_OK, SOLD_HERE_DIALOG_REJECT, SOLD_HERE_DIALOG_TITLE } from "../../../../Utils/constants/language/en/addEditCarTexts";

const CarDetail: React.FC<any> = ({
  Title,
  location,
  rating,
  mainButton,
  numButton,
  array,
  locIcon,
  ratIcon,
  mailIcon,
  numbIcon,
  desc,
  price,
  paragraph,
  modelYear,
  engineType,
  mileage,
  transmission,
  createdBy,
  data
}) => {
  const history = useHistory()
  const {isLoggedIn, user} = useSelector((state:RootState)=>state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const [isSold, setIsSold] = useState(data.isSold)
  const [isActive, setIsActive] = useState(data.active)
  const [openToast, setOpenToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [openDialog, setOpenDialog] = useState(false)
  const [toastType, setToastType] = useState("")
  const {
    root,
    sub,
    type,
    grid,
    numBtn,
    mailBtn,
    icon,
    container,
    link,
    greyBackground
  } = useStyles();
  const { blue, gray } = Colors;

  const toggleSold = (soldHere:boolean=false) =>{
    let soldUnsold = isSold ? API_ENDPOINTS.MARK_UNSOLD : API_ENDPOINTS.MARK_SOLD
    if(!isSold && soldHere){
      // api to add the car amount in sold on tezdealz collection
    }
    if(openDialog){
      setOpenDialog(false)
    }
    let requestBody = {soldByUs: soldHere}
    setIsLoading(true)
    updateData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${soldUnsold}/${data._id}`, !isSold ? requestBody : undefined).then((response: any)=>{
      if(response && response.data && response.data.status==="success"){
        setIsSold(!isSold)
        setToastMessage(response.data.message)
        setToastType("success")
      }else{
        console.log(response)
        setToastMessage(response.message)
        setToastType("error")
      }
      setOpenToast(true)
      setIsLoading(false)
    })
  }
  const toggleActive = () =>{
    let activeInactive = isActive ? API_ENDPOINTS.MARK_INACTIVE : API_ENDPOINTS.MARK_ACTIVE
    setIsLoading(true)
    updateData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${activeInactive}/${data._id}`).then((response:any)=>{
      if(response && response.data && response.data.status==="success"){
        setIsActive(!isActive)
        setToastMessage(response.data.message)
        setToastType("success")
      }else{
        console.log(response)
        setToastMessage(response.message)
        setToastType("error")
      }
      setOpenToast(true)
      setIsLoading(false)
    })
  }

  return (
    <Grid container style={{display: "inline-block"}}>
      <Grid className={root} container item xs={12}>
        <Grid container className={greyBackground}>
        <Grid item xs={12}>
          <Typography variant="h2">{Title}</Typography>
        </Grid>
        <Grid className={sub} item xs={12}>
          <Typography variant="subtitle1">
            <img width="10%" src={locIcon} alt="" /> {location}
          </Typography>
          {/* <Typography variant="subtitle1">
            <img width="15%" src={ratIcon} alt="" /> {rating}
          </Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ color: blue }} variant="h4">
            PKR {price?.toLocaleString()}
          </Typography>
        </Grid>
        {isLoggedIn && user._id === createdBy._id ? (
          <Grid item xs={12} style={{marginTop:"50px", display:"flex", flexWrap:"wrap"}} justifyContent="space-around">
            <Button color="primary" variant="contained" onClick={isSold ? ()=>toggleSold() : ()=>setOpenDialog(true)}>{isSold ? UNSOLD : SOLD}</Button>
            <Button color="primary" variant="contained" onClick={()=>toggleActive()}>{isActive ? INACTIVE : ACTIVE}</Button>
            <Button color="primary" variant="contained" endIcon={<EditOutlined/>} onClick={()=>history.push(routes.addEditCar.substr(0,routes.addEditCar.lastIndexOf('/')+1)+data._id)}>
              Edit
            </Button>
          </Grid>
        ) : null}
        <Grid style={{ display: "flex" , marginTop:"50px"}} item container lg={12} xs={12}>
          <Grid className={type} item lg={3} sm={3} xs={3} md={3}>
            <img className={icon} src={array?.yearIcon} alt="" width="30px" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {modelYear}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={3} xs={3} md={3}>
            <img className={icon} src={array?.mileageIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {mileage?.toLocaleString()}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={3} xs={3} md={3}>
            <img className={icon} src={array?.petrolIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {engineType}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={3} xs={3} md={3}>
            <img className={icon} src={array?.typeIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {transmission}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {createdBy?.phone && <Grid className={grid} item xs={12}>
            <Button
              className={numBtn}
              startIcon={
                <div>
                  <img width="30%" src={numbIcon} alt="" />
                </div>
              }
            >
              <a className={link} href={`tel:${createdBy.phone}`}>{createdBy.phone}</a>
            </Button>
          </Grid>}
          {createdBy?.email && <Grid className={container} item xs={12}>
            <Button
              className={mailBtn}
              startIcon={
                <div>
                  <img width="30%" src={mailIcon} alt="" />
                </div>
              }
            >
            <a className={link} href={`mailTo:${createdBy.email}`}>{mainButton}</a>
            </Button>
          </Grid>}
        </Grid>
        </Grid>
        {createdBy && <Grid item xs={12} className={greyBackground} style={{ marginTop: '20px' }}>
          <SellerDetail createdBy={createdBy} />
        </Grid>}
        <Hidden lgUp>
          <Grid style={{ color: gray, marginTop:"10px" }} className={greyBackground} item xs={12}>
            <Typography style={{ marginTop: "20px" }} variant="h6">
              {desc}
            </Typography>
            <Typography style={{ marginTop: "10px" }} variant="subtitle1">
              {paragraph}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
      <ConfirmationDialog handleConfirmation={()=>toggleSold(true)} handleRejection={()=>toggleSold(false)} open={openDialog} message={SOLD_HERE_DIALOG_MESSAGE} title={SOLD_HERE_DIALOG_TITLE} confirmBtnLabel={SOLD_HERE_DIALOG_OK} rejectBtnLabel={SOLD_HERE_DIALOG_REJECT}/>
      <Toast message={toastMessage} type={toastType} open={openToast} onClose={()=>setOpenToast(false)} />
      <Loader open={isLoading} isBackdrop={true} />
    </Grid>
  );
};

export default CarDetail;
