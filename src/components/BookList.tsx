import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../config/Theme';

export type IBookListProps = {};

const SIZE = 100.0;

const BookList: React.FC<IBookListProps> = ({navigation, data}: any) => {
  const onBookCardHandler = (item: number) => {
    navigation.navigate('BookDetails', {book: item});
  };

  return (
    <View style={styles.bookListStyle}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                style={styles.bookContainer}
                key={index.toString()}
                onPress={() => onBookCardHandler(item)}>
                <Image
                  source={require('../assets/images/book.jpg')}
                  style={styles.bookCoverStyle}
                  resizeMode="cover"
                />
                <View style={styles.bookDetails}>
                  <View>
                    {/* Book Name */}
                    <Text numberOfLines={1} style={styles.bookDetailsKeyText}>
                      Name :{' '}
                      <Text style={styles.bookDetailsValueText}>
                        {item.title !== undefined
                          ? item.title
                          : 'Title is not available'}
                      </Text>
                    </Text>

                    {/* Author Name */}
                    <Text numberOfLines={1} style={styles.bookDetailsKeyText}>
                      Author :{' '}
                      <Text style={styles.bookDetailsValueText}>
                        {item.author_name !== undefined
                          ? item.author_name
                          : 'Author is not available'}
                      </Text>
                    </Text>

                    {/* Book ISBN */}
                    <Text numberOfLines={1} style={styles.bookDetailsKeyText}>
                      ISBN :{' '}
                      <Text style={styles.bookDetailsValueText}>
                        {item.isbn !== undefined
                          ? item.isbn
                          : ' ISBN is not available'}
                      </Text>
                    </Text>

                    {/* Book Decription */}
                    <Text numberOfLines={4} style={styles.bookDetailsKeyText}>
                      Decription :{' '}
                      <Text style={styles.bookDetailsValueText}>
                        {item.description !== undefined
                          ? item.description
                          : 'Description'}
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookListStyle: {
    flex: 1,
  },
  bookContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: SIZE / 10,
    marginBottom: SIZE / 7,
    borderRadius: SIZE / 10,
    elevation: 5,
    marginHorizontal: SIZE / 8,
  },
  bookCoverStyle: {
    width: theme.size.width / 3,
    height: theme.size.width / 2.5,
    borderRadius: SIZE / 15,
  },
  bookDetails: {
    marginBottom: SIZE / 10,
    marginLeft: SIZE / 10,
    flex: 1,
  },
  bookDetailsKeyText: {
    color: theme.colors.black,
    fontWeight: '700',
    marginBottom: SIZE / 30,
    fontSize: SIZE / 7.5,
  },
  bookDetailsValueText: {
    color: theme.colors.black,
    fontWeight: '400',
    textAlign: 'justify',
  },
});

export {BookList};
