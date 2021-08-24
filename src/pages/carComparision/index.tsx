import { useState, useEffect, useCallback } from 'react';
import Table from '../../layout/Sections/Sections/Table/Container';
import { Grid } from '@material-ui/core';
import Section from '../../components/index';
import { useParams } from 'react-router-dom';
import { Colors } from '../../Utils/constants/colors/colors';
import Loader from '../../components/Loader';
import { getAllData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { ICarCard } from '../../Utils/interfaces/products.interface';

interface RouterProps {
  _fId: string;
  _sId: string;
}

interface IData {
  data: {
    result: ICarCard[];
  };
}

const CarComparision = () => {
  const { ADS, CARS } = API_ENDPOINTS;
  const { _fId, _sId } = useParams<RouterProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IData>();
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { iceBlue } = Colors;

  const getAllCars = useCallback(async () => {
    let params = `?_id=${_fId}&_id=${_sId}`;
    await getAllData(ADS + CARS + params)
      .then((response) => {
        console.log('response', response);
        setIsLoading(false);
        if (response.status === 'success') {
          setResponseData(response);
          setResponseMessage({
            status: response.status,
            message: response.message
          });
        } else {
          setIsLoading(false);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Error log', error);
        setResponseMessage({
          status: error.status,
          message: error.message
        });
      });
  }, []);

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <Grid
      container
      style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    >
      {isLoading || responseData?.data.result.length === 0 ? (
        <Loader open={isLoading} />
      ) : (
        <Grid style={{ marginBottom: '80px' }} item xs={12}>
          <Section backColor={iceBlue}>
            {responseData?.data.result && (
              <Table data={responseData?.data.result} />
            )}
          </Section>
        </Grid>
      )}
    </Grid>
  );
};

export default CarComparision;
