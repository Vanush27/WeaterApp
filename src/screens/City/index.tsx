import React, {useState} from 'react';
import {View} from 'react-native';

import {useAppTranslation, useWeather} from '@hooks';
import {CheckBox} from '@rneui/themed';

import {useStyles} from './styles';
import {SelecteList, PlusButton} from '@components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {ICountryListWeather} from '@types/Weather';
import {ICountryListWeather} from '../../types/Weather';
import {ScrollView} from 'react-native-gesture-handler';
import DeleteIcon from 'react-native-vector-icons/AntDesign';

const City = () => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();
  const {countryListWeather, setCurrentCountry} = useWeather();

  const handleCountry = () => {
    navigate('AddCity');
  };

  const [_, setData] = useState(countryListWeather);

  const handlePressCountry = async countryItem => {
    // await setCurrentCountry(countryItem);
    // navigation?.navigate('Home');
  };

  const onPressFunction = () => {
    // todo change size button
  };

  const allSelected = countryListWeather?.every(item => item.city.selected);

  const handleToggleSelectAll = () => {
    const newData = countryListWeather?.map(item => ({
      ...item.city?.selected,
      selected: !allSelected,
    }));
    setData(newData);
  };

  function addObjectField(obj) {
    obj.selected = true;
    return obj;
  }
  const handleSelectItem = (city: any) => {
    const objectWithSelectedField = addObjectField(city);

    const newData = countryListWeather?.map(item => {
      if (item.selected === objectWithSelectedField) {
        return {...item, selected: !item.selected};
      }
      return item;
    });
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.country_list}>
        <View style={styles.all_select}>
          <CheckBox
            checked={allSelected}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={handleToggleSelectAll}
            wrapperStyle={
              {
                // backgroundColor: 'transparent',
                // borderColor: 'transparent',
              }
            }
            checkedColor="green"
          />
        </View>
        <ScrollView>
          {/* TODO list country */}
          {!!countryListWeather?.length &&
            countryListWeather?.map((obj: any, index: string) => (
              <>
                <SelecteList
                  data={obj}
                  handleSelectItem={handleSelectItem}
                  index={index}
                  key={index}
                />
                {obj?.city?.selected && (
                  <DeleteIcon color={'red'} name="delete" size={24} />
                )}
              </>
            ))}
        </ScrollView>
      </View>

      <View style={styles.plus_btn_wrapper}>
        <PlusButton backgroundColor={'green'} handleCountry={handleCountry} />
      </View>
    </View>
  );
};

export default City;
