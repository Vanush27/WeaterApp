import {useEffect, useState} from 'react';
import DeviceInfo, {getUniqueId} from 'react-native-device-info';
import {uniqueId} from 'lodash';
import axios from 'axios';

const FIREBASE_PATH = 'https://.firebaseio.com/tests.json';
const useDeviceId = () => {
  const [tests, setTests] = useState<any>([]);
  const [deviceIdValues, setDeviceIdValues] = useState<any>();

  const brand = DeviceInfo.getBrand();

  const deviceId = async () => {
    const id = await getUniqueId();
    return id;
  };

  deviceId().then(deviceIdValue => {
    setDeviceIdValues(deviceIdValue);
  });

  const inputData = {
    id: uniqueId(),
    OS: brand,
    deviceID: deviceIdValues,
    lastActivity: new Date(),
    // language: language,
  };

  const handlePostData = async () => {
    try {
      const response = await axios.post(FIREBASE_PATH, {
        ...inputData,
      });
      console.warn('Data posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(FIREBASE_PATH);
      setTests(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // handlePostData();
    // handleGetData();
  }, []);

  return {tests};
};

export default useDeviceId;
