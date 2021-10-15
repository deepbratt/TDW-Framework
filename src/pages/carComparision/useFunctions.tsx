import { useState, useEffect } from 'react';
import { getData } from '../../Utils/hooks/actions';
import { compareCars } from '../../Utils/hooks/endpoints';

const useApi = (_fId: string, _sId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadAllData(compareCars, `_id=${_fId}&_id=${_sId}`);
  }, []);

  const loadAllData = async (url: string, param: number | string) => {
    setIsLoading(true);
    await getData(url, param)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          setData(response.data.result);
        } else {
          return 'error';
        }
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return {
    loadAllData,
    data,
    isLoading
  };
};

export default useApi;
