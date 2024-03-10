import {View} from 'react-native';
import {Text} from '@rneui/themed';
import {useAppTranslation} from '@hooks';

const City = () => {
  const {t} = useAppTranslation();

  return (
    <View>
      <Text>{t('Select Your City')}</Text>
    </View>
  );
};

export default City;
