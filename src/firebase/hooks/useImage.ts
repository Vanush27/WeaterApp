import {useEffect, useState} from 'react';
import DeviceInfo, {getUniqueId} from 'react-native-device-info';
import firestore from '@react-native-firebase/firestore';

const useImage = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [deviceIdValues, setDeviceIdValues] = useState<any>();

  const deviceId = async () => {
    const id = await getUniqueId();
    return id;
  };

  deviceId().then(deviceIdValue => {
    setDeviceIdValues(deviceIdValue);
  });

  const addToFirestore = async () => {
    try {
      await firestore()
        .collection('tasks')
        .add({
          image: '898989',
          OS: DeviceInfo.getDeviceName(),
          deviceID: `${deviceIdValues}`,
          lastActivity: new Date(),
        });
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };

  const handlePostData = async () => {
    try {
      console.log('handle Post  data:');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    // addToFirestore();
    // handleGetData();
  }, []);

  return {tasks};
};

export default useImage;
