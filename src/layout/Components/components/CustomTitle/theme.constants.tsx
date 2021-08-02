import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery} from "@material-ui/core";


 
 const Sizes = () => {
    const theme = useTheme()
        
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.only("md"));
    const mobile = useMediaQuery(theme.breakpoints.only("xs"));
       return {desktop,tablet,mobile}
  };

  export default Sizes
