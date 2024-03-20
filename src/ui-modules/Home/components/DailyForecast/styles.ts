import {colors} from '@assets/colors';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    dayly_container: {
      // backgroundColor: 'rgba(255,255,255,0.3)',
    },

    dayly_image: {
      marginTop: 15,
      height: 220,
      opacity: 0.8,
      width: '100%',
    },
    week_day: {
      flex: 1,
      flexDirection: 'row',
    },

    left_container: {
      flex: 0.7,
      alignItems: 'center',
      // backgroundColor: 'rgba(255,255,255,0.3)',
    },

    text_color: {color: colors.primaryBlack, fontSize: 22},

    right_container: {
      flex: 0.3,
      // backgroundColor: 'rgba(255,255,255,0.3)',
    },
    degree: {
      fontSize: 24,
      margin: 5,
    },
  });

  return {
    styles,
    theme,
  };
}
