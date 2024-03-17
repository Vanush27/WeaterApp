import {View} from 'react-native';
import {HorizontalCarousel} from '@components';
import {useStyles} from './styles';

const Home = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <HorizontalCarousel />
    </View>
  );
};

export default Home;
