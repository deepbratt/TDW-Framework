import Table from "../../layout/Sections/Sections/Table/Container"
import {Grid} from "@material-ui/core"
import Section from '../../components/index'
import useApi from "../../Utils/hooks/useApi";
import { compareCars } from "../../Utils/hooks/endpoints";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Colors} from "../../Utils/constants/colors/colors"

interface RouterProps {
    _fId: string;
    _sId: string;
  }

const CarComparision = () => {
    const { loadAllData, data, isLoading } = useApi();
    const { _fId, _sId } = useParams<RouterProps>();
    const {iceBlue} = Colors
    useEffect(() => {
      loadAllData(compareCars, `_id=${_fId}&_id=${_sId}`);
    }, []);
    return (
      <Grid container style={{marginTop: "50px",display: "flex",justifyContent: "center"}}>
      {isLoading || data.length === 0 ? (
        <h1>Loading..</h1>
      ) : (
           <Grid style={{marginBottom: "80px"}} item xs={12}>
           <Section backColor={iceBlue} >
            <Table data={data}  />
            </Section>
           </Grid>)}
        </Grid>
    )
}

export default CarComparision
