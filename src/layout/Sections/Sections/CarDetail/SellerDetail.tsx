import { Typography,Grid} from '@material-ui/core'
import {useStyles} from "./useStyles"
import { seller } from '../../Utils/carDetail'
const SellerDetail = () => {
    const {box} = useStyles()
    return (
        <Grid container>
               <Grid className={box} item xs={12}>
                   <Typography variant="h3">
                       {seller}
                   </Typography>
               </Grid>
        </Grid>
    )
}

export default SellerDetail
