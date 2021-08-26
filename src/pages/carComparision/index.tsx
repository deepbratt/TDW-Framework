import Table from "../../layout/Sections/Sections/Table/Container"
import {Grid} from "@material-ui/core"
import Section from '../../components/index'
import Actions from "./useFunctions";
import { useParams } from "react-router-dom";
import {Colors} from "../../Utils/constants/colors/colors"
import MetaTags from "../../components/MetaTags";
import PageMeta from "../../Utils/constants/language/en/pageData";

interface RouterProps {
    _fId: string;
    _sId: string;
  }

const CarComparision = () => {
    const { _fId, _sId } = useParams<RouterProps>();
    const {data, isLoading } = Actions(_fId,_sId);
    const {iceBlue} = Colors
    return (
      <Grid container style={{marginTop: "50px",display: "flex",justifyContent: "center"}}>
        <MetaTags
        title={PageMeta.carComparision.title}
        description={PageMeta.carComparision.description}
        canonical={PageMeta.carComparision.canonical}
        keywords={PageMeta.carComparision.keywords}
      />
      {isLoading || data.length === 0 ? (
        <h1>Loading..</h1>
      ) : (
           <Grid style={{marginBottom: "50px"}} item xs={12}>
           <Section backColor={iceBlue} >
            <Table data={data}  />
            </Section>
           </Grid>)}
        </Grid>
    )
}

export default CarComparision
