import {lineHeight, size} from '@assets/fonts/size';
import {H_MAX_HEIGHT} from '@constants';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_image_card: {
      // flex: 1,
    },
    header: {
      // flex: 2,
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
    },

    container: {
      flex: 1,
    },

    image: {
      height: '100%',
      // marginLeft: 2,
      // marginRight: 2,
    },
    image_card: {
      // width: '100%',
      // borderBottomColor: 'red',
      // borderWidth: 1,
      // padding: 30,
      // resizeMode: 'cover',
    },

    wrapper_top: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      // backgroundColor: 'rgba(255,255,255,0.2)',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    wrapper_bootom: {
      flex: 2,
      // height: 300,
      // display: 'flex',
      justifyContent: 'center',
      // paddingTop: 20,

      // alignItems: 'center',
      // backgroundColor: 'rgba(255,255,255,0.)',
      backgroundColor: 'rgba(5,2,0,0.4)',
    },

    // name_temp: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-evenly',
    // },

    // country_name_text: {
    //   fontFamily: theme.fonts?.fontFamily.monserratBold,
    //   fontWeight: '400',
    //   fontSize: size.typography_36,
    //   lineHeight: lineHeight.lineHeight_36,
    //   color: 'rgb(31,3,168)',
    //   textTransform: 'uppercase',
    // },

    // temp_style: {
    //   fontFamily: theme.fonts?.fontFamily.monserratBold,
    //   fontWeight: '400',
    //   fontSize: size.typography_36,
    //   lineHeight: lineHeight.lineHeight_36,
    //   color: 'rgb(9,34,157)',
    // },
    // not_data_image: {
    //   flex: 1,
    // },
  });

  return {
    styles,
    theme,
  };
}
