import { useEffect, useState } from 'react';
import { getDisplayName } from 'recompose';
import { getAllData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';

const useCarInformationForm = (
  formData: any,
  setFormData: React.Dispatch<any>
) => {
  const [carMakes, setCarMakes] = useState<Array<any>>([]);
  const [carMakesList, setCarMakesList] = useState<Array<string>>([]);
  const [carModels, setCarModels] = useState<Array<any>>([]);
  const [carModelsList, setCarModelsList] = useState<Array<string>>([]);
  const [carVersions, setCarVersions] = useState<Array<any>>([]);
  const [carVersionsList, setCarVersionsList] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [toastOpen, setToastOpen] = useState(false);

  const handleTextChange = (event: any) => {
    setFormData({ name: event.target.name, value: event.target.value });
  };

  const fetchMakes = () => {
    setIsLoading(true);
    getAllData(
      API_ENDPOINTS.ADS +
        API_ENDPOINTS.CARS +
        API_ENDPOINTS.CAR_MAKES +
        '?sort=name'
    ).then((response) => {
      setIsLoading(false);
      if (response && response.status === 'success') {
        setCarMakes(response.data.result);
        let makeList = response.data.result.map((make: any) => make.name);
        setCarMakesList(makeList);
      } else {
        setToastMessage(
          response && response.message ? response.message : 'Network Error'
        );
        setToastType('error');
        setToastOpen(true);
      }
    });
  };
  const fetchModels = (makeId: any) => {
    setIsLoading(true);
    getAllData(
      API_ENDPOINTS.ADS +
        API_ENDPOINTS.CARS +
        API_ENDPOINTS.MAKE_MODELS +
        makeId +
        '&sort=name'
    ).then((response) => {
      setIsLoading(false);
      if (response && response.status === 'success') {
        setCarModels(response.data.result);
        let modelList = response.data.result.map((model: any) => model.name);
        setCarModelsList(modelList);
      } else {
        setToastMessage(
          response && response.message ? response.message : 'Network Error'
        );
        setToastType('error');
        setToastOpen(true);
      }
    });
  };
  const fetchVersions = (modelId: any) => {
    setIsLoading(true);
    getAllData(
      API_ENDPOINTS.ADS +
        API_ENDPOINTS.CARS +
        API_ENDPOINTS.MODEL_VERSIONS +
        modelId +
        '&sort=name'
    ).then((response) => {
      setIsLoading(false);
      if (response && response.status === 'success') {
        setCarVersions(response.data.result);
        let versionList = response.data.result.map((versions: any) => {
          return {
            name: versions.name,
            displayName: [
              versions.name,
              versions.fuel_type,
              versions.capacity ? versions.capacity + ' cc' : '',
              versions.transmission_type
            ].join(' | ')
          };
        });
        setCarVersionsList(versionList);
      } else {
        setToastMessage(
          response && response.message ? response.message : 'Network Error'
        );
        setToastType('error');
        setToastOpen(true);
      }
    });
  };

  useEffect(() => {
    fetchMakes();
  }, []);

  useEffect(() => {
    if (formData.carMake && carMakes.length > 0) {
      let make = carMakes.filter((make) => make.name === formData.carMake);
      if (make.length > 0) {
        fetchModels(make[0].make_id);
      }
    }
  }, [formData.carMake, carMakes]);

  useEffect(() => {
    if (formData.carModel && carModels.length > 0) {
      let model = carModels.filter(
        (models) => models.name === formData.carModel
      );
      if (model.length > 0) {
        fetchVersions(model[0].model_id);
      }
    }
  }, [formData.carModel, carModels]);

  useEffect(() => {
    if (formData.modelVersion) {
      let version = carVersions.filter(
        (version) => version.name === formData.modelVersion
      );
      if (version.length > 0) {
        setFormData({
          name: 'engineCapacity',
          value: version[0].capacity ? version[0].capacity : ''
        });
        setFormData({
          name: 'engineType',
          value: version[0].fuel_type ? version[0].fuel_type : ''
        });
        setFormData({
          name: 'transmission',
          value: version[0].transmission_type
            ? version[0].transmission_type
            : ''
        });
      }
    }
  }, [formData.modelVersion]);

  return {
    toastMessage,
    toastOpen,
    toastType,
    isLoading,
    carMakesList,
    carModelsList,
    carVersionsList,
    handleTextChange
  };
};

export default useCarInformationForm;
