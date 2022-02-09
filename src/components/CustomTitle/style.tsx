import makeStyles from "@material-ui/core/styles/makeStyles";
import { Colors } from "../../Utils/constants/colors/colors";

const { grey, blue } = Colors;
const LayoutStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '0',
    position: 'relative'
  },
  content: {
    position: 'relative',
    margin: '0 8%',
    '& > img': {
      position: 'absolute',
      height: '146px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 2%'
    }
  },
  sectionHeader: {
    marginBottom: '0px'
  },
  subHeader: {
    color: grey
  },
  underlinedStyles: {
    borderBottom: `5px solid ${blue}`
  },
  btn: {
    fontWeight: 'bold',
    boxShadow: 'none'
  }
}));

export default LayoutStyle;
