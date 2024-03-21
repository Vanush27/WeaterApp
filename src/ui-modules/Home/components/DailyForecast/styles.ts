import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    dayly_container: {},

    dayly_image: {
      marginTop: 15,
      height: 220,
      opacity: 0.9,
      width: '100%',
    },
    week_day: {
      flex: 1,
      flexDirection: 'row',
    },

    left_container: {
      flex: 0.65,
      alignItems: 'center',
      marginTop: 12,
      // backgroundColor: 'rgba(255,255,255,0.3)',
    },

    text_color: {
      color: colors.primaryBlack,
      fontSize: size.typography_30,
      fontWeight: '900',
    },

    right_container: {
      flex: 0.35,
      flexDirection: 'column',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderBottomEndRadius: 15,
      borderTopRightRadius: 15,
    },
    right_container_temp: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 8,
    },
    min_temp: {
      fontSize: size.typography_30,
      color: '#0094db',

      marginLeft: 15,
      fontWeight: '900',
    },
    max_temp: {
      color: '#fe9900',
      fontSize: size.typography_30,
      marginLeft: 15,
      fontWeight: '900',
    },
  });

  return {
    styles,
    theme,
  };
}
