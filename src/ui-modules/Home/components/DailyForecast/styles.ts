import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_weather: {
      margin: 8,
      backgroundColor: '#94f15d',
    },

    day_container: {
      backgroundColor: '#48319D',
      shadowOpacity: 20,
      margin: 10,
      borderRadius: 15,
      justifyContent: 'space-evenly',
      height: 150,
    },
    date_container: {
      textAlign: 'right',

      margin: 5,
    },
    week_day: {
      fontSize: 24,
      backgroundColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon_temp_view: {
      flex: 2,
      alignItems: 'center',
    },
    text_color: {color: '#0216fa'},
    weather_icon: {
      width: 50,
      height: 50,
    },
    degree_view: {
      flex: 1,
      backgroundColor: '#32a7f8',
    },
    degree: {
      fontSize: 24,
      margin: 5,
    },
    feels_like: {fontSize: 14},
    week_day_name: {alignItems: 'center', justifyContent: 'center'},
  });

  return {
    styles,
    theme,
  };
}
