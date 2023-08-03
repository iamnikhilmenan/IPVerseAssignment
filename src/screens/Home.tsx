import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

// :: Components
import {SearchBar} from '../components/SearchBar';
import {BookList} from '../components/BookList';
import {theme} from '../config/Theme';

const SIZE = 100.0;

export type IHomeProps = {};

const Home: React.FC<IHomeProps> = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [isBookListShow, setIsBookListShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchHandler = async () => {
    if (searchText !== '') {
      setIsLoading(true);
      await fetch(`http://openlibrary.org/search.json?q=${searchText}`, {})
        .then(res => res.json())
        .then(data => {
          setSearchData(data?.docs.slice(0, 10));
          setIsBookListShow(true);
        });
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>IP Verse Assignment</Text>
      </View>
      <SearchBar
        setSearchText={setSearchText}
        onSearchHandler={onSearchHandler}
      />
      {!isBookListShow ? (
        !isLoading ? (
          <Text style={styles.navBarText}>Search Any Books</Text>
        ) : (
          <ActivityIndicator />
        )
      ) : (
        <BookList navigation={navigation} data={searchData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: SIZE / 5,
    paddingVertical: SIZE / 7,
  },
  navBarText: {
    fontSize: SIZE / 5.5,
    fontWeight: '700',
    color: theme.colors.black,
    alignSelf: 'center',
  },
  backIcon: {
    width: SIZE / 5,
    height: SIZE / 5,
    padding: SIZE / 10,
  },
  homeContainer: {
    backgroundColor: theme.colors.alabaster,
    flex: 1,
  },
});

export {Home};
