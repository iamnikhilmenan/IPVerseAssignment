import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {theme} from '../config/Theme';
import {ScrollView} from 'react-native-gesture-handler';

export type IBookDetailsProps = {};

const SIZE = 100.0;

const BookDetails: React.FC<IBookDetailsProps> = ({navigation, route}: any) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [bookData, setBookData] = useState(route?.params?.book);

  const onReadMorePress = () => {
    setIsReadMore(false);
  };

  useEffect(() => {
    bookData?.key !== '' &&
      fetch(`https://openlibrary.org${bookData?.key}.json`)
        .then(res => res.json())
        .then(data =>
          setBookData({...bookData, description: data?.description}),
        )
        .catch(err => console.log(err.message));
  }, [bookData?.key]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left-arrow-icon.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollConatiner}
        showsVerticalScrollIndicator={false}>
        <View style={styles.bookCoverContainer}>
          <Image
            source={require('../assets/images/book.jpg')}
            style={styles.bookCover}
          />
        </View>
        <View style={styles.bookDetailConatainer}>
          {/* Book Name */}
          <View style={styles.bookDetail}>
            <Text style={styles.bookKeyTextStyle}>Name</Text>
            <Text style={styles.bookValueTextStyle}>
              {bookData?.title !== undefined
                ? bookData?.title
                : 'Title is not available'}
            </Text>
          </View>

          {/* Book Author */}
          <View style={styles.bookDetail}>
            <Text style={styles.bookKeyTextStyle}>Name</Text>
            <Text style={styles.bookValueTextStyle}>
              {bookData?.author_name[0] !== undefined
                ? bookData?.author_name[0]
                : 'Author name not available'}
            </Text>
          </View>

          {/* Book Description */}
          <View style={styles.bookDetail}>
            <Text style={styles.bookKeyTextStyle}>ISBN</Text>
            <Text style={styles.bookValueTextStyle}>
              {bookData?.isbn[0] !== undefined
                ? bookData?.isbn[0]
                : 'ISBN number not exist'}
            </Text>
          </View>

          {/* Description */}
          <View style={styles.bookDetail}>
            <Text style={styles.bookKeyTextStyle}>Description</Text>
            <Text
              style={styles.bookValueTextStyle}
              numberOfLines={isReadMore ? 4 : undefined}>
              {bookData?.description !== undefined
                ? bookData?.description
                : 'Description is not available'}
            </Text>
            <Text style={{color: 'red'}} onPress={onReadMorePress}>
              {isReadMore && 'Read More'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: SIZE / 5,
    paddingVertical: SIZE / 7,
  },
  backIcon: {
    width: SIZE / 5,
    height: SIZE / 5,
    padding: SIZE / 10,
  },
  bookCoverContainer: {
    backgroundColor: theme.colors.alabaster,
    height: SIZE * 3.5,
    marginBottom: SIZE / 10,
    elevation: 5,
    borderRadius: SIZE / 10,
    overflow: 'hidden',
    padding: SIZE / 10,
    margin: SIZE / 6,
  },
  bookCover: {
    width: '100%',
    height: '100%',
    borderRadius: SIZE / 10,
  },
  bookDetailConatainer: {
    margin: SIZE / 6,
  },
  bookDetail: {
    marginBottom: SIZE / 10,
  },
  bookKeyTextStyle: {
    fontSize: SIZE / 6,
    fontWeight: '900',
    color: theme.colors.black,
  },
  bookValueTextStyle: {
    fontSize: SIZE / 7,
    color: theme.colors.black,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  mainContainer: {
    backgroundColor: theme.colors.alabaster,
    flex: 1,
  },
  scrollConatiner: {
    backgroundColor: theme.colors.white,
    borderRadius: SIZE / 10,
    margin: SIZE / 5,
  },
});

export {BookDetails};
