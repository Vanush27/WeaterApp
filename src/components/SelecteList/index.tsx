import DeleteIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {useStyles} from './styles';
import {CheckBox} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Text, View} from 'react-native';
import {RadioButton} from '@components';

const SelecteList = ({name}: any) => {
  const {styles} = useStyles();
  // data={[...new Array(countryListWeat).keys()]}

  const [data, setData] = useState([
    {key: '1', label: 'name', selected: false},
    {key: '2', label: 'name', selected: false},
    {key: '3', label: 'name', selected: false},
    // Add more items as needed
  ]);

  const allSelected = data.every(item => item.selected);

  const handleToggleSelectAll = () => {
    const newData = data.map(item => ({...item, selected: !allSelected}));
    setData(newData);
  };

  const handleSelectItem = key => {
    const newData = data.map(item => {
      if (item.key === key) {
        return {...item, selected: !item.selected};
      }
      return item;
    });
    setData(newData);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.select_item}
        onPress={() => handleSelectItem(item.key)}>
        <Text>{item.label}</Text>
        {item.selected && <RadioButton />}
      </TouchableOpacity>
    );
  };

  // const handleDeleteItem = index => {
  //   const newData = [...data];
  //   newData.splice(index, 1); // Remove item at index
  //   setData(newData);
  // };

  return (
    <View>
      <View style={styles.container}>
        <CheckBox
          checked={allSelected}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={handleToggleSelectAll}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SelecteList;
