import {HorizontalCarousel} from '@components';
import {View} from 'react-native';
import {useStyles} from './styles';
import {useAppSelector} from '@hooks';

const Home = () => {
  const {styles} = useStyles();
  const {countryListWeather} = useAppSelector(state => state.weather);

  return (
    <View style={styles.container}>
      <HorizontalCarousel />
    </View>
  );
};

export default Home;
