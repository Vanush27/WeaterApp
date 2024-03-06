import {View, Text} from 'react-native';
import {useStyles} from './styles';

const Settings = () => {
  const {styles} = useStyles();

  const temperature: string = 'Temperature';
  const language: string = 'Language';

  const celsiusTemp: string = '\u00b0 C';
  const fahrenheitTemp: string = '\u00b0 F';
  // const languages: string = 'ru / en ';

  return (
    <View style={styles.container}>
      <Text>Settings </Text>
      {/* <Setting
        fahrenheitTemp={fahrenheitTemp}
        measure={celsiusTemp}
        name={temperature}
      /> */}
      {/*<Setting fahrenheitTemp={} measure={'12'} name={language} />*/}
    </View>
  );
};

export default Settings;
