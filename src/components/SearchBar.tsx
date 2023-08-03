import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {theme} from '../config/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type ISearchBarProps = {
  setSearchText: any;
  onSearchHandler: any;
};

const SIZE = 100.0;

const SearchBar: React.FC<ISearchBarProps> = ({
  setSearchText,
  onSearchHandler,
}) => {
  return (
    <View style={styles.searchBarStyle}>
      <TextInput
        placeholder="Enter title or author"
        onChangeText={(text: string) => setSearchText(text)}
        style={styles.textInputStyle}
      />
      <TouchableOpacity onPress={onSearchHandler}>
        <Image
          source={require('../assets/images/searchIcon.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: SIZE / 4,
    paddingHorizontal: SIZE / 6,
    marginVertical: SIZE / 6,
    elevation: 4,
    marginHorizontal: SIZE / 8,
  },
  searchIcon: {
    width: SIZE / 4,
    height: SIZE / 4,
  },
  textInputStyle: {
    fontSize: theme.font.primary,
    color: theme.colors.black,
  },
});

export {SearchBar};
